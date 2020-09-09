import * as $protobuf from "protobufjs";
/** Namespace proto. */
export namespace proto {

    /** Namespace gate. */
    namespace gate {

        /** Properties of a LoginReq. */
        interface ILoginReq {

            /** LoginReq username */
            username?: (string|null);
        }

        /** Represents a LoginReq. */
        class LoginReq implements ILoginReq {

            /**
             * Constructs a new LoginReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: proto.gate.ILoginReq);

            /** LoginReq username. */
            public username: string;

            /**
             * Creates a new LoginReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoginReq instance
             */
            public static create(properties?: proto.gate.ILoginReq): proto.gate.LoginReq;

            /**
             * Encodes the specified LoginReq message. Does not implicitly {@link proto.gate.LoginReq.verify|verify} messages.
             * @param message LoginReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: proto.gate.ILoginReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoginReq message, length delimited. Does not implicitly {@link proto.gate.LoginReq.verify|verify} messages.
             * @param message LoginReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: proto.gate.ILoginReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoginReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoginReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.gate.LoginReq;

            /**
             * Decodes a LoginReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoginReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.gate.LoginReq;

            /**
             * Verifies a LoginReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoginReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoginReq
             */
            public static fromObject(object: { [k: string]: any }): proto.gate.LoginReq;

            /**
             * Creates a plain object from a LoginReq message. Also converts values to other types if specified.
             * @param message LoginReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: proto.gate.LoginReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoginReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a LoginRes. */
        interface ILoginRes {

            /** LoginRes code */
            code?: (string|null);

            /** LoginRes uid */
            uid?: (string|null);

            /** LoginRes username */
            username?: (string|null);
        }

        /** Represents a LoginRes. */
        class LoginRes implements ILoginRes {

            /**
             * Constructs a new LoginRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: proto.gate.ILoginRes);

            /** LoginRes code. */
            public code: string;

            /** LoginRes uid. */
            public uid: string;

            /** LoginRes username. */
            public username: string;

            /**
             * Creates a new LoginRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoginRes instance
             */
            public static create(properties?: proto.gate.ILoginRes): proto.gate.LoginRes;

            /**
             * Encodes the specified LoginRes message. Does not implicitly {@link proto.gate.LoginRes.verify|verify} messages.
             * @param message LoginRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: proto.gate.ILoginRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoginRes message, length delimited. Does not implicitly {@link proto.gate.LoginRes.verify|verify} messages.
             * @param message LoginRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: proto.gate.ILoginRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoginRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoginRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.gate.LoginRes;

            /**
             * Decodes a LoginRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoginRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.gate.LoginRes;

            /**
             * Verifies a LoginRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoginRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoginRes
             */
            public static fromObject(object: { [k: string]: any }): proto.gate.LoginRes;

            /**
             * Creates a plain object from a LoginRes message. Also converts values to other types if specified.
             * @param message LoginRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: proto.gate.LoginRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoginRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetUserInfoReq. */
        interface IGetUserInfoReq {

            /** GetUserInfoReq uid */
            uid?: (string|null);
        }

        /** Represents a GetUserInfoReq. */
        class GetUserInfoReq implements IGetUserInfoReq {

            /**
             * Constructs a new GetUserInfoReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: proto.gate.IGetUserInfoReq);

            /** GetUserInfoReq uid. */
            public uid: string;

            /**
             * Creates a new GetUserInfoReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetUserInfoReq instance
             */
            public static create(properties?: proto.gate.IGetUserInfoReq): proto.gate.GetUserInfoReq;

            /**
             * Encodes the specified GetUserInfoReq message. Does not implicitly {@link proto.gate.GetUserInfoReq.verify|verify} messages.
             * @param message GetUserInfoReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: proto.gate.IGetUserInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetUserInfoReq message, length delimited. Does not implicitly {@link proto.gate.GetUserInfoReq.verify|verify} messages.
             * @param message GetUserInfoReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: proto.gate.IGetUserInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetUserInfoReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetUserInfoReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.gate.GetUserInfoReq;

            /**
             * Decodes a GetUserInfoReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetUserInfoReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.gate.GetUserInfoReq;

            /**
             * Verifies a GetUserInfoReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetUserInfoReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetUserInfoReq
             */
            public static fromObject(object: { [k: string]: any }): proto.gate.GetUserInfoReq;

