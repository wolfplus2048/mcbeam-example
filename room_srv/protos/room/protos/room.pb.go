// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.25.0
// 	protoc        v3.13.0
// source: room_srv/protos/room/protos/room.proto

package proto_room

import (
	proto "github.com/golang/protobuf/proto"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// This is a compile-time assertion that a sufficiently up-to-date version
// of the legacy proto package is being used.
const _ = proto.ProtoPackageIsVersion4

type User struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Uid      string `protobuf:"bytes,1,opt,name=uid,proto3" json:"uid,omitempty"`
	Username string `protobuf:"bytes,2,opt,name=username,proto3" json:"username,omitempty"`
}

func (x *User) Reset() {
	*x = User{}
	if protoimpl.UnsafeEnabled {
		mi := &file_room_srv_protos_room_protos_room_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *User) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*User) ProtoMessage() {}

func (x *User) ProtoReflect() protoreflect.Message {
	mi := &file_room_srv_protos_room_protos_room_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use User.ProtoReflect.Descriptor instead.
func (*User) Descriptor() ([]byte, []int) {
	return file_room_srv_protos_room_protos_room_proto_rawDescGZIP(), []int{0}
}

func (x *User) GetUid() string {
	if x != nil {
		return x.Uid
	}
	return ""
}

func (x *User) GetUsername() string {
	if x != nil {
		return x.Username
	}
	return ""
}

type Room struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id    string  `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Name  string  `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Users []*User `protobuf:"bytes,4,rep,name=users,proto3" json:"users,omitempty"`
}

func (x *Room) Reset() {
	*x = Room{}
	if protoimpl.UnsafeEnabled {
		mi := &file_room_srv_protos_room_protos_room_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Room) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Room) ProtoMessage() {}

func (x *Room) ProtoReflect() protoreflect.Message {
	mi := &file_room_srv_protos_room_protos_room_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Room.ProtoReflect.Descriptor instead.
func (*Room) Descriptor() ([]byte, []int) {
	return file_room_srv_protos_room_protos_room_proto_rawDescGZIP(), []int{1}
}

func (x *Room) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Room) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Room) GetUsers() []*User {
	if x != nil {
		return x.Users
	}
	return nil
}

type JoinReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *JoinReq) Reset() {
	*x = JoinReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_room_srv_protos_room_protos_room_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *JoinReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*JoinReq) ProtoMessage() {}

func (x *JoinReq) ProtoReflect() protoreflect.Message {
	mi := &file_room_srv_protos_room_protos_room_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use JoinReq.ProtoReflect.Descriptor instead.
func (*JoinReq) Descriptor() ([]byte, []int) {
	return file_room_srv_protos_room_protos_room_proto_rawDescGZIP(), []int{2}
}

func (x *JoinReq) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

type JoinRes struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Code string `protobuf:"bytes,1,opt,name=code,proto3" json:"code,omitempty"`
	Room *Room  `protobuf:"bytes,2,opt,name=room,proto3" json:"room,omitempty"`
}

func (x *JoinRes) Reset() {
	*x = JoinRes{}
	if protoimpl.UnsafeEnabled {
		mi := &file_room_srv_protos_room_protos_room_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *JoinRes) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*JoinRes) ProtoMessage() {}

func (x *JoinRes) ProtoReflect() protoreflect.Message {
	mi := &file_room_srv_protos_room_protos_room_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use JoinRes.ProtoReflect.Descriptor instead.
func (*JoinRes) Descriptor() ([]byte, []int) {
	return file_room_srv_protos_room_protos_room_proto_rawDescGZIP(), []int{3}
}

func (x *JoinRes) GetCode() string {
	if x != nil {
		return x.Code
	}
	return ""
}

func (x *JoinRes) GetRoom() *Room {
	if x != nil {
		return x.Room
	}
	return nil
}

type LeaveNot struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Uid string `protobuf:"bytes,1,opt,name=uid,proto3" json:"uid,omitempty"`
}

