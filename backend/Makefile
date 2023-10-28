current_dir = $(shell pwd)

PATH := $(PATH):$(PWD)/bin:$(current_dir)/frontend/node_modules/@protobuf-ts/plugin/bin

start:
	go run -v main.go

build:
	go build -o ./.build/app -v main.go

watch:
	air -c .air.toml

