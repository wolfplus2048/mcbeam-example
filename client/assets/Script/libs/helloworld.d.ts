import * as $protobuf from "protobufjs";
/** Namespace helloworld. */
export namespace helloworld {

    /** Represents a Helloworld */
    class Helloworld extends $protobuf.rpc.Service {

        /**
         * Constructs a new Helloworld service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Helloworld service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Helloworld;

        /**
         * Calls Call.
         * @param request Request message or plain object
         * @param callback Node-style callback called with the error, if any, and Response
         */
        public call(request: helloworld.IRequest, callback: helloworld.Helloworld.CallCallback): void;

        /**
         * Calls Call.
         * @param request Request message or plain object
         * @returns Promise
         */
        public call(request: helloworld.IRequest): Promise<helloworld.Response>;

        /**
         * Calls Stream.
         * @param request StreamingRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and StreamingResponse
         */
        public stream(request: helloworld.IStreamingRequest, callback: helloworld.Helloworld.StreamCallback): void;

        /**
         * Calls Stream.
         * @param request StreamingRequest message or plain object
         * @returns Promise
         */
        public stream(request: helloworld.IStreamingRequest): Promise<helloworld.StreamingResponse>;

        /**
         * Calls PingPong.
         * @param request Ping message or plain object
         * @param callback Node-style callback called with the error, if any, and Pong
         */
        public pingPong(request: helloworld.IPing, callback: helloworld.Helloworld.PingPongCallback): void;

        /**
         * Calls PingPong.
         * @param request Ping message or plain object
         * @returns Promise
         */
        public pingPong(request: helloworld.IPing): Promise<helloworld.Pong>;

        /**
         * Calls Join.
         * @param request Empty message or plain object
         * @param callback Node-style callback called with the error, if any, and Response
         */
        public join(request: helloworld.IEmpty, callback: helloworld.Helloworld.JoinCallback): void;

        /**
         * Calls Join.
         * @param request Empty message or plain object
         * @returns Promise
         */
        public join(request: helloworld.IEmpty): Promise<helloworld.Response>;

        /**
         * Calls Notify.
         * @param request Request message or plain object
         * @param callback Node-style callback called with the error, if any, and Empty
         */
        public notify(request: helloworld.IRequest, callback: helloworld.Helloworld.NotifyCallback): void;

        /**
         * Calls Notify.
         * @param request Request message or plain object
         * @returns Promise
         */
        public notify(request: helloworld.IRequest): Promise<helloworld.Empty>;
    }

    namespace Helloworld {

        /**
         * Callback as used by {@link helloworld.Helloworld#call}.
         * @param error Error, if any
         * @param [response] Response
         */
        type CallCallback = (error: (Error|null), response?: helloworld.Response) => void;

        /**
         * Callback as used by {@link helloworld.Helloworld#stream}.
         * @param error Error, if any
         * @param [response] StreamingResponse
         */
        type StreamCallback = (error: (Error|null), response?: helloworld.StreamingResponse) => void;

        /**
         * Callback as used by {@link helloworld.Helloworld#pingPong}.
         * @param error Error, if any
         * @param [response] Pong
         */
        type PingPongCallback = (error: (Error|null), response?: helloworld.Pong) => void;

        /**
         * Callback as used by {@link helloworld.Helloworld#join}.
         * @param error Error, if any
         * @param [response] Response
         */
        type JoinCallback = (error: (Error|null), response?: helloworld.Response) => void;

        /**
         * Callback as used by {@link helloworld.Helloworld#notify}.
         * @param error Error, if any
         * @param [response] Empty
         */
        type NotifyCallback = (error: (Error|null), response?: helloworld.Empty) => void;
    }

    /** Properties of an Error. */
    interface IError {

        /** Error id */
        id?: (string|null);

        /** Error code */
        code?: (number|null);

        /** Error detail */
        detail?: (string|null);

        /** Error status */
        status?: (string|null);
    }

    /** Represents an Error. */
    class Error implements IError {

        /**
         * Constructs a new Error.
         * @param [properties] Properties to set
         */
        constructor(properties?: helloworld.IError);

        /** Error id. */
        public id: string;

        /** Error code. */
        public code: number;

        /** Error detail. */
        public detail: string;

        /** Error status. */
        public status: string;

        /**
         * Creates a new Error instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Error instance
         */
        public static create(properties?: helloworld.IError): helloworld.Error;

