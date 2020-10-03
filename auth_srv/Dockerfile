FROM golang:latest AS build

RUN mkdir -p /src
COPY    .    /src
WORKDIR      /src
RUN export GO111MODULE=on \
 && export GOPROXY=https://mirrors.aliyun.com/goproxy/ \
 && CGO_ENABLED=0 make

FROM alpine:latest
COPY --from=builder /src/auth_srv /auth_srv
ENTRYPOINT ["/auth_srv"]