            /**
             * Creates a plain object from a GetUserInfoReq message. Also converts values to other types if specified.
             * @param message GetUserInfoReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: proto.gate.GetUserInfoReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetUserInfoReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetUserInfoRes. */
        interface IGetUserInfoRes {

            /** GetUserInfoRes code */
            code?: (string|null);

            /** GetUserInfoRes uid */
            uid?: (string|null);

            /** GetUserInfoRes username */
            username?: (string|null);
        }

        /** Represents a GetUserInfoRes. */
        class GetUserInfoRes implements IGetUserInfoRes {

            /**
             * Constructs a new GetUserInfoRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: proto.gate.IGetUserInfoRes);

            /** GetUserInfoRes code. */
            public code: string;

            /** GetUserInfoRes uid. */
            public uid: string;

            /** GetUserInfoRes username. */
            public username: string;

            /**
             * Creates a new GetUserInfoRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetUserInfoRes instance
             */
            public static create(properties?: proto.gate.IGetUserInfoRes): proto.gate.GetUserInfoRes;

            /**
             * Encodes the specified GetUserInfoRes message. Does not implicitly {@link proto.gate.GetUserInfoRes.verify|verify} messages.
             * @param message GetUserInfoRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: proto.gate.IGetUserInfoRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetUserInfoRes message, length delimited. Does not implicitly {@link proto.gate.GetUserInfoRes.verify|verify} messages.
             * @param message GetUserInfoRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: proto.gate.IGetUserInfoRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetUserInfoRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetUserInfoRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.gate.GetUserInfoRes;

            /**
             * Decodes a GetUserInfoRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetUserInfoRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.gate.GetUserInfoRes;

            /**
             * Verifies a GetUserInfoRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetUserInfoRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetUserInfoRes
             */
            public static fromObject(object: { [k: string]: any }): proto.gate.GetUserInfoRes;

            /**
             * Creates a plain object from a GetUserInfoRes message. Also converts values to other types if specified.
             * @param message GetUserInfoRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: proto.gate.GetUserInfoRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetUserInfoRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace mgr. */
    namespace mgr {

        /** Properties of a Room. */
        interface IRoom {

            /** Room id */
            id?: (string|null);

            /** Room name */
            name?: (string|null);

            /** Room status */
            status?: (number|null);
        }

        /** Represents a Room. */
        class Room implements IRoom {

            /**
             * Constructs a new Room.
             * @param [properties] Properties to set
             */
            constructor(properties?: proto.mgr.IRoom);

            /** Room id. */
            public id: string;

            /** Room name. */
            public name: string;

            /** Room status. */
            public status: number;

            /**
             * Creates a new Room instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Room instance
             */
            public static create(properties?: proto.mgr.IRoom): proto.mgr.Room;

            /**
             * Encodes the specified Room message. Does not implicitly {@link proto.mgr.Room.verify|verify} messages.
             * @param message Room message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: proto.mgr.IRoom, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Room message, length delimited. Does not implicitly {@link proto.mgr.Room.verify|verify} messages.
             * @param message Room message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: proto.mgr.IRoom, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Room message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Room
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.mgr.Room;

            /**
             * Decodes a Room message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Room
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.mgr.Room;

            /**
             * Verifies a Room message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Room message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Room
             */
            public static fromObject(object: { [k: string]: any }): proto.mgr.Room;

            /**
             * Creates a plain object from a Room message. Also converts values to other types if specified.
             * @param message Room
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: proto.mgr.Room, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Room to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetRoomListReq. */
        interface IGetRoomListReq {
        }

        /** Represents a GetRoomListReq. */
        class GetRoomListReq implements IGetRoomListReq {

            /**
             * Constructs a new GetRoomListReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: proto.mgr.IGetRoomListReq);

            /**
             * Creates a new GetRoomListReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetRoomListReq instance
             */
            public static create(properties?: proto.mgr.IGetRoomListReq): proto.mgr.GetRoomListReq;