        /**
         * Encodes the specified Error message. Does not implicitly {@link helloworld.Error.verify|verify} messages.
         * @param message Error message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: helloworld.IError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Error message, length delimited. Does not implicitly {@link helloworld.Error.verify|verify} messages.
         * @param message Error message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: helloworld.IError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Error message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): helloworld.Error;

        /**
         * Decodes an Error message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): helloworld.Error;

        /**
         * Verifies an Error message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Error message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Error
         */
        public static fromObject(object: { [k: string]: any }): helloworld.Error;

        /**
         * Creates a plain object from an Error message. Also converts values to other types if specified.
         * @param message Error
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: helloworld.Error, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Error to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Empty. */
    interface IEmpty {
    }

    /** Represents an Empty. */
    class Empty implements IEmpty {

        /**
         * Constructs a new Empty.
         * @param [properties] Properties to set
         */
        constructor(properties?: helloworld.IEmpty);

        /**
         * Creates a new Empty instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Empty instance
         */
        public static create(properties?: helloworld.IEmpty): helloworld.Empty;

        /**
         * Encodes the specified Empty message. Does not implicitly {@link helloworld.Empty.verify|verify} messages.
         * @param message Empty message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: helloworld.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Empty message, length delimited. Does not implicitly {@link helloworld.Empty.verify|verify} messages.
         * @param message Empty message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: helloworld.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Empty message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): helloworld.Empty;

        /**
         * Decodes an Empty message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): helloworld.Empty;

        /**
         * Verifies an Empty message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Empty message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Empty
         */
        public static fromObject(object: { [k: string]: any }): helloworld.Empty;

        /**
         * Creates a plain object from an Empty message. Also converts values to other types if specified.
         * @param message Empty
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: helloworld.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Empty to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Message. */
    interface IMessage {

        /** Message say */
        say?: (string|null);
    }

    /** Represents a Message. */
    class Message implements IMessage {

        /**
         * Constructs a new Message.
         * @param [properties] Properties to set
         */
        constructor(properties?: helloworld.IMessage);

        /** Message say. */
        public say: string;

        /**
         * Creates a new Message instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Message instance
         */
        public static create(properties?: helloworld.IMessage): helloworld.Message;

        /**
         * Encodes the specified Message message. Does not implicitly {@link helloworld.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: helloworld.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link helloworld.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: helloworld.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): helloworld.Message;

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): helloworld.Message;

        /**
         * Verifies a Message message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Message
         */
        public static fromObject(object: { [k: string]: any }): helloworld.Message;

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @param message Message
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: helloworld.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Message to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Request. */
    interface IRequest {

        /** Request name */
        name?: (string|null);
    }

    /** Represents a Request. */
    class Request implements IRequest {

        /**
         * Constructs a new Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: helloworld.IRequest);

        /** Request name. */
        public name: string;

        /**
         * Creates a new Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Request instance
         */
        public static create(properties?: helloworld.IRequest): helloworld.Request;

        /**
         * Encodes the specified Request message. Does not implicitly {@link helloworld.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: helloworld.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link helloworld.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: helloworld.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): helloworld.Request;

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): helloworld.Request;

        /**
         * Verifies a Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Request message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Request
         */
        public static fromObject(object: { [k: string]: any }): helloworld.Request;

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @param message Request
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: helloworld.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Request to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Response. */
    interface IResponse {

        /** Response msg */
        msg?: (string|null);
    }

    /** Represents a Response. */
    class Response implements IResponse {

        /**
         * Constructs a new Response.
         * @param [properties] Properties to set
         */
        constructor(properties?: helloworld.IResponse);

        /** Response msg. */
        public msg: string;

        /**
         * Creates a new Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Response instance
         */
        public static create(properties?: helloworld.IResponse): helloworld.Response;

        /**
         * Encodes the specified Response message. Does not implicitly {@link helloworld.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: helloworld.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link helloworld.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: helloworld.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): helloworld.Response;

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): helloworld.Response;

        /**
         * Verifies a Response message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Response message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Response
         */
        public static fromObject(object: { [k: string]: any }): helloworld.Response;

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @param message Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: helloworld.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Response to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StreamingRequest. */
    interface IStreamingRequest {

        /** StreamingRequest count */
        count?: (number|Long|null);
    }

    /** Represents a StreamingRequest. */
    class StreamingRequest implements IStreamingRequest {

        /**
         * Constructs a new StreamingRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: helloworld.IStreamingRequest);

        /** StreamingRequest count. */
        public count: (number|Long);

        /**
         * Creates a new StreamingRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StreamingRequest instance
         */
        public static create(properties?: helloworld.IStreamingRequest): helloworld.StreamingRequest;

