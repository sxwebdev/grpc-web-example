current_dir = $(shell pwd)

PATH  := $(PATH):$(PWD)/bin:$(current_dir)/frontend/node_modules/@protobuf-ts/plugin/bin

genproto:
	rm -rf $(current_dir)/backend/pb/*
	rm -rf $(current_dir)/frontend/src/api/proto/*
	protoc \
	--go_out=:$(current_dir)/backend/pb \
	--go-grpc_out=:$(current_dir)/backend/pb \
	--ts_out $(current_dir)/frontend/src/api/proto \
	--ts_opt generate_dependencies \
	hello.proto
	npx prettier --write --log-level=error $(current_dir)/frontend/src/api/proto/*

start:
	docker compose up -d
	open http://localhost:3000

stop:
	docker compose down