            /**
             * Encodes the specified GetRoomListReq message. Does not implicitly {@link proto.mgr.GetRoomListReq.verify|verify} messages.
             * @param message GetRoomListReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: proto.mgr.IGetRoomListReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetRoomListReq message, length delimited. Does not implicitly {@link proto.mgr.GetRoomListReq.verify|verify} messages.
             * @param message GetRoomListReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: proto.mgr.IGetRoomListReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetRoomListReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetRoomListReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.mgr.GetRoomListReq;

            /**
             * Decodes a GetRoomListReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetRoomListReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.mgr.GetRoomListReq;

            /**
             * Verifies a GetRoomListReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetRoomListReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetRoomListReq
             */
            public static fromObject(object: { [k: string]: any }): proto.mgr.GetRoomListReq;

            /**
             * Creates a plain object from a GetRoomListReq message. Also converts values to other types if specified.
             * @param message GetRoomListReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: proto.mgr.GetRoomListReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetRoomListReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetRoomListRes. */
        interface IGetRoomListRes {

            /** GetRoomListRes rooms */
            rooms?: (proto.mgr.IRoom[]|null);
        }

        /** Represents a GetRoomListRes. */
        class GetRoomListRes implements IGetRoomListRes {

            /**
             * Constructs a new GetRoomListRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: proto.mgr.IGetRoomListRes);

            /** GetRoomListRes rooms. */
            public rooms: proto.mgr.IRoom[];

            /**
             * Creates a new GetRoomListRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetRoomListRes instance
             */
            public static create(properties?: proto.mgr.IGetRoomListRes): proto.mgr.GetRoomListRes;

            /**
             * Encodes the specified GetRoomListRes message. Does not implicitly {@link proto.mgr.GetRoomListRes.verify|verify} messages.
             * @param message GetRoomListRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: proto.mgr.IGetRoomListRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetRoomListRes message, length delimited. Does not implicitly {@link proto.mgr.GetRoomListRes.verify|verify} messages.
             * @param message GetRoomListRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: proto.mgr.IGetRoomListRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetRoomListRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetRoomListRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.mgr.GetRoomListRes;

            /**
             * Decodes a GetRoomListRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetRoomListRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.mgr.GetRoomListRes;

            /**
             * Verifies a GetRoomListRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetRoomListRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetRoomListRes
             */
            public static fromObject(object: { [k: string]: any }): proto.mgr.GetRoomListRes;

            /**
             * Creates a plain object from a GetRoomListRes message. Also converts values to other types if specified.
             * @param message GetRoomListRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: proto.mgr.GetRoomListRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetRoomListRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CreateRoomReq. */
        interface ICreateRoomReq {

            /** CreateRoomReq name */
            name?: (string|null);
        }

        /** Represents a CreateRoomReq. */
        class CreateRoomReq implements ICreateRoomReq {

            /**
             * Constructs a new CreateRoomReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: proto.mgr.ICreateRoomReq);

            /** CreateRoomReq name. */
            public name: string;

            /**
             * Creates a new CreateRoomReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CreateRoomReq instance
             */
            public static create(properties?: proto.mgr.ICreateRoomReq): proto.mgr.CreateRoomReq;

            /**
             * Encodes the specified CreateRoomReq message. Does not implicitly {@link proto.mgr.CreateRoomReq.verify|verify} messages.
             * @param message CreateRoomReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: proto.mgr.ICreateRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CreateRoomReq message, length delimited. Does not implicitly {@link proto.mgr.CreateRoomReq.verify|verify} messages.
             * @param message CreateRoomReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: proto.mgr.ICreateRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CreateRoomReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CreateRoomReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.mgr.CreateRoomReq;

            /**
             * Decodes a CreateRoomReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CreateRoomReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.mgr.CreateRoomReq;

            /**
             * Verifies a CreateRoomReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CreateRoomReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CreateRoomReq
             */
            public static fromObject(object: { [k: string]: any }): proto.mgr.CreateRoomReq;

            /**
             * Creates a plain object from a CreateRoomReq message. Also converts values to other types if specified.
             * @param message CreateRoomReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: proto.mgr.CreateRoomReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CreateRoomReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CreateRoomRes. */
        interface ICreateRoomRes {

            /** CreateRoomRes code */
            code?: (string|null);

            /** CreateRoomRes serverId */
            serverId?: (string|null);

            /** CreateRoomRes room */
            room?: (proto.mgr.IRoom|null);
        }

        /** Represents a CreateRoomRes. */
        class CreateRoomRes implements ICreateRoomRes {

            /**
             * Constructs a new CreateRoomRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: proto.mgr.ICreateRoomRes);

            /** CreateRoomRes code. */
            public code: string;

