# GRPC Web Example

This repository contains an example of using grpc-web with a backend written in golang.

![Preview](https://github.com/sxwebdev/grpc-web-example/blob/master/preview.png?raw=true)

## Tech stack

- Backend: `Golang`
- Frontend: `React`
- Proxy: `Envoy`

## Required tools

- Docker compose

## Useful commands

```bash
# Start
make start

# Stop
make stop

# Generate proto
# Before doing this, install the dependencies in the frontend folder
make genproto
```
