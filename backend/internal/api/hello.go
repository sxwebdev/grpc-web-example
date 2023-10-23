package api

import (
	"context"
	"fmt"
	"grpc-web-example/pb"

	"google.golang.org/grpc"
	"google.golang.org/protobuf/types/known/timestamppb"
)

type helloServer struct {
	name string

	pb.UnimplementedHelloServiceServer
}

func NewHelloServer() *helloServer {
	return &helloServer{name: "hello-server"}
}

// Name of the service
func (s *helloServer) Name() string { return s.name }

// Register service on grpc.Server
func (s *helloServer) Register(srv *grpc.Server) {
	pb.RegisterHelloServiceServer(srv, s)
}

func (s *helloServer) Hello(ctx context.Context, req *pb.HelloRequest) (*pb.HelloResponse, error) {
	if req.Text == "" {
		return nil, fmt.Errorf("empty text")
	}

	return &pb.HelloResponse{
		Response: fmt.Sprintf("You requested: %s", req.Text),
		Date:     timestamppb.Now(),
	}, nil
}