            /** CreateRoomRes serverId. */
            public serverId: string;

            /** CreateRoomRes room. */
            public room?: (proto.mgr.IRoom|null);

            /**
             * Creates a new CreateRoomRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CreateRoomRes instance
             */
            public static create(properties?: proto.mgr.ICreateRoomRes): proto.mgr.CreateRoomRes;

            /**
             * Encodes the specified CreateRoomRes message. Does not implicitly {@link proto.mgr.CreateRoomRes.verify|verify} messages.
             * @param message CreateRoomRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: proto.mgr.ICreateRoomRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CreateRoomRes message, length delimited. Does not implicitly {@link proto.mgr.CreateRoomRes.verify|verify} messages.
             * @param message CreateRoomRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: proto.mgr.ICreateRoomRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CreateRoomRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CreateRoomRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.mgr.CreateRoomRes;

            /**
             * Decodes a CreateRoomRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CreateRoomRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.mgr.CreateRoomRes;

            /**
             * Verifies a CreateRoomRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CreateRoomRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CreateRoomRes
             */
            public static fromObject(object: { [k: string]: any }): proto.mgr.CreateRoomRes;

            /**
             * Creates a plain object from a CreateRoomRes message. Also converts values to other types if specified.
             * @param message CreateRoomRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: proto.mgr.CreateRoomRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CreateRoomRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace room. */
    namespace room {

        /** Properties of a User. */
        interface IUser {

            /** User uid */
            uid?: (string|null);

            /** User username */
            username?: (string|null);
        }

        /** Represents a User. */
        class User implements IUser {

            /**
             * Constructs a new User.
             * @param [properties] Properties to set
             */
            constructor(properties?: proto.room.IUser);

            /** User uid. */
            public uid: string;

            /** User username. */
            public username: string;

            /**
             * Creates a new User instance using the specified properties.
             * @param [properties] Properties to set
             * @returns User instance
             */
            public static create(properties?: proto.room.IUser): proto.room.User;

            /**
             * Encodes the specified User message. Does not implicitly {@link proto.room.User.verify|verify} messages.
             * @param message User message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: proto.room.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified User message, length delimited. Does not implicitly {@link proto.room.User.verify|verify} messages.
             * @param message User message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: proto.room.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a User message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns User
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.room.User;

            /**
             * Decodes a User message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns User
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.room.User;

            /**
             * Verifies a User message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a User message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns User
             */
            public static fromObject(object: { [k: string]: any }): proto.room.User;

            /**
             * Creates a plain object from a User message. Also converts values to other types if specified.
             * @param message User
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: proto.room.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this User to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Room. */
        interface IRoom {

            /** Room id */
            id?: (string|null);

            /** Room name */
            name?: (string|null);

            /** Room users */
            users?: (proto.room.IUser[]|null);
        }

        /** Represents a Room. */
        class Room implements IRoom {

            /**
             * Constructs a new Room.
             * @param [properties] Properties to set
             */
            constructor(properties?: proto.room.IRoom);

            /** Room id. */
            public id: string;

            /** Room name. */
            public name: string;

            /** Room users. */
            public users: proto.room.IUser[];

            /**
             * Creates a new Room instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Room instance
             */
            public static create(properties?: proto.room.IRoom): proto.room.Room;

            /**
             * Encodes the specified Room message. Does not implicitly {@link proto.room.Room.verify|verify} messages.
             * @param message Room message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: proto.room.IRoom, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Room message, length delimited. Does not implicitly {@link proto.room.Room.verify|verify} messages.
             * @param message Room message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: proto.room.IRoom, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Room message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Room
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.room.Room;

            /**
             * Decodes a Room message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Room
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.room.Room;

            /**
             * Verifies a Room message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Room message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Room
             */
            public static fromObject(object: { [k: string]: any }): proto.room.Room;

            /**
             * Creates a plain object from a Room message. Also converts values to other types if specified.
             * @param message Room
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: proto.room.Room, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Room to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a JoinReq. */
        interface IJoinReq {

            /** JoinReq id */
            id?: (string|null);
        }

        /** Represents a JoinReq. */
        class JoinReq implements IJoinReq {

            /**
             * Constructs a new JoinReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: proto.room.IJoinReq);

            /** JoinReq id. */
            public id: string;

