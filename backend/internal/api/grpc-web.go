package api

import (
	"context"
	"fmt"
	"grpc-web-example/pb"
	"time"

	"github.com/tkcrm/mx/logger"
	"google.golang.org/grpc"
	"google.golang.org/protobuf/types/known/timestamppb"
)

type grpcWebServer struct {
	logger logger.Logger
	ctx    context.Context

	pb.UnimplementedServiceServer
}

func NewGrpcWebServer(ctx context.Context, logger logger.Logger) *grpcWebServer {
	return &grpcWebServer{
		logger: logger,
		ctx:    ctx,
	}
}

func (s *grpcWebServer) Name() string { return "grpc-web-server" }

func (s *grpcWebServer) Register(srv *grpc.Server) {
	pb.RegisterServiceServer(srv, s)
}

func (s *grpcWebServer) Rpc(ctx context.Context, req *pb.RpcRequest) (*pb.RpcResponse, error) {
	if req.Text == "" {
		return nil, fmt.Errorf("empty text")
	}

	return &pb.RpcResponse{
		Response: fmt.Sprintf("You requested: %s", req.Text),
		Date:     timestamppb.Now(),
	}, nil
}

func (s *grpcWebServer) Stream(req *pb.StreamRequest, stream pb.Service_StreamServer) error {
	errChan := make(chan error, 1)
	go func() {
		var lastValue int32 = 0

		for {
			lastValue++

			replyMsg := &pb.StreamResponse{
				RandInteger: lastValue,
				Date:        timestamppb.New(time.Now()),
			}

			if err := stream.Send(replyMsg); err != nil {
				errChan <- err
				return
			}

			time.Sleep(time.Second)
		}
	}()

	select {
	case <-s.ctx.Done():
	case err := <-errChan:
		return err
	}

	return nil
}