func (x *LeaveNot) Reset() {
	*x = LeaveNot{}
	if protoimpl.UnsafeEnabled {
		mi := &file_room_srv_protos_room_protos_room_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *LeaveNot) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*LeaveNot) ProtoMessage() {}

func (x *LeaveNot) ProtoReflect() protoreflect.Message {
	mi := &file_room_srv_protos_room_protos_room_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use LeaveNot.ProtoReflect.Descriptor instead.
func (*LeaveNot) Descriptor() ([]byte, []int) {
	return file_room_srv_protos_room_protos_room_proto_rawDescGZIP(), []int{4}
}

func (x *LeaveNot) GetUid() string {
	if x != nil {
		return x.Uid
	}
	return ""
}

type ChatReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Content string `protobuf:"bytes,1,opt,name=content,proto3" json:"content,omitempty"`
}

func (x *ChatReq) Reset() {
	*x = ChatReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_room_srv_protos_room_protos_room_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ChatReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ChatReq) ProtoMessage() {}

func (x *ChatReq) ProtoReflect() protoreflect.Message {
	mi := &file_room_srv_protos_room_protos_room_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ChatReq.ProtoReflect.Descriptor instead.
func (*ChatReq) Descriptor() ([]byte, []int) {
	return file_room_srv_protos_room_protos_room_proto_rawDescGZIP(), []int{5}
}

func (x *ChatReq) GetContent() string {
	if x != nil {
		return x.Content
	}
	return ""
}

type ChatNot struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Uid     string `protobuf:"bytes,1,opt,name=uid,proto3" json:"uid,omitempty"`
	Content string `protobuf:"bytes,2,opt,name=content,proto3" json:"content,omitempty"`
}

func (x *ChatNot) Reset() {
	*x = ChatNot{}
	if protoimpl.UnsafeEnabled {
		mi := &file_room_srv_protos_room_protos_room_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ChatNot) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ChatNot) ProtoMessage() {}

func (x *ChatNot) ProtoReflect() protoreflect.Message {
	mi := &file_room_srv_protos_room_protos_room_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ChatNot.ProtoReflect.Descriptor instead.
func (*ChatNot) Descriptor() ([]byte, []int) {
	return file_room_srv_protos_room_protos_room_proto_rawDescGZIP(), []int{6}
}

func (x *ChatNot) GetUid() string {
	if x != nil {
		return x.Uid
	}
	return ""
}

func (x *ChatNot) GetContent() string {
	if x != nil {
		return x.Content
	}
	return ""
}

type UserAction struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Action int32  `protobuf:"varint,1,opt,name=action,proto3" json:"action,omitempty"`
	Uid    string `protobuf:"bytes,2,opt,name=uid,proto3" json:"uid,omitempty"`
}

func (x *UserAction) Reset() {
	*x = UserAction{}
	if protoimpl.UnsafeEnabled {
		mi := &file_room_srv_protos_room_protos_room_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UserAction) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UserAction) ProtoMessage() {}

func (x *UserAction) ProtoReflect() protoreflect.Message {
	mi := &file_room_srv_protos_room_protos_room_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UserAction.ProtoReflect.Descriptor instead.
func (*UserAction) Descriptor() ([]byte, []int) {
	return file_room_srv_protos_room_protos_room_proto_rawDescGZIP(), []int{7}
}

func (x *UserAction) GetAction() int32 {
	if x != nil {
		return x.Action
	}
	return 0
}

func (x *UserAction) GetUid() string {
	if x != nil {
		return x.Uid
	}
	return ""
}

type CreateRoomReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *CreateRoomReq) Reset() {
	*x = CreateRoomReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_room_srv_protos_room_protos_room_proto_msgTypes[8]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateRoomReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateRoomReq) ProtoMessage() {}