            /**
             * Creates a new JoinReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns JoinReq instance
             */
            public static create(properties?: proto.room.IJoinReq): proto.room.JoinReq;

            /**
             * Encodes the specified JoinReq message. Does not implicitly {@link proto.room.JoinReq.verify|verify} messages.
             * @param message JoinReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: proto.room.IJoinReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified JoinReq message, length delimited. Does not implicitly {@link proto.room.JoinReq.verify|verify} messages.
             * @param message JoinReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: proto.room.IJoinReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a JoinReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns JoinReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.room.JoinReq;

            /**
             * Decodes a JoinReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns JoinReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.room.JoinReq;

            /**
             * Verifies a JoinReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a JoinReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns JoinReq
             */
            public static fromObject(object: { [k: string]: any }): proto.room.JoinReq;

            /**
             * Creates a plain object from a JoinReq message. Also converts values to other types if specified.
             * @param message JoinReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: proto.room.JoinReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this JoinReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a JoinRes. */
        interface IJoinRes {

            /** JoinRes code */
            code?: (string|null);

            /** JoinRes room */
            room?: (proto.room.IRoom|null);
        }

        /** Represents a JoinRes. */
        class JoinRes implements IJoinRes {

            /**
             * Constructs a new JoinRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: proto.room.IJoinRes);

            /** JoinRes code. */
            public code: string;

            /** JoinRes room. */
            public room?: (proto.room.IRoom|null);

            /**
             * Creates a new JoinRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns JoinRes instance
             */
            public static create(properties?: proto.room.IJoinRes): proto.room.JoinRes;

            /**
             * Encodes the specified JoinRes message. Does not implicitly {@link proto.room.JoinRes.verify|verify} messages.
             * @param message JoinRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: proto.room.IJoinRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified JoinRes message, length delimited. Does not implicitly {@link proto.room.JoinRes.verify|verify} messages.
             * @param message JoinRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: proto.room.IJoinRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a JoinRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns JoinRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.room.JoinRes;

            /**
             * Decodes a JoinRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns JoinRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.room.JoinRes;

            /**
             * Verifies a JoinRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a JoinRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns JoinRes
             */
            public static fromObject(object: { [k: string]: any }): proto.room.JoinRes;

            /**
             * Creates a plain object from a JoinRes message. Also converts values to other types if specified.
             * @param message JoinRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: proto.room.JoinRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this JoinRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ChatReq. */
        interface IChatReq {

            /** ChatReq content */
            content?: (string|null);
        }

        /** Represents a ChatReq. */
        class ChatReq implements IChatReq {

            /**
             * Constructs a new ChatReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: proto.room.IChatReq);

            /** ChatReq content. */
            public content: string;

            /**
             * Creates a new ChatReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ChatReq instance
             */
            public static create(properties?: proto.room.IChatReq): proto.room.ChatReq;

            /**
             * Encodes the specified ChatReq message. Does not implicitly {@link proto.room.ChatReq.verify|verify} messages.
             * @param message ChatReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: proto.room.IChatReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ChatReq message, length delimited. Does not implicitly {@link proto.room.ChatReq.verify|verify} messages.
             * @param message ChatReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: proto.room.IChatReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ChatReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ChatReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.room.ChatReq;

            /**
             * Decodes a ChatReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ChatReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.room.ChatReq;

            /**
             * Verifies a ChatReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ChatReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ChatReq
             */
            public static fromObject(object: { [k: string]: any }): proto.room.ChatReq;

            /**
             * Creates a plain object from a ChatReq message. Also converts values to other types if specified.
             * @param message ChatReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: proto.room.ChatReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ChatReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ChatNot. */
        interface IChatNot {

            /** ChatNot uid */
            uid?: (string|null);

            /** ChatNot content */
            content?: (string|null);
        }

        /** Represents a ChatNot. */
        class ChatNot implements IChatNot {

            /**
             * Constructs a new ChatNot.
             * @param [properties] Properties to set
             */
            constructor(properties?: proto.room.IChatNot);

            /** ChatNot uid. */
            public uid: string;

            /** ChatNot content. */
            public content: string;

            /**
             * Creates a new ChatNot instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ChatNot instance
             */
            public static create(properties?: proto.room.IChatNot): proto.room.ChatNot;

