FROM golang:1.21-alpine AS builder

RUN apk add --update --no-cache git make

WORKDIR /app

COPY go.mod .
COPY go.sum .

ENV APP_VERSION=0.0.1

RUN go mod download

COPY . .

RUN go build -o ./server -v -ldflags "-s -w -X main.version=${APP_VERSION}" ./main.go

FROM alpine:3.18

RUN apk add --no-cache iputils busybox-extras curl

WORKDIR /app

COPY --from=builder --chown=appuser:appuser /app/server .

ENTRYPOINT ["/app/server"]