func (x *CreateRoomReq) ProtoReflect() protoreflect.Message {
	mi := &file_room_srv_protos_room_protos_room_proto_msgTypes[8]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateRoomReq.ProtoReflect.Descriptor instead.
func (*CreateRoomReq) Descriptor() ([]byte, []int) {
	return file_room_srv_protos_room_protos_room_proto_rawDescGZIP(), []int{8}
}

func (x *CreateRoomReq) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

type CreateRoomRes struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Code     string `protobuf:"bytes,1,opt,name=code,proto3" json:"code,omitempty"`
	Room     *Room  `protobuf:"bytes,2,opt,name=room,proto3" json:"room,omitempty"`
	ServerId string `protobuf:"bytes,3,opt,name=serverId,proto3" json:"serverId,omitempty"`
}

func (x *CreateRoomRes) Reset() {
	*x = CreateRoomRes{}
	if protoimpl.UnsafeEnabled {
		mi := &file_room_srv_protos_room_protos_room_proto_msgTypes[9]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateRoomRes) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateRoomRes) ProtoMessage() {}

func (x *CreateRoomRes) ProtoReflect() protoreflect.Message {
	mi := &file_room_srv_protos_room_protos_room_proto_msgTypes[9]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateRoomRes.ProtoReflect.Descriptor instead.
func (*CreateRoomRes) Descriptor() ([]byte, []int) {
	return file_room_srv_protos_room_protos_room_proto_rawDescGZIP(), []int{9}
}

func (x *CreateRoomRes) GetCode() string {
	if x != nil {
		return x.Code
	}
	return ""
}

func (x *CreateRoomRes) GetRoom() *Room {
	if x != nil {
		return x.Room
	}
	return nil
}

func (x *CreateRoomRes) GetServerId() string {
	if x != nil {
		return x.ServerId
	}
	return ""
}

type CloseRoomNot struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Rid string `protobuf:"bytes,1,opt,name=rid,proto3" json:"rid,omitempty"`
}

func (x *CloseRoomNot) Reset() {
	*x = CloseRoomNot{}
	if protoimpl.UnsafeEnabled {
		mi := &file_room_srv_protos_room_protos_room_proto_msgTypes[10]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CloseRoomNot) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CloseRoomNot) ProtoMessage() {}

