# mcbeam-plus-example

### Installing
clone the app
```
git clone git@github.com:wolfplus2048/mcbeam-example.git
```

### Running the example
run nats, etcd, gate
```
docker-compose up -d
mcbeam --registry=etcd gate
```
run server
```
make proto
go run auth_srv/main.go --registry=etcd
go run mgr_srv/main.go --registry=etcd
go run room_srv/main.go --registry=etcd
```
run cocos client