            /**
             * Encodes the specified ChatNot message. Does not implicitly {@link proto.room.ChatNot.verify|verify} messages.
             * @param message ChatNot message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: proto.room.IChatNot, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ChatNot message, length delimited. Does not implicitly {@link proto.room.ChatNot.verify|verify} messages.
             * @param message ChatNot message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: proto.room.IChatNot, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ChatNot message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ChatNot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.room.ChatNot;

            /**
             * Decodes a ChatNot message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ChatNot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.room.ChatNot;

            /**
             * Verifies a ChatNot message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ChatNot message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ChatNot
             */
            public static fromObject(object: { [k: string]: any }): proto.room.ChatNot;

            /**
             * Creates a plain object from a ChatNot message. Also converts values to other types if specified.
             * @param message ChatNot
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: proto.room.ChatNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ChatNot to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a UserAction. */
        interface IUserAction {

            /** UserAction action */
            action?: (number|null);

            /** UserAction uid */
            uid?: (string|null);
        }

        /** Represents a UserAction. */
        class UserAction implements IUserAction {

            /**
             * Constructs a new UserAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: proto.room.IUserAction);

            /** UserAction action. */
            public action: number;

            /** UserAction uid. */
            public uid: string;

            /**
             * Creates a new UserAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UserAction instance
             */
            public static create(properties?: proto.room.IUserAction): proto.room.UserAction;

            /**
             * Encodes the specified UserAction message. Does not implicitly {@link proto.room.UserAction.verify|verify} messages.
             * @param message UserAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: proto.room.IUserAction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UserAction message, length delimited. Does not implicitly {@link proto.room.UserAction.verify|verify} messages.
             * @param message UserAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: proto.room.IUserAction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UserAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UserAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.room.UserAction;

            /**
             * Decodes a UserAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UserAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.room.UserAction;

            /**
             * Verifies a UserAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UserAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UserAction
             */
            public static fromObject(object: { [k: string]: any }): proto.room.UserAction;

            /**
             * Creates a plain object from a UserAction message. Also converts values to other types if specified.
             * @param message UserAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: proto.room.UserAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UserAction to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CreateRoomReq. */
        interface ICreateRoomReq {

            /** CreateRoomReq name */
            name?: (string|null);
        }

        /** Represents a CreateRoomReq. */
        class CreateRoomReq implements ICreateRoomReq {

            /**
             * Constructs a new CreateRoomReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: proto.room.ICreateRoomReq);

            /** CreateRoomReq name. */
            public name: string;

            /**
             * Creates a new CreateRoomReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CreateRoomReq instance
             */
            public static create(properties?: proto.room.ICreateRoomReq): proto.room.CreateRoomReq;

            /**
             * Encodes the specified CreateRoomReq message. Does not implicitly {@link proto.room.CreateRoomReq.verify|verify} messages.
             * @param message CreateRoomReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: proto.room.ICreateRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CreateRoomReq message, length delimited. Does not implicitly {@link proto.room.CreateRoomReq.verify|verify} messages.
             * @param message CreateRoomReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: proto.room.ICreateRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CreateRoomReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CreateRoomReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.room.CreateRoomReq;

            /**
             * Decodes a CreateRoomReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CreateRoomReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.room.CreateRoomReq;

            /**
             * Verifies a CreateRoomReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CreateRoomReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CreateRoomReq
             */
            public static fromObject(object: { [k: string]: any }): proto.room.CreateRoomReq;

            /**
             * Creates a plain object from a CreateRoomReq message. Also converts values to other types if specified.
             * @param message CreateRoomReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: proto.room.CreateRoomReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CreateRoomReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CreateRoomRes. */
        interface ICreateRoomRes {

            /** CreateRoomRes code */
            code?: (string|null);

            /** CreateRoomRes room */
            room?: (proto.room.IRoom|null);

            /** CreateRoomRes serverId */
            serverId?: (string|null);
        }

        /** Represents a CreateRoomRes. */
        class CreateRoomRes implements ICreateRoomRes {

            /**
             * Constructs a new CreateRoomRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: proto.room.ICreateRoomRes);

            /** CreateRoomRes code. */
            public code: string;

            /** CreateRoomRes room. */
            public room?: (proto.room.IRoom|null);

            /** CreateRoomRes serverId. */
            public serverId: string;