func (x *CloseRoomNot) ProtoReflect() protoreflect.Message {
	mi := &file_room_srv_protos_room_protos_room_proto_msgTypes[10]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CloseRoomNot.ProtoReflect.Descriptor instead.
func (*CloseRoomNot) Descriptor() ([]byte, []int) {
	return file_room_srv_protos_room_protos_room_proto_rawDescGZIP(), []int{10}
}

func (x *CloseRoomNot) GetRid() string {
	if x != nil {
		return x.Rid
	}
	return ""
}

var File_room_srv_protos_room_protos_room_proto protoreflect.FileDescriptor

var file_room_srv_protos_room_protos_room_proto_rawDesc = []byte{
	0x0a, 0x26, 0x72, 0x6f, 0x6f, 0x6d, 0x5f, 0x73, 0x72, 0x76, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x73, 0x2f, 0x72, 0x6f, 0x6f, 0x6d, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2f, 0x72, 0x6f,
	0x6f, 0x6d, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0a, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e,
	0x72, 0x6f, 0x6f, 0x6d, 0x22, 0x34, 0x0a, 0x04, 0x55, 0x73, 0x65, 0x72, 0x12, 0x10, 0x0a, 0x03,
	0x75, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x75, 0x69, 0x64, 0x12, 0x1a,
	0x0a, 0x08, 0x75, 0x73, 0x65, 0x72, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x08, 0x75, 0x73, 0x65, 0x72, 0x6e, 0x61, 0x6d, 0x65, 0x22, 0x52, 0x0a, 0x04, 0x52, 0x6f,
	0x6f, 0x6d, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02,
	0x69, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x26, 0x0a, 0x05, 0x75, 0x73, 0x65, 0x72, 0x73, 0x18,
	0x04, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x10, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x72, 0x6f,
	0x6f, 0x6d, 0x2e, 0x55, 0x73, 0x65, 0x72, 0x52, 0x05, 0x75, 0x73, 0x65, 0x72, 0x73, 0x22, 0x19,
	0x0a, 0x07, 0x4a, 0x6f, 0x69, 0x6e, 0x52, 0x65, 0x71, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x22, 0x43, 0x0a, 0x07, 0x4a, 0x6f, 0x69,
	0x6e, 0x52, 0x65, 0x73, 0x12, 0x12, 0x0a, 0x04, 0x63, 0x6f, 0x64, 0x65, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x04, 0x63, 0x6f, 0x64, 0x65, 0x12, 0x24, 0x0a, 0x04, 0x72, 0x6f, 0x6f, 0x6d,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x10, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x72,
	0x6f, 0x6f, 0x6d, 0x2e, 0x52, 0x6f, 0x6f, 0x6d, 0x52, 0x04, 0x72, 0x6f, 0x6f, 0x6d, 0x22, 0x1c,
	0x0a, 0x08, 0x4c, 0x65, 0x61, 0x76, 0x65, 0x4e, 0x6f, 0x74, 0x12, 0x10, 0x0a, 0x03, 0x75, 0x69,
	0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x75, 0x69, 0x64, 0x22, 0x23, 0x0a, 0x07,
	0x43, 0x68, 0x61, 0x74, 0x52, 0x65, 0x71, 0x12, 0x18, 0x0a, 0x07, 0x63, 0x6f, 0x6e, 0x74, 0x65,
	0x6e, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x63, 0x6f, 0x6e, 0x74, 0x65, 0x6e,
	0x74, 0x22, 0x35, 0x0a, 0x07, 0x43, 0x68, 0x61, 0x74, 0x4e, 0x6f, 0x74, 0x12, 0x10, 0x0a, 0x03,
	0x75, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x75, 0x69, 0x64, 0x12, 0x18,
	0x0a, 0x07, 0x63, 0x6f, 0x6e, 0x74, 0x65, 0x6e, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x07, 0x63, 0x6f, 0x6e, 0x74, 0x65, 0x6e, 0x74, 0x22, 0x36, 0x0a, 0x0a, 0x55, 0x73, 0x65, 0x72,
	0x41, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x16, 0x0a, 0x06, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x06, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x10,
	0x0a, 0x03, 0x75, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x75, 0x69, 0x64,
	0x22, 0x23, 0x0a, 0x0d, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x52, 0x6f, 0x6f, 0x6d, 0x52, 0x65,
	0x71, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x04, 0x6e, 0x61, 0x6d, 0x65, 0x22, 0x65, 0x0a, 0x0d, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x52,
	0x6f, 0x6f, 0x6d, 0x52, 0x65, 0x73, 0x12, 0x12, 0x0a, 0x04, 0x63, 0x6f, 0x64, 0x65, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x63, 0x6f, 0x64, 0x65, 0x12, 0x24, 0x0a, 0x04, 0x72, 0x6f,
	0x6f, 0x6d, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x10, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x2e, 0x72, 0x6f, 0x6f, 0x6d, 0x2e, 0x52, 0x6f, 0x6f, 0x6d, 0x52, 0x04, 0x72, 0x6f, 0x6f, 0x6d,
	0x12, 0x1a, 0x0a, 0x08, 0x73, 0x65, 0x72, 0x76, 0x65, 0x72, 0x49, 0x64, 0x18, 0x03, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x08, 0x73, 0x65, 0x72, 0x76, 0x65, 0x72, 0x49, 0x64, 0x22, 0x20, 0x0a, 0x0c,
	0x43, 0x6c, 0x6f, 0x73, 0x65, 0x52, 0x6f, 0x6f, 0x6d, 0x4e, 0x6f, 0x74, 0x12, 0x10, 0x0a, 0x03,
	0x72, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x72, 0x69, 0x64, 0x62, 0x06,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_room_srv_protos_room_protos_room_proto_rawDescOnce sync.Once
	file_room_srv_protos_room_protos_room_proto_rawDescData = file_room_srv_protos_room_protos_room_proto_rawDesc
)

func file_room_srv_protos_room_protos_room_proto_rawDescGZIP() []byte {
	file_room_srv_protos_room_protos_room_proto_rawDescOnce.Do(func() {
		file_room_srv_protos_room_protos_room_proto_rawDescData = protoimpl.X.CompressGZIP(file_room_srv_protos_room_protos_room_proto_rawDescData)
	})
	return file_room_srv_protos_room_protos_room_proto_rawDescData
}

var file_room_srv_protos_room_protos_room_proto_msgTypes = make([]protoimpl.MessageInfo, 11)
var file_room_srv_protos_room_protos_room_proto_goTypes = []interface{}{
	(*User)(nil),          // 0: proto.room.User
	(*Room)(nil),          // 1: proto.room.Room
	(*JoinReq)(nil),       // 2: proto.room.JoinReq
	(*JoinRes)(nil),       // 3: proto.room.JoinRes
	(*LeaveNot)(nil),      // 4: proto.room.LeaveNot
	(*ChatReq)(nil),       // 5: proto.room.ChatReq
	(*ChatNot)(nil),       // 6: proto.room.ChatNot
	(*UserAction)(nil),    // 7: proto.room.UserAction
	(*CreateRoomReq)(nil), // 8: proto.room.CreateRoomReq
	(*CreateRoomRes)(nil), // 9: proto.room.CreateRoomRes
	(*CloseRoomNot)(nil),  // 10: proto.room.CloseRoomNot
}
var file_room_srv_protos_room_protos_room_proto_depIdxs = []int32{
	0, // 0: proto.room.Room.users:type_name -> proto.room.User
	1, // 1: proto.room.JoinRes.room:type_name -> proto.room.Room
	1, // 2: proto.room.CreateRoomRes.room:type_name -> proto.room.Room
	3, // [3:3] is the sub-list for method output_type
	3, // [3:3] is the sub-list for method input_type
	3, // [3:3] is the sub-list for extension type_name
	3, // [3:3] is the sub-list for extension extendee
	0, // [0:3] is the sub-list for field type_name
}

func init() { file_room_srv_protos_room_protos_room_proto_init() }
func file_room_srv_protos_room_protos_room_proto_init() {
	if File_room_srv_protos_room_protos_room_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_room_srv_protos_room_protos_room_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*User); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_room_srv_protos_room_protos_room_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Room); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_room_srv_protos_room_protos_room_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*JoinReq); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_room_srv_protos_room_protos_room_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*JoinRes); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_room_srv_protos_room_protos_room_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*LeaveNot); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_room_srv_protos_room_protos_room_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ChatReq); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_room_srv_protos_room_protos_room_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ChatNot); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_room_srv_protos_room_protos_room_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UserAction); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_room_srv_protos_room_protos_room_proto_msgTypes[8].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateRoomReq); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_room_srv_protos_room_protos_room_proto_msgTypes[9].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateRoomRes); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_room_srv_protos_room_protos_room_proto_msgTypes[10].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CloseRoomNot); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_room_srv_protos_room_protos_room_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   11,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_room_srv_protos_room_protos_room_proto_goTypes,
		DependencyIndexes: file_room_srv_protos_room_protos_room_proto_depIdxs,
		MessageInfos:      file_room_srv_protos_room_protos_room_proto_msgTypes,
	}.Build()
	File_room_srv_protos_room_protos_room_proto = out.File
	file_room_srv_protos_room_protos_room_proto_rawDesc = nil
	file_room_srv_protos_room_protos_room_proto_goTypes = nil
	file_room_srv_protos_room_protos_room_proto_depIdxs = nil
}