        /**
         * Encodes the specified StreamingRequest message. Does not implicitly {@link helloworld.StreamingRequest.verify|verify} messages.
         * @param message StreamingRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: helloworld.IStreamingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StreamingRequest message, length delimited. Does not implicitly {@link helloworld.StreamingRequest.verify|verify} messages.
         * @param message StreamingRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: helloworld.IStreamingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StreamingRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StreamingRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): helloworld.StreamingRequest;

        /**
         * Decodes a StreamingRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StreamingRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): helloworld.StreamingRequest;

        /**
         * Verifies a StreamingRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StreamingRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StreamingRequest
         */
        public static fromObject(object: { [k: string]: any }): helloworld.StreamingRequest;

        /**
         * Creates a plain object from a StreamingRequest message. Also converts values to other types if specified.
         * @param message StreamingRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: helloworld.StreamingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StreamingRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StreamingResponse. */
    interface IStreamingResponse {

        /** StreamingResponse count */
        count?: (number|Long|null);
    }

    /** Represents a StreamingResponse. */
    class StreamingResponse implements IStreamingResponse {

        /**
         * Constructs a new StreamingResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: helloworld.IStreamingResponse);

        /** StreamingResponse count. */
        public count: (number|Long);

        /**
         * Creates a new StreamingResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StreamingResponse instance
         */
        public static create(properties?: helloworld.IStreamingResponse): helloworld.StreamingResponse;

        /**
         * Encodes the specified StreamingResponse message. Does not implicitly {@link helloworld.StreamingResponse.verify|verify} messages.
         * @param message StreamingResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: helloworld.IStreamingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StreamingResponse message, length delimited. Does not implicitly {@link helloworld.StreamingResponse.verify|verify} messages.
         * @param message StreamingResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: helloworld.IStreamingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StreamingResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StreamingResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): helloworld.StreamingResponse;

        /**
         * Decodes a StreamingResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StreamingResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): helloworld.StreamingResponse;

        /**
         * Verifies a StreamingResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StreamingResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StreamingResponse
         */
        public static fromObject(object: { [k: string]: any }): helloworld.StreamingResponse;

        /**
         * Creates a plain object from a StreamingResponse message. Also converts values to other types if specified.
         * @param message StreamingResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: helloworld.StreamingResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StreamingResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Ping. */
    interface IPing {

        /** Ping stroke */
        stroke?: (number|Long|null);
    }

    /** Represents a Ping. */
    class Ping implements IPing {

        /**
         * Constructs a new Ping.
         * @param [properties] Properties to set
         */
        constructor(properties?: helloworld.IPing);

        /** Ping stroke. */
        public stroke: (number|Long);

        /**
         * Creates a new Ping instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Ping instance
         */
        public static create(properties?: helloworld.IPing): helloworld.Ping;

        /**
         * Encodes the specified Ping message. Does not implicitly {@link helloworld.Ping.verify|verify} messages.
         * @param message Ping message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: helloworld.IPing, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Ping message, length delimited. Does not implicitly {@link helloworld.Ping.verify|verify} messages.
         * @param message Ping message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: helloworld.IPing, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Ping message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): helloworld.Ping;

        /**
         * Decodes a Ping message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): helloworld.Ping;

        /**
         * Verifies a Ping message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Ping message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Ping
         */
        public static fromObject(object: { [k: string]: any }): helloworld.Ping;

        /**
         * Creates a plain object from a Ping message. Also converts values to other types if specified.
         * @param message Ping
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: helloworld.Ping, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Ping to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Pong. */
    interface IPong {

        /** Pong stroke */
        stroke?: (number|Long|null);
    }

    /** Represents a Pong. */
    class Pong implements IPong {

        /**
         * Constructs a new Pong.
         * @param [properties] Properties to set
         */
        constructor(properties?: helloworld.IPong);

        /** Pong stroke. */
        public stroke: (number|Long);

        /**
         * Creates a new Pong instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Pong instance
         */
        public static create(properties?: helloworld.IPong): helloworld.Pong;

        /**
         * Encodes the specified Pong message. Does not implicitly {@link helloworld.Pong.verify|verify} messages.
         * @param message Pong message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: helloworld.IPong, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Pong message, length delimited. Does not implicitly {@link helloworld.Pong.verify|verify} messages.
         * @param message Pong message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: helloworld.IPong, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Pong message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Pong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): helloworld.Pong;

        /**
         * Decodes a Pong message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Pong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): helloworld.Pong;

        /**
         * Verifies a Pong message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Pong message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Pong
         */
        public static fromObject(object: { [k: string]: any }): helloworld.Pong;

        /**
         * Creates a plain object from a Pong message. Also converts values to other types if specified.
         * @param message Pong
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: helloworld.Pong, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Pong to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