            /**
             * Creates a new CreateRoomRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CreateRoomRes instance
             */
            public static create(properties?: proto.room.ICreateRoomRes): proto.room.CreateRoomRes;

            /**
             * Encodes the specified CreateRoomRes message. Does not implicitly {@link proto.room.CreateRoomRes.verify|verify} messages.
             * @param message CreateRoomRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: proto.room.ICreateRoomRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CreateRoomRes message, length delimited. Does not implicitly {@link proto.room.CreateRoomRes.verify|verify} messages.
             * @param message CreateRoomRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: proto.room.ICreateRoomRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CreateRoomRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CreateRoomRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.room.CreateRoomRes;

            /**
             * Decodes a CreateRoomRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CreateRoomRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.room.CreateRoomRes;

            /**
             * Verifies a CreateRoomRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CreateRoomRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CreateRoomRes
             */
            public static fromObject(object: { [k: string]: any }): proto.room.CreateRoomRes;

            /**
             * Creates a plain object from a CreateRoomRes message. Also converts values to other types if specified.
             * @param message CreateRoomRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: proto.room.CreateRoomRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CreateRoomRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace mj. */
    namespace mj {

        /** Properties of a BeginGameNot. */
        interface IBeginGameNot {
        }

        /** Represents a BeginGameNot. */
        class BeginGameNot implements IBeginGameNot {

            /**
             * Constructs a new BeginGameNot.
             * @param [properties] Properties to set
             */
            constructor(properties?: proto.mj.IBeginGameNot);

            /**
             * Creates a new BeginGameNot instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BeginGameNot instance
             */
            public static create(properties?: proto.mj.IBeginGameNot): proto.mj.BeginGameNot;

            /**
             * Encodes the specified BeginGameNot message. Does not implicitly {@link proto.mj.BeginGameNot.verify|verify} messages.
             * @param message BeginGameNot message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: proto.mj.IBeginGameNot, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BeginGameNot message, length delimited. Does not implicitly {@link proto.mj.BeginGameNot.verify|verify} messages.
             * @param message BeginGameNot message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: proto.mj.IBeginGameNot, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BeginGameNot message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BeginGameNot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.mj.BeginGameNot;

            /**
             * Decodes a BeginGameNot message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BeginGameNot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.mj.BeginGameNot;

            /**
             * Verifies a BeginGameNot message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BeginGameNot message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BeginGameNot
             */
            public static fromObject(object: { [k: string]: any }): proto.mj.BeginGameNot;

            /**
             * Creates a plain object from a BeginGameNot message. Also converts values to other types if specified.
             * @param message BeginGameNot
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: proto.mj.BeginGameNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BeginGameNot to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a HandCardsNot. */
        interface IHandCardsNot {

            /** HandCardsNot handCards */
            handCards?: (number[]|null);
        }

        /** Represents a HandCardsNot. */
        class HandCardsNot implements IHandCardsNot {

            /**
             * Constructs a new HandCardsNot.
             * @param [properties] Properties to set
             */
            constructor(properties?: proto.mj.IHandCardsNot);

            /** HandCardsNot handCards. */
            public handCards: number[];

            /**
             * Creates a new HandCardsNot instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HandCardsNot instance
             */
            public static create(properties?: proto.mj.IHandCardsNot): proto.mj.HandCardsNot;

            /**
             * Encodes the specified HandCardsNot message. Does not implicitly {@link proto.mj.HandCardsNot.verify|verify} messages.
             * @param message HandCardsNot message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: proto.mj.IHandCardsNot, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HandCardsNot message, length delimited. Does not implicitly {@link proto.mj.HandCardsNot.verify|verify} messages.
             * @param message HandCardsNot message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: proto.mj.IHandCardsNot, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HandCardsNot message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HandCardsNot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.mj.HandCardsNot;

            /**
             * Decodes a HandCardsNot message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HandCardsNot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.mj.HandCardsNot;

            /**
             * Verifies a HandCardsNot message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HandCardsNot message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HandCardsNot
             */
            public static fromObject(object: { [k: string]: any }): proto.mj.HandCardsNot;

            /**
             * Creates a plain object from a HandCardsNot message. Also converts values to other types if specified.
             * @param message HandCardsNot
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: proto.mj.HandCardsNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HandCardsNot to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an OperateReq. */
        interface IOperateReq {

            /** OperateReq opCodes */
            opCodes?: (number[]|null);
        }

