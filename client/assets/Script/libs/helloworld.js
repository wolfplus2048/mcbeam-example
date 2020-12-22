/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

// var $protobuf = require("protobufjs/minimal");
var $protobuf = protobuf
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.helloworld = (function() {

    /**
     * Namespace helloworld.
     * @exports helloworld
     * @namespace
     */
    var helloworld = {};

    helloworld.Helloworld = (function() {

        /**
         * Constructs a new Helloworld service.
         * @memberof helloworld
         * @classdesc Represents a Helloworld
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Helloworld(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Helloworld.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Helloworld;

        /**
         * Creates new Helloworld service using the specified rpc implementation.
         * @function create
         * @memberof helloworld.Helloworld
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Helloworld} RPC service. Useful where requests and/or responses are streamed.
         */
        Helloworld.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link helloworld.Helloworld#call}.
         * @memberof helloworld.Helloworld
         * @typedef CallCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {helloworld.Response} [response] Response
         */

        /**
         * Calls Call.
         * @function call
         * @memberof helloworld.Helloworld
         * @instance
         * @param {helloworld.IRequest} request Request message or plain object
         * @param {helloworld.Helloworld.CallCallback} callback Node-style callback called with the error, if any, and Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Helloworld.prototype.call = function call(request, callback) {
            return this.rpcCall(call, $root.helloworld.Request, $root.helloworld.Response, request, callback);
        }, "name", { value: "Call" });

        /**
         * Calls Call.
         * @function call
         * @memberof helloworld.Helloworld
         * @instance
         * @param {helloworld.IRequest} request Request message or plain object
         * @returns {Promise<helloworld.Response>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link helloworld.Helloworld#stream}.
         * @memberof helloworld.Helloworld
         * @typedef StreamCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {helloworld.StreamingResponse} [response] StreamingResponse
         */

        /**
         * Calls Stream.
         * @function stream
         * @memberof helloworld.Helloworld
         * @instance
         * @param {helloworld.IStreamingRequest} request StreamingRequest message or plain object
         * @param {helloworld.Helloworld.StreamCallback} callback Node-style callback called with the error, if any, and StreamingResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Helloworld.prototype.stream = function stream(request, callback) {
            return this.rpcCall(stream, $root.helloworld.StreamingRequest, $root.helloworld.StreamingResponse, request, callback);
        }, "name", { value: "Stream" });

        /**
         * Calls Stream.
         * @function stream
         * @memberof helloworld.Helloworld
         * @instance
         * @param {helloworld.IStreamingRequest} request StreamingRequest message or plain object
         * @returns {Promise<helloworld.StreamingResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link helloworld.Helloworld#pingPong}.
         * @memberof helloworld.Helloworld
         * @typedef PingPongCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {helloworld.Pong} [response] Pong
         */

        /**
         * Calls PingPong.
         * @function pingPong
         * @memberof helloworld.Helloworld
         * @instance
         * @param {helloworld.IPing} request Ping message or plain object
         * @param {helloworld.Helloworld.PingPongCallback} callback Node-style callback called with the error, if any, and Pong
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Helloworld.prototype.pingPong = function pingPong(request, callback) {
            return this.rpcCall(pingPong, $root.helloworld.Ping, $root.helloworld.Pong, request, callback);
        }, "name", { value: "PingPong" });

        /**
         * Calls PingPong.
         * @function pingPong
         * @memberof helloworld.Helloworld
         * @instance
         * @param {helloworld.IPing} request Ping message or plain object
         * @returns {Promise<helloworld.Pong>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link helloworld.Helloworld#join}.
         * @memberof helloworld.Helloworld
         * @typedef JoinCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {helloworld.Response} [response] Response
         */

        /**
         * Calls Join.
         * @function join
         * @memberof helloworld.Helloworld
         * @instance
         * @param {helloworld.IEmpty} request Empty message or plain object
         * @param {helloworld.Helloworld.JoinCallback} callback Node-style callback called with the error, if any, and Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Helloworld.prototype.join = function join(request, callback) {
            return this.rpcCall(join, $root.helloworld.Empty, $root.helloworld.Response, request, callback);
        }, "name", { value: "Join" });

        /**
         * Calls Join.
         * @function join
         * @memberof helloworld.Helloworld
         * @instance
         * @param {helloworld.IEmpty} request Empty message or plain object
         * @returns {Promise<helloworld.Response>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link helloworld.Helloworld#notify}.
         * @memberof helloworld.Helloworld
         * @typedef NotifyCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {helloworld.Empty} [response] Empty
         */

        /**
         * Calls Notify.
         * @function notify
         * @memberof helloworld.Helloworld
         * @instance
         * @param {helloworld.IRequest} request Request message or plain object
         * @param {helloworld.Helloworld.NotifyCallback} callback Node-style callback called with the error, if any, and Empty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Helloworld.prototype.notify = function notify(request, callback) {
            return this.rpcCall(notify, $root.helloworld.Request, $root.helloworld.Empty, request, callback);
        }, "name", { value: "Notify" });

        /**
         * Calls Notify.
         * @function notify
         * @memberof helloworld.Helloworld
         * @instance
         * @param {helloworld.IRequest} request Request message or plain object
         * @returns {Promise<helloworld.Empty>} Promise
         * @variation 2
         */

        return Helloworld;
    })();

    helloworld.Error = (function() {

        /**
         * Properties of an Error.
         * @memberof helloworld
         * @interface IError
         * @property {string|null} [id] Error id
         * @property {number|null} [code] Error code
         * @property {string|null} [detail] Error detail
         * @property {string|null} [status] Error status
         */

        /**
         * Constructs a new Error.
         * @memberof helloworld
         * @classdesc Represents an Error.
         * @implements IError
         * @constructor
         * @param {helloworld.IError=} [properties] Properties to set
         */
        function Error(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Error id.
         * @member {string} id
         * @memberof helloworld.Error
         * @instance
         */
        Error.prototype.id = "";

        /**
         * Error code.
         * @member {number} code
         * @memberof helloworld.Error
         * @instance
         */
        Error.prototype.code = 0;

        /**
         * Error detail.
         * @member {string} detail
         * @memberof helloworld.Error
         * @instance
         */
        Error.prototype.detail = "";

        /**
         * Error status.
         * @member {string} status
         * @memberof helloworld.Error
         * @instance
         */
        Error.prototype.status = "";

        /**
         * Creates a new Error instance using the specified properties.
         * @function create
         * @memberof helloworld.Error
         * @static
         * @param {helloworld.IError=} [properties] Properties to set
         * @returns {helloworld.Error} Error instance
         */
        Error.create = function create(properties) {
            return new Error(properties);
        };

        /**
         * Encodes the specified Error message. Does not implicitly {@link helloworld.Error.verify|verify} messages.
         * @function encode
         * @memberof helloworld.Error
         * @static
         * @param {helloworld.IError} message Error message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Error.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.code);
            if (message.detail != null && Object.hasOwnProperty.call(message, "detail"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.detail);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.status);
            return writer;
        };

        /**
         * Encodes the specified Error message, length delimited. Does not implicitly {@link helloworld.Error.verify|verify} messages.
         * @function encodeDelimited
         * @memberof helloworld.Error
         * @static
         * @param {helloworld.IError} message Error message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Error.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Error message from the specified reader or buffer.
         * @function decode
         * @memberof helloworld.Error
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {helloworld.Error} Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Error.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.helloworld.Error();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.code = reader.int32();
                    break;
                case 3:
                    message.detail = reader.string();
                    break;
                case 4:
                    message.status = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Error message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof helloworld.Error
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {helloworld.Error} Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Error.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Error message.
         * @function verify
         * @memberof helloworld.Error
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Error.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.detail != null && message.hasOwnProperty("detail"))
                if (!$util.isString(message.detail))
                    return "detail: string expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isString(message.status))
                    return "status: string expected";
            return null;
        };

        /**
         * Creates an Error message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof helloworld.Error
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {helloworld.Error} Error
         */
        Error.fromObject = function fromObject(object) {
            if (object instanceof $root.helloworld.Error)
                return object;
            var message = new $root.helloworld.Error();
            if (object.id != null)
                message.id = String(object.id);
            if (object.code != null)
                message.code = object.code | 0;
            if (object.detail != null)
                message.detail = String(object.detail);
            if (object.status != null)
                message.status = String(object.status);
            return message;
        };

        /**
         * Creates a plain object from an Error message. Also converts values to other types if specified.
         * @function toObject
         * @memberof helloworld.Error
         * @static
         * @param {helloworld.Error} message Error
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Error.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.code = 0;
                object.detail = "";
                object.status = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.detail != null && message.hasOwnProperty("detail"))
                object.detail = message.detail;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            return object;
        };

        /**
         * Converts this Error to JSON.
         * @function toJSON
         * @memberof helloworld.Error
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Error.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Error;
    })();

    helloworld.Empty = (function() {

        /**
         * Properties of an Empty.
         * @memberof helloworld
         * @interface IEmpty
         */

        /**
         * Constructs a new Empty.
         * @memberof helloworld
         * @classdesc Represents an Empty.
         * @implements IEmpty
         * @constructor
         * @param {helloworld.IEmpty=} [properties] Properties to set
         */
        function Empty(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Empty instance using the specified properties.
         * @function create
         * @memberof helloworld.Empty
         * @static
         * @param {helloworld.IEmpty=} [properties] Properties to set
         * @returns {helloworld.Empty} Empty instance
         */
        Empty.create = function create(properties) {
            return new Empty(properties);
        };

        /**
         * Encodes the specified Empty message. Does not implicitly {@link helloworld.Empty.verify|verify} messages.
         * @function encode
         * @memberof helloworld.Empty
         * @static
         * @param {helloworld.IEmpty} message Empty message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Empty.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified Empty message, length delimited. Does not implicitly {@link helloworld.Empty.verify|verify} messages.
         * @function encodeDelimited
         * @memberof helloworld.Empty
         * @static
         * @param {helloworld.IEmpty} message Empty message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Empty.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Empty message from the specified reader or buffer.
         * @function decode
         * @memberof helloworld.Empty
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {helloworld.Empty} Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Empty.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.helloworld.Empty();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Empty message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof helloworld.Empty
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {helloworld.Empty} Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Empty.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Empty message.
         * @function verify
         * @memberof helloworld.Empty
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Empty.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an Empty message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof helloworld.Empty
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {helloworld.Empty} Empty
         */
        Empty.fromObject = function fromObject(object) {
            if (object instanceof $root.helloworld.Empty)
                return object;
            return new $root.helloworld.Empty();
        };

        /**
         * Creates a plain object from an Empty message. Also converts values to other types if specified.
         * @function toObject
         * @memberof helloworld.Empty
         * @static
         * @param {helloworld.Empty} message Empty
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Empty.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this Empty to JSON.
         * @function toJSON
         * @memberof helloworld.Empty
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Empty.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Empty;
    })();

    helloworld.Message = (function() {

        /**
         * Properties of a Message.
         * @memberof helloworld
         * @interface IMessage
         * @property {string|null} [say] Message say
         */

        /**
         * Constructs a new Message.
         * @memberof helloworld
         * @classdesc Represents a Message.
         * @implements IMessage
         * @constructor
         * @param {helloworld.IMessage=} [properties] Properties to set
         */
        function Message(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Message say.
         * @member {string} say
         * @memberof helloworld.Message
         * @instance
         */
        Message.prototype.say = "";

        /**
         * Creates a new Message instance using the specified properties.
         * @function create
         * @memberof helloworld.Message
         * @static
         * @param {helloworld.IMessage=} [properties] Properties to set
         * @returns {helloworld.Message} Message instance
         */
        Message.create = function create(properties) {
            return new Message(properties);
        };

        /**
         * Encodes the specified Message message. Does not implicitly {@link helloworld.Message.verify|verify} messages.
         * @function encode
         * @memberof helloworld.Message
         * @static
         * @param {helloworld.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.say != null && Object.hasOwnProperty.call(message, "say"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.say);
            return writer;
        };

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link helloworld.Message.verify|verify} messages.
         * @function encodeDelimited
         * @memberof helloworld.Message
         * @static
         * @param {helloworld.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @function decode
         * @memberof helloworld.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {helloworld.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.helloworld.Message();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.say = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof helloworld.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {helloworld.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Message message.
         * @function verify
         * @memberof helloworld.Message
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Message.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.say != null && message.hasOwnProperty("say"))
                if (!$util.isString(message.say))
                    return "say: string expected";
            return null;
        };

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof helloworld.Message
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {helloworld.Message} Message
         */
        Message.fromObject = function fromObject(object) {
            if (object instanceof $root.helloworld.Message)
                return object;
            var message = new $root.helloworld.Message();
            if (object.say != null)
                message.say = String(object.say);
            return message;
        };

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @function toObject
         * @memberof helloworld.Message
         * @static
         * @param {helloworld.Message} message Message
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Message.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.say = "";
            if (message.say != null && message.hasOwnProperty("say"))
                object.say = message.say;
            return object;
        };

        /**
         * Converts this Message to JSON.
         * @function toJSON
         * @memberof helloworld.Message
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Message.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Message;
    })();

    helloworld.Request = (function() {

        /**
         * Properties of a Request.
         * @memberof helloworld
         * @interface IRequest
         * @property {string|null} [name] Request name
         */

        /**
         * Constructs a new Request.
         * @memberof helloworld
         * @classdesc Represents a Request.
         * @implements IRequest
         * @constructor
         * @param {helloworld.IRequest=} [properties] Properties to set
         */
        function Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Request name.
         * @member {string} name
         * @memberof helloworld.Request
         * @instance
         */
        Request.prototype.name = "";

        /**
         * Creates a new Request instance using the specified properties.
         * @function create
         * @memberof helloworld.Request
         * @static
         * @param {helloworld.IRequest=} [properties] Properties to set
         * @returns {helloworld.Request} Request instance
         */
        Request.create = function create(properties) {
            return new Request(properties);
        };

        /**
         * Encodes the specified Request message. Does not implicitly {@link helloworld.Request.verify|verify} messages.
         * @function encode
         * @memberof helloworld.Request
         * @static
         * @param {helloworld.IRequest} message Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link helloworld.Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof helloworld.Request
         * @static
         * @param {helloworld.IRequest} message Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @function decode
         * @memberof helloworld.Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {helloworld.Request} Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.helloworld.Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof helloworld.Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {helloworld.Request} Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Request message.
         * @function verify
         * @memberof helloworld.Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof helloworld.Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {helloworld.Request} Request
         */
        Request.fromObject = function fromObject(object) {
            if (object instanceof $root.helloworld.Request)
                return object;
            var message = new $root.helloworld.Request();
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof helloworld.Request
         * @static
         * @param {helloworld.Request} message Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this Request to JSON.
         * @function toJSON
         * @memberof helloworld.Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Request;
    })();

    helloworld.Response = (function() {

        /**
         * Properties of a Response.
         * @memberof helloworld
         * @interface IResponse
         * @property {string|null} [msg] Response msg
         */

        /**
         * Constructs a new Response.
         * @memberof helloworld
         * @classdesc Represents a Response.
         * @implements IResponse
         * @constructor
         * @param {helloworld.IResponse=} [properties] Properties to set
         */
        function Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Response msg.
         * @member {string} msg
         * @memberof helloworld.Response
         * @instance
         */
        Response.prototype.msg = "";

        /**
         * Creates a new Response instance using the specified properties.
         * @function create
         * @memberof helloworld.Response
         * @static
         * @param {helloworld.IResponse=} [properties] Properties to set
         * @returns {helloworld.Response} Response instance
         */
        Response.create = function create(properties) {
            return new Response(properties);
        };

        /**
         * Encodes the specified Response message. Does not implicitly {@link helloworld.Response.verify|verify} messages.
         * @function encode
         * @memberof helloworld.Response
         * @static
         * @param {helloworld.IResponse} message Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link helloworld.Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof helloworld.Response
         * @static
         * @param {helloworld.IResponse} message Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @function decode
         * @memberof helloworld.Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {helloworld.Response} Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.helloworld.Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.msg = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof helloworld.Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {helloworld.Response} Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Response message.
         * @function verify
         * @memberof helloworld.Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        /**
         * Creates a Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof helloworld.Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {helloworld.Response} Response
         */
        Response.fromObject = function fromObject(object) {
            if (object instanceof $root.helloworld.Response)
                return object;
            var message = new $root.helloworld.Response();
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof helloworld.Response
         * @static
         * @param {helloworld.Response} message Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.msg = "";
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this Response to JSON.
         * @function toJSON
         * @memberof helloworld.Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Response;
    })();

    helloworld.StreamingRequest = (function() {

        /**
         * Properties of a StreamingRequest.
         * @memberof helloworld
         * @interface IStreamingRequest
         * @property {number|Long|null} [count] StreamingRequest count
         */

        /**
         * Constructs a new StreamingRequest.
         * @memberof helloworld
         * @classdesc Represents a StreamingRequest.
         * @implements IStreamingRequest
         * @constructor
         * @param {helloworld.IStreamingRequest=} [properties] Properties to set
         */
        function StreamingRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StreamingRequest count.
         * @member {number|Long} count
         * @memberof helloworld.StreamingRequest
         * @instance
         */
        StreamingRequest.prototype.count = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new StreamingRequest instance using the specified properties.
         * @function create
         * @memberof helloworld.StreamingRequest
         * @static
         * @param {helloworld.IStreamingRequest=} [properties] Properties to set
         * @returns {helloworld.StreamingRequest} StreamingRequest instance
         */
        StreamingRequest.create = function create(properties) {
            return new StreamingRequest(properties);
        };

        /**
         * Encodes the specified StreamingRequest message. Does not implicitly {@link helloworld.StreamingRequest.verify|verify} messages.
         * @function encode
         * @memberof helloworld.StreamingRequest
         * @static
         * @param {helloworld.IStreamingRequest} message StreamingRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StreamingRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.count != null && Object.hasOwnProperty.call(message, "count"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.count);
            return writer;
        };

        /**
         * Encodes the specified StreamingRequest message, length delimited. Does not implicitly {@link helloworld.StreamingRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof helloworld.StreamingRequest
         * @static
         * @param {helloworld.IStreamingRequest} message StreamingRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StreamingRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StreamingRequest message from the specified reader or buffer.
         * @function decode
         * @memberof helloworld.StreamingRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {helloworld.StreamingRequest} StreamingRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StreamingRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.helloworld.StreamingRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.count = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StreamingRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof helloworld.StreamingRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {helloworld.StreamingRequest} StreamingRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StreamingRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StreamingRequest message.
         * @function verify
         * @memberof helloworld.StreamingRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StreamingRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.count != null && message.hasOwnProperty("count"))
                if (!$util.isInteger(message.count) && !(message.count && $util.isInteger(message.count.low) && $util.isInteger(message.count.high)))
                    return "count: integer|Long expected";
            return null;
        };

        /**
         * Creates a StreamingRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof helloworld.StreamingRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {helloworld.StreamingRequest} StreamingRequest
         */
        StreamingRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.helloworld.StreamingRequest)
                return object;
            var message = new $root.helloworld.StreamingRequest();
            if (object.count != null)
                if ($util.Long)
                    (message.count = $util.Long.fromValue(object.count)).unsigned = false;
                else if (typeof object.count === "string")
                    message.count = parseInt(object.count, 10);
                else if (typeof object.count === "number")
                    message.count = object.count;
                else if (typeof object.count === "object")
                    message.count = new $util.LongBits(object.count.low >>> 0, object.count.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a StreamingRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof helloworld.StreamingRequest
         * @static
         * @param {helloworld.StreamingRequest} message StreamingRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StreamingRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.count = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.count = options.longs === String ? "0" : 0;
            if (message.count != null && message.hasOwnProperty("count"))
                if (typeof message.count === "number")
                    object.count = options.longs === String ? String(message.count) : message.count;
                else
                    object.count = options.longs === String ? $util.Long.prototype.toString.call(message.count) : options.longs === Number ? new $util.LongBits(message.count.low >>> 0, message.count.high >>> 0).toNumber() : message.count;
            return object;
        };

        /**
         * Converts this StreamingRequest to JSON.
         * @function toJSON
         * @memberof helloworld.StreamingRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StreamingRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StreamingRequest;
    })();

    helloworld.StreamingResponse = (function() {

        /**
         * Properties of a StreamingResponse.
         * @memberof helloworld
         * @interface IStreamingResponse
         * @property {number|Long|null} [count] StreamingResponse count
         */

        /**
         * Constructs a new StreamingResponse.
         * @memberof helloworld
         * @classdesc Represents a StreamingResponse.
         * @implements IStreamingResponse
         * @constructor
         * @param {helloworld.IStreamingResponse=} [properties] Properties to set
         */
        function StreamingResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StreamingResponse count.
         * @member {number|Long} count
         * @memberof helloworld.StreamingResponse
         * @instance
         */
        StreamingResponse.prototype.count = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new StreamingResponse instance using the specified properties.
         * @function create
         * @memberof helloworld.StreamingResponse
         * @static
         * @param {helloworld.IStreamingResponse=} [properties] Properties to set
         * @returns {helloworld.StreamingResponse} StreamingResponse instance
         */
        StreamingResponse.create = function create(properties) {
            return new StreamingResponse(properties);
        };

        /**
         * Encodes the specified StreamingResponse message. Does not implicitly {@link helloworld.StreamingResponse.verify|verify} messages.
         * @function encode
         * @memberof helloworld.StreamingResponse
         * @static
         * @param {helloworld.IStreamingResponse} message StreamingResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StreamingResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.count != null && Object.hasOwnProperty.call(message, "count"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.count);
            return writer;
        };

        /**
         * Encodes the specified StreamingResponse message, length delimited. Does not implicitly {@link helloworld.StreamingResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof helloworld.StreamingResponse
         * @static
         * @param {helloworld.IStreamingResponse} message StreamingResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StreamingResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StreamingResponse message from the specified reader or buffer.
         * @function decode
         * @memberof helloworld.StreamingResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {helloworld.StreamingResponse} StreamingResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StreamingResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.helloworld.StreamingResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.count = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StreamingResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof helloworld.StreamingResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {helloworld.StreamingResponse} StreamingResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StreamingResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StreamingResponse message.
         * @function verify
         * @memberof helloworld.StreamingResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StreamingResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.count != null && message.hasOwnProperty("count"))
                if (!$util.isInteger(message.count) && !(message.count && $util.isInteger(message.count.low) && $util.isInteger(message.count.high)))
                    return "count: integer|Long expected";
            return null;
        };

        /**
         * Creates a StreamingResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof helloworld.StreamingResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {helloworld.StreamingResponse} StreamingResponse
         */
        StreamingResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.helloworld.StreamingResponse)
                return object;
            var message = new $root.helloworld.StreamingResponse();
            if (object.count != null)
                if ($util.Long)
                    (message.count = $util.Long.fromValue(object.count)).unsigned = false;
                else if (typeof object.count === "string")
                    message.count = parseInt(object.count, 10);
                else if (typeof object.count === "number")
                    message.count = object.count;
                else if (typeof object.count === "object")
                    message.count = new $util.LongBits(object.count.low >>> 0, object.count.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a StreamingResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof helloworld.StreamingResponse
         * @static
         * @param {helloworld.StreamingResponse} message StreamingResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StreamingResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.count = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.count = options.longs === String ? "0" : 0;
            if (message.count != null && message.hasOwnProperty("count"))
                if (typeof message.count === "number")
                    object.count = options.longs === String ? String(message.count) : message.count;
                else
                    object.count = options.longs === String ? $util.Long.prototype.toString.call(message.count) : options.longs === Number ? new $util.LongBits(message.count.low >>> 0, message.count.high >>> 0).toNumber() : message.count;
            return object;
        };

        /**
         * Converts this StreamingResponse to JSON.
         * @function toJSON
         * @memberof helloworld.StreamingResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StreamingResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StreamingResponse;
    })();

    helloworld.Ping = (function() {

        /**
         * Properties of a Ping.
         * @memberof helloworld
         * @interface IPing
         * @property {number|Long|null} [stroke] Ping stroke
         */

        /**
         * Constructs a new Ping.
         * @memberof helloworld
         * @classdesc Represents a Ping.
         * @implements IPing
         * @constructor
         * @param {helloworld.IPing=} [properties] Properties to set
         */
        function Ping(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Ping stroke.
         * @member {number|Long} stroke
         * @memberof helloworld.Ping
         * @instance
         */
        Ping.prototype.stroke = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Ping instance using the specified properties.
         * @function create
         * @memberof helloworld.Ping
         * @static
         * @param {helloworld.IPing=} [properties] Properties to set
         * @returns {helloworld.Ping} Ping instance
         */
        Ping.create = function create(properties) {
            return new Ping(properties);
        };

        /**
         * Encodes the specified Ping message. Does not implicitly {@link helloworld.Ping.verify|verify} messages.
         * @function encode
         * @memberof helloworld.Ping
         * @static
         * @param {helloworld.IPing} message Ping message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ping.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.stroke != null && Object.hasOwnProperty.call(message, "stroke"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.stroke);
            return writer;
        };

        /**
         * Encodes the specified Ping message, length delimited. Does not implicitly {@link helloworld.Ping.verify|verify} messages.
         * @function encodeDelimited
         * @memberof helloworld.Ping
         * @static
         * @param {helloworld.IPing} message Ping message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ping.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Ping message from the specified reader or buffer.
         * @function decode
         * @memberof helloworld.Ping
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {helloworld.Ping} Ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ping.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.helloworld.Ping();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.stroke = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Ping message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof helloworld.Ping
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {helloworld.Ping} Ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ping.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Ping message.
         * @function verify
         * @memberof helloworld.Ping
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Ping.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.stroke != null && message.hasOwnProperty("stroke"))
                if (!$util.isInteger(message.stroke) && !(message.stroke && $util.isInteger(message.stroke.low) && $util.isInteger(message.stroke.high)))
                    return "stroke: integer|Long expected";
            return null;
        };

        /**
         * Creates a Ping message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof helloworld.Ping
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {helloworld.Ping} Ping
         */
        Ping.fromObject = function fromObject(object) {
            if (object instanceof $root.helloworld.Ping)
                return object;
            var message = new $root.helloworld.Ping();
            if (object.stroke != null)
                if ($util.Long)
                    (message.stroke = $util.Long.fromValue(object.stroke)).unsigned = false;
                else if (typeof object.stroke === "string")
                    message.stroke = parseInt(object.stroke, 10);
                else if (typeof object.stroke === "number")
                    message.stroke = object.stroke;
                else if (typeof object.stroke === "object")
                    message.stroke = new $util.LongBits(object.stroke.low >>> 0, object.stroke.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a Ping message. Also converts values to other types if specified.
         * @function toObject
         * @memberof helloworld.Ping
         * @static
         * @param {helloworld.Ping} message Ping
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Ping.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.stroke = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.stroke = options.longs === String ? "0" : 0;
            if (message.stroke != null && message.hasOwnProperty("stroke"))
                if (typeof message.stroke === "number")
                    object.stroke = options.longs === String ? String(message.stroke) : message.stroke;
                else
                    object.stroke = options.longs === String ? $util.Long.prototype.toString.call(message.stroke) : options.longs === Number ? new $util.LongBits(message.stroke.low >>> 0, message.stroke.high >>> 0).toNumber() : message.stroke;
            return object;
        };

        /**
         * Converts this Ping to JSON.
         * @function toJSON
         * @memberof helloworld.Ping
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Ping.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Ping;
    })();

    helloworld.Pong = (function() {

        /**
         * Properties of a Pong.
         * @memberof helloworld
         * @interface IPong
         * @property {number|Long|null} [stroke] Pong stroke
         */

        /**
         * Constructs a new Pong.
         * @memberof helloworld
         * @classdesc Represents a Pong.
         * @implements IPong
         * @constructor
         * @param {helloworld.IPong=} [properties] Properties to set
         */
        function Pong(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Pong stroke.
         * @member {number|Long} stroke
         * @memberof helloworld.Pong
         * @instance
         */
        Pong.prototype.stroke = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Pong instance using the specified properties.
         * @function create
         * @memberof helloworld.Pong
         * @static
         * @param {helloworld.IPong=} [properties] Properties to set
         * @returns {helloworld.Pong} Pong instance
         */
        Pong.create = function create(properties) {
            return new Pong(properties);
        };

        /**
         * Encodes the specified Pong message. Does not implicitly {@link helloworld.Pong.verify|verify} messages.
         * @function encode
         * @memberof helloworld.Pong
         * @static
         * @param {helloworld.IPong} message Pong message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pong.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.stroke != null && Object.hasOwnProperty.call(message, "stroke"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.stroke);
            return writer;
        };

        /**
         * Encodes the specified Pong message, length delimited. Does not implicitly {@link helloworld.Pong.verify|verify} messages.
         * @function encodeDelimited
         * @memberof helloworld.Pong
         * @static
         * @param {helloworld.IPong} message Pong message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pong.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Pong message from the specified reader or buffer.
         * @function decode
         * @memberof helloworld.Pong
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {helloworld.Pong} Pong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pong.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.helloworld.Pong();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.stroke = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Pong message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof helloworld.Pong
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {helloworld.Pong} Pong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pong.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Pong message.
         * @function verify
         * @memberof helloworld.Pong
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Pong.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.stroke != null && message.hasOwnProperty("stroke"))
                if (!$util.isInteger(message.stroke) && !(message.stroke && $util.isInteger(message.stroke.low) && $util.isInteger(message.stroke.high)))
                    return "stroke: integer|Long expected";
            return null;
        };

        /**
         * Creates a Pong message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof helloworld.Pong
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {helloworld.Pong} Pong
         */
        Pong.fromObject = function fromObject(object) {
            if (object instanceof $root.helloworld.Pong)
                return object;
            var message = new $root.helloworld.Pong();
            if (object.stroke != null)
                if ($util.Long)
                    (message.stroke = $util.Long.fromValue(object.stroke)).unsigned = false;
                else if (typeof object.stroke === "string")
                    message.stroke = parseInt(object.stroke, 10);
                else if (typeof object.stroke === "number")
                    message.stroke = object.stroke;
                else if (typeof object.stroke === "object")
                    message.stroke = new $util.LongBits(object.stroke.low >>> 0, object.stroke.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a Pong message. Also converts values to other types if specified.
         * @function toObject
         * @memberof helloworld.Pong
         * @static
         * @param {helloworld.Pong} message Pong
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Pong.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.stroke = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.stroke = options.longs === String ? "0" : 0;
            if (message.stroke != null && message.hasOwnProperty("stroke"))
                if (typeof message.stroke === "number")
                    object.stroke = options.longs === String ? String(message.stroke) : message.stroke;
                else
                    object.stroke = options.longs === String ? $util.Long.prototype.toString.call(message.stroke) : options.longs === Number ? new $util.LongBits(message.stroke.low >>> 0, message.stroke.high >>> 0).toNumber() : message.stroke;
            return object;
        };

        /**
         * Converts this Pong to JSON.
         * @function toJSON
         * @memberof helloworld.Pong
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Pong.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Pong;
    })();

    return helloworld;
})();

module.exports = $root;
