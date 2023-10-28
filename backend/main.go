package main

import (
	"grpc-web-example/internal/api"

	"github.com/tkcrm/mx/launcher"
	"github.com/tkcrm/mx/logger"
	"github.com/tkcrm/mx/service"
	"github.com/tkcrm/mx/service/pingpong"
	"github.com/tkcrm/mx/transport/grpc_transport"
)

func main() {
	logger := logger.NewExtended()

	ln := launcher.New(
		launcher.WithLogger(logger),
		launcher.WithName("grpc-web-backend"),
		launcher.WithRunnerServicesSequence(launcher.RunnerServicesSequenceFifo),
		launcher.WithAppStartStopLog(true),
	)

	// grpc servers
	grpcWebServer := api.NewGrpcWebServer(ln.Context(), logger)

	// grpc instance
	grpcServer := grpc_transport.NewServer(
		grpc_transport.WithLogger(logger),
		grpc_transport.WithServices(grpcWebServer),
	)

	ln.ServicesRunner().Register(
		service.New(service.WithService(grpcServer)),
		service.New(service.WithService(pingpong.New(logger))),
	)

	if err := ln.Run(); err != nil {
		logger.Fatal(err)
	}
}