        /** Represents an OperateReq. */
        class OperateReq implements IOperateReq {

            /**
             * Constructs a new OperateReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: proto.mj.IOperateReq);

            /** OperateReq opCodes. */
            public opCodes: number[];

            /**
             * Creates a new OperateReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OperateReq instance
             */
            public static create(properties?: proto.mj.IOperateReq): proto.mj.OperateReq;

            /**
             * Encodes the specified OperateReq message. Does not implicitly {@link proto.mj.OperateReq.verify|verify} messages.
             * @param message OperateReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: proto.mj.IOperateReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OperateReq message, length delimited. Does not implicitly {@link proto.mj.OperateReq.verify|verify} messages.
             * @param message OperateReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: proto.mj.IOperateReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OperateReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OperateReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.mj.OperateReq;

            /**
             * Decodes an OperateReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OperateReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.mj.OperateReq;

            /**
             * Verifies an OperateReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OperateReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OperateReq
             */
            public static fromObject(object: { [k: string]: any }): proto.mj.OperateReq;

            /**
             * Creates a plain object from an OperateReq message. Also converts values to other types if specified.
             * @param message OperateReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: proto.mj.OperateReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OperateReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an OperateRes. */
        interface IOperateRes {

            /** OperateRes opCode */
            opCode?: (number|null);

            /** OperateRes cards */
            cards?: (number[]|null);
        }

        /** Represents an OperateRes. */
        class OperateRes implements IOperateRes {

            /**
             * Constructs a new OperateRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: proto.mj.IOperateRes);

            /** OperateRes opCode. */
            public opCode: number;

            /** OperateRes cards. */
            public cards: number[];

            /**
             * Creates a new OperateRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OperateRes instance
             */
            public static create(properties?: proto.mj.IOperateRes): proto.mj.OperateRes;

            /**
             * Encodes the specified OperateRes message. Does not implicitly {@link proto.mj.OperateRes.verify|verify} messages.
             * @param message OperateRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: proto.mj.IOperateRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OperateRes message, length delimited. Does not implicitly {@link proto.mj.OperateRes.verify|verify} messages.
             * @param message OperateRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: proto.mj.IOperateRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OperateRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OperateRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.mj.OperateRes;

            /**
             * Decodes an OperateRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OperateRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.mj.OperateRes;

            /**
             * Verifies an OperateRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OperateRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OperateRes
             */
            public static fromObject(object: { [k: string]: any }): proto.mj.OperateRes;

            /**
             * Creates a plain object from an OperateRes message. Also converts values to other types if specified.
             * @param message OperateRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: proto.mj.OperateRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OperateRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an OperateNot. */
        interface IOperateNot {

            /** OperateNot chairId */
            chairId?: (number|null);

            /** OperateNot opCode */
            opCode?: (number|null);

            /** OperateNot cards */
            cards?: (number[]|null);
        }

        /** Represents an OperateNot. */
        class OperateNot implements IOperateNot {

            /**
             * Constructs a new OperateNot.
             * @param [properties] Properties to set
             */
            constructor(properties?: proto.mj.IOperateNot);

            /** OperateNot chairId. */
            public chairId: number;

            /** OperateNot opCode. */
            public opCode: number;

            /** OperateNot cards. */
            public cards: number[];

            /**
             * Creates a new OperateNot instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OperateNot instance
             */
            public static create(properties?: proto.mj.IOperateNot): proto.mj.OperateNot;

            /**
             * Encodes the specified OperateNot message. Does not implicitly {@link proto.mj.OperateNot.verify|verify} messages.
             * @param message OperateNot message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: proto.mj.IOperateNot, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OperateNot message, length delimited. Does not implicitly {@link proto.mj.OperateNot.verify|verify} messages.
             * @param message OperateNot message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: proto.mj.IOperateNot, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OperateNot message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OperateNot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.mj.OperateNot;

            /**
             * Decodes an OperateNot message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OperateNot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.mj.OperateNot;

            /**
             * Verifies an OperateNot message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OperateNot message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OperateNot
             */
            public static fromObject(object: { [k: string]: any }): proto.mj.OperateNot;

            /**
             * Creates a plain object from an OperateNot message. Also converts values to other types if specified.
             * @param message OperateNot
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: proto.mj.OperateNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OperateNot to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
