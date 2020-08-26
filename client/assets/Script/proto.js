/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

// var $protobuf = require("protobufjs/minimal");
var $protobuf = protobuf
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.proto = (function() {

    /**
     * Namespace proto.
     * @exports proto
     * @namespace
     */
    var proto = {};

    proto.gate = (function() {

        /**
         * Namespace gateway.
         * @memberof proto
         * @namespace
         */
        var gate = {};

        gate.LoginReq = (function() {

            /**
             * Properties of a LoginReq.
             * @memberof proto.gateway
             * @interface ILoginReq
             * @property {string|null} [username] LoginReq username
             */

            /**
             * Constructs a new LoginReq.
             * @memberof proto.gateway
             * @classdesc Represents a LoginReq.
             * @implements ILoginReq
             * @constructor
             * @param {proto.gate.ILoginReq=} [properties] Properties to set
             */
            function LoginReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LoginReq username.
             * @member {string} username
             * @memberof proto.gateway.LoginReq
             * @instance
             */
            LoginReq.prototype.username = "";

            /**
             * Creates a new LoginReq instance using the specified properties.
             * @function create
             * @memberof proto.gateway.LoginReq
             * @static
             * @param {proto.gate.ILoginReq=} [properties] Properties to set
             * @returns {proto.gate.LoginReq} LoginReq instance
             */
            LoginReq.create = function create(properties) {
                return new LoginReq(properties);
            };

            /**
             * Encodes the specified LoginReq message. Does not implicitly {@link proto.gate.LoginReq.verify|verify} messages.
             * @function encode
             * @memberof proto.gateway.LoginReq
             * @static
             * @param {proto.gate.ILoginReq} message LoginReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LoginReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
                return writer;
            };

            /**
             * Encodes the specified LoginReq message, length delimited. Does not implicitly {@link proto.gate.LoginReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.gateway.LoginReq
             * @static
             * @param {proto.gate.ILoginReq} message LoginReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LoginReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a LoginReq message from the specified reader or buffer.
             * @function decode
             * @memberof proto.gateway.LoginReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.gate.LoginReq} LoginReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LoginReq.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.gate.LoginReq();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.username = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a LoginReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.gateway.LoginReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.gate.LoginReq} LoginReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LoginReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a LoginReq message.
             * @function verify
             * @memberof proto.gateway.LoginReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LoginReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.username != null && message.hasOwnProperty("username"))
                    if (!$util.isString(message.username))
                        return "username: string expected";
                return null;
            };

            /**
             * Creates a LoginReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.gateway.LoginReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.gate.LoginReq} LoginReq
             */
            LoginReq.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.gate.LoginReq)
                    return object;
                var message = new $root.proto.gate.LoginReq();
                if (object.username != null)
                    message.username = String(object.username);
                return message;
            };

            /**
             * Creates a plain object from a LoginReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.gateway.LoginReq
             * @static
             * @param {proto.gate.LoginReq} message LoginReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LoginReq.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.username = "";
                if (message.username != null && message.hasOwnProperty("username"))
                    object.username = message.username;
                return object;
            };

            /**
             * Converts this LoginReq to JSON.
             * @function toJSON
             * @memberof proto.gateway.LoginReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LoginReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return LoginReq;
        })();

        gate.LoginRes = (function() {

            /**
             * Properties of a LoginRes.
             * @memberof proto.gateway
             * @interface ILoginRes
             * @property {string|null} [code] LoginRes code
             * @property {string|null} [uid] LoginRes uid
             * @property {string|null} [username] LoginRes username
             */

            /**
             * Constructs a new LoginRes.
             * @memberof proto.gateway
             * @classdesc Represents a LoginRes.
             * @implements ILoginRes
             * @constructor
             * @param {proto.gate.ILoginRes=} [properties] Properties to set
             */
            function LoginRes(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LoginRes code.
             * @member {string} code
             * @memberof proto.gateway.LoginRes
             * @instance
             */
            LoginRes.prototype.code = "";

            /**
             * LoginRes uid.
             * @member {string} uid
             * @memberof proto.gateway.LoginRes
             * @instance
             */
            LoginRes.prototype.uid = "";

            /**
             * LoginRes username.
             * @member {string} username
             * @memberof proto.gateway.LoginRes
             * @instance
             */
            LoginRes.prototype.username = "";

            /**
             * Creates a new LoginRes instance using the specified properties.
             * @function create
             * @memberof proto.gateway.LoginRes
             * @static
             * @param {proto.gate.ILoginRes=} [properties] Properties to set
             * @returns {proto.gate.LoginRes} LoginRes instance
             */
            LoginRes.create = function create(properties) {
                return new LoginRes(properties);
            };

            /**
             * Encodes the specified LoginRes message. Does not implicitly {@link proto.gate.LoginRes.verify|verify} messages.
             * @function encode
             * @memberof proto.gateway.LoginRes
             * @static
             * @param {proto.gate.ILoginRes} message LoginRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LoginRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.code);
                if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.uid);
                if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.username);
                return writer;
            };

            /**
             * Encodes the specified LoginRes message, length delimited. Does not implicitly {@link proto.gate.LoginRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.gateway.LoginRes
             * @static
             * @param {proto.gate.ILoginRes} message LoginRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LoginRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a LoginRes message from the specified reader or buffer.
             * @function decode
             * @memberof proto.gateway.LoginRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.gate.LoginRes} LoginRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LoginRes.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.gate.LoginRes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.code = reader.string();
                        break;
                    case 2:
                        message.uid = reader.string();
                        break;
                    case 3:
                        message.username = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a LoginRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.gateway.LoginRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.gate.LoginRes} LoginRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LoginRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a LoginRes message.
             * @function verify
             * @memberof proto.gateway.LoginRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LoginRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.code != null && message.hasOwnProperty("code"))
                    if (!$util.isString(message.code))
                        return "code: string expected";
                if (message.uid != null && message.hasOwnProperty("uid"))
                    if (!$util.isString(message.uid))
                        return "uid: string expected";
                if (message.username != null && message.hasOwnProperty("username"))
                    if (!$util.isString(message.username))
                        return "username: string expected";
                return null;
            };

            /**
             * Creates a LoginRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.gateway.LoginRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.gate.LoginRes} LoginRes
             */
            LoginRes.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.gate.LoginRes)
                    return object;
                var message = new $root.proto.gate.LoginRes();
                if (object.code != null)
                    message.code = String(object.code);
                if (object.uid != null)
                    message.uid = String(object.uid);
                if (object.username != null)
                    message.username = String(object.username);
                return message;
            };

            /**
             * Creates a plain object from a LoginRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.gateway.LoginRes
             * @static
             * @param {proto.gate.LoginRes} message LoginRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LoginRes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.code = "";
                    object.uid = "";
                    object.username = "";
                }
                if (message.code != null && message.hasOwnProperty("code"))
                    object.code = message.code;
                if (message.uid != null && message.hasOwnProperty("uid"))
                    object.uid = message.uid;
                if (message.username != null && message.hasOwnProperty("username"))
                    object.username = message.username;
                return object;
            };

            /**
             * Converts this LoginRes to JSON.
             * @function toJSON
             * @memberof proto.gateway.LoginRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LoginRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return LoginRes;
        })();

        gate.GetUserInfoReq = (function() {

            /**
             * Properties of a GetUserInfoReq.
             * @memberof proto.gateway
             * @interface IGetUserInfoReq
             * @property {string|null} [uid] GetUserInfoReq uid
             */

            /**
             * Constructs a new GetUserInfoReq.
             * @memberof proto.gateway
             * @classdesc Represents a GetUserInfoReq.
             * @implements IGetUserInfoReq
             * @constructor
             * @param {proto.gate.IGetUserInfoReq=} [properties] Properties to set
             */
            function GetUserInfoReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetUserInfoReq uid.
             * @member {string} uid
             * @memberof proto.gateway.GetUserInfoReq
             * @instance
             */
            GetUserInfoReq.prototype.uid = "";

            /**
             * Creates a new GetUserInfoReq instance using the specified properties.
             * @function create
             * @memberof proto.gateway.GetUserInfoReq
             * @static
             * @param {proto.gate.IGetUserInfoReq=} [properties] Properties to set
             * @returns {proto.gate.GetUserInfoReq} GetUserInfoReq instance
             */
            GetUserInfoReq.create = function create(properties) {
                return new GetUserInfoReq(properties);
            };

            /**
             * Encodes the specified GetUserInfoReq message. Does not implicitly {@link proto.gate.GetUserInfoReq.verify|verify} messages.
             * @function encode
             * @memberof proto.gateway.GetUserInfoReq
             * @static
             * @param {proto.gate.IGetUserInfoReq} message GetUserInfoReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetUserInfoReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
                return writer;
            };

            /**
             * Encodes the specified GetUserInfoReq message, length delimited. Does not implicitly {@link proto.gate.GetUserInfoReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.gateway.GetUserInfoReq
             * @static
             * @param {proto.gate.IGetUserInfoReq} message GetUserInfoReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetUserInfoReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetUserInfoReq message from the specified reader or buffer.
             * @function decode
             * @memberof proto.gateway.GetUserInfoReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.gate.GetUserInfoReq} GetUserInfoReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetUserInfoReq.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.gate.GetUserInfoReq();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.uid = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GetUserInfoReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.gateway.GetUserInfoReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.gate.GetUserInfoReq} GetUserInfoReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetUserInfoReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetUserInfoReq message.
             * @function verify
             * @memberof proto.gateway.GetUserInfoReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetUserInfoReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uid != null && message.hasOwnProperty("uid"))
                    if (!$util.isString(message.uid))
                        return "uid: string expected";
                return null;
            };

            /**
             * Creates a GetUserInfoReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.gateway.GetUserInfoReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.gate.GetUserInfoReq} GetUserInfoReq
             */
            GetUserInfoReq.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.gate.GetUserInfoReq)
                    return object;
                var message = new $root.proto.gate.GetUserInfoReq();
                if (object.uid != null)
                    message.uid = String(object.uid);
                return message;
            };

            /**
             * Creates a plain object from a GetUserInfoReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.gateway.GetUserInfoReq
             * @static
             * @param {proto.gate.GetUserInfoReq} message GetUserInfoReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetUserInfoReq.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.uid = "";
                if (message.uid != null && message.hasOwnProperty("uid"))
                    object.uid = message.uid;
                return object;
            };

            /**
             * Converts this GetUserInfoReq to JSON.
             * @function toJSON
             * @memberof proto.gateway.GetUserInfoReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetUserInfoReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return GetUserInfoReq;
        })();

        gate.GetUserInfoRes = (function() {

            /**
             * Properties of a GetUserInfoRes.
             * @memberof proto.gateway
             * @interface IGetUserInfoRes
             * @property {string|null} [code] GetUserInfoRes code
             * @property {string|null} [uid] GetUserInfoRes uid
             * @property {string|null} [username] GetUserInfoRes username
             */

            /**
             * Constructs a new GetUserInfoRes.
             * @memberof proto.gateway
             * @classdesc Represents a GetUserInfoRes.
             * @implements IGetUserInfoRes
             * @constructor
             * @param {proto.gate.IGetUserInfoRes=} [properties] Properties to set
             */
            function GetUserInfoRes(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetUserInfoRes code.
             * @member {string} code
             * @memberof proto.gateway.GetUserInfoRes
             * @instance
             */
            GetUserInfoRes.prototype.code = "";

            /**
             * GetUserInfoRes uid.
             * @member {string} uid
             * @memberof proto.gateway.GetUserInfoRes
             * @instance
             */
            GetUserInfoRes.prototype.uid = "";

            /**
             * GetUserInfoRes username.
             * @member {string} username
             * @memberof proto.gateway.GetUserInfoRes
             * @instance
             */
            GetUserInfoRes.prototype.username = "";

            /**
             * Creates a new GetUserInfoRes instance using the specified properties.
             * @function create
             * @memberof proto.gateway.GetUserInfoRes
             * @static
             * @param {proto.gate.IGetUserInfoRes=} [properties] Properties to set
             * @returns {proto.gate.GetUserInfoRes} GetUserInfoRes instance
             */
            GetUserInfoRes.create = function create(properties) {
                return new GetUserInfoRes(properties);
            };

            /**
             * Encodes the specified GetUserInfoRes message. Does not implicitly {@link proto.gate.GetUserInfoRes.verify|verify} messages.
             * @function encode
             * @memberof proto.gateway.GetUserInfoRes
             * @static
             * @param {proto.gate.IGetUserInfoRes} message GetUserInfoRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetUserInfoRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.code);
                if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.uid);
                if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.username);
                return writer;
            };

            /**
             * Encodes the specified GetUserInfoRes message, length delimited. Does not implicitly {@link proto.gate.GetUserInfoRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.gateway.GetUserInfoRes
             * @static
             * @param {proto.gate.IGetUserInfoRes} message GetUserInfoRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetUserInfoRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetUserInfoRes message from the specified reader or buffer.
             * @function decode
             * @memberof proto.gateway.GetUserInfoRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.gate.GetUserInfoRes} GetUserInfoRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetUserInfoRes.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.gate.GetUserInfoRes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.code = reader.string();
                        break;
                    case 2:
                        message.uid = reader.string();
                        break;
                    case 3:
                        message.username = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GetUserInfoRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.gateway.GetUserInfoRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.gate.GetUserInfoRes} GetUserInfoRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetUserInfoRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetUserInfoRes message.
             * @function verify
             * @memberof proto.gateway.GetUserInfoRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetUserInfoRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.code != null && message.hasOwnProperty("code"))
                    if (!$util.isString(message.code))
                        return "code: string expected";
                if (message.uid != null && message.hasOwnProperty("uid"))
                    if (!$util.isString(message.uid))
                        return "uid: string expected";
                if (message.username != null && message.hasOwnProperty("username"))
                    if (!$util.isString(message.username))
                        return "username: string expected";
                return null;
            };

            /**
             * Creates a GetUserInfoRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.gateway.GetUserInfoRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.gate.GetUserInfoRes} GetUserInfoRes
             */
            GetUserInfoRes.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.gate.GetUserInfoRes)
                    return object;
                var message = new $root.proto.gate.GetUserInfoRes();
                if (object.code != null)
                    message.code = String(object.code);
                if (object.uid != null)
                    message.uid = String(object.uid);
                if (object.username != null)
                    message.username = String(object.username);
                return message;
            };

            /**
             * Creates a plain object from a GetUserInfoRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.gateway.GetUserInfoRes
             * @static
             * @param {proto.gate.GetUserInfoRes} message GetUserInfoRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetUserInfoRes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.code = "";
                    object.uid = "";
                    object.username = "";
                }
                if (message.code != null && message.hasOwnProperty("code"))
                    object.code = message.code;
                if (message.uid != null && message.hasOwnProperty("uid"))
                    object.uid = message.uid;
                if (message.username != null && message.hasOwnProperty("username"))
                    object.username = message.username;
                return object;
            };

            /**
             * Converts this GetUserInfoRes to JSON.
             * @function toJSON
             * @memberof proto.gateway.GetUserInfoRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetUserInfoRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return GetUserInfoRes;
        })();

        return gate;
    })();

    proto.mgr = (function() {

        /**
         * Namespace mgr.
         * @memberof proto
         * @namespace
         */
        var mgr = {};

        mgr.Room = (function() {

            /**
             * Properties of a Room.
             * @memberof proto.mgr
             * @interface IRoom
             * @property {string|null} [id] Room id
             * @property {string|null} [name] Room name
             * @property {number|null} [status] Room status
             */

            /**
             * Constructs a new Room.
             * @memberof proto.mgr
             * @classdesc Represents a Room.
             * @implements IRoom
             * @constructor
             * @param {proto.mgr.IRoom=} [properties] Properties to set
             */
            function Room(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Room id.
             * @member {string} id
             * @memberof proto.mgr.Room
             * @instance
             */
            Room.prototype.id = "";

            /**
             * Room name.
             * @member {string} name
             * @memberof proto.mgr.Room
             * @instance
             */
            Room.prototype.name = "";

            /**
             * Room status.
             * @member {number} status
             * @memberof proto.mgr.Room
             * @instance
             */
            Room.prototype.status = 0;

            /**
             * Creates a new Room instance using the specified properties.
             * @function create
             * @memberof proto.mgr.Room
             * @static
             * @param {proto.mgr.IRoom=} [properties] Properties to set
             * @returns {proto.mgr.Room} Room instance
             */
            Room.create = function create(properties) {
                return new Room(properties);
            };

            /**
             * Encodes the specified Room message. Does not implicitly {@link proto.mgr.Room.verify|verify} messages.
             * @function encode
             * @memberof proto.mgr.Room
             * @static
             * @param {proto.mgr.IRoom} message Room message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Room.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.status);
                return writer;
            };

            /**
             * Encodes the specified Room message, length delimited. Does not implicitly {@link proto.mgr.Room.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.mgr.Room
             * @static
             * @param {proto.mgr.IRoom} message Room message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Room.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Room message from the specified reader or buffer.
             * @function decode
             * @memberof proto.mgr.Room
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.mgr.Room} Room
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Room.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.mgr.Room();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.name = reader.string();
                        break;
                    case 4:
                        message.status = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Room message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.mgr.Room
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.mgr.Room} Room
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Room.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Room message.
             * @function verify
             * @memberof proto.mgr.Room
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Room.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                return null;
            };

            /**
             * Creates a Room message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.mgr.Room
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.mgr.Room} Room
             */
            Room.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.mgr.Room)
                    return object;
                var message = new $root.proto.mgr.Room();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.name != null)
                    message.name = String(object.name);
                if (object.status != null)
                    message.status = object.status | 0;
                return message;
            };

            /**
             * Creates a plain object from a Room message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.mgr.Room
             * @static
             * @param {proto.mgr.Room} message Room
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Room.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.name = "";
                    object.status = 0;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = message.status;
                return object;
            };

            /**
             * Converts this Room to JSON.
             * @function toJSON
             * @memberof proto.mgr.Room
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Room.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Room;
        })();

        mgr.GetRoomListReq = (function() {

            /**
             * Properties of a GetRoomListReq.
             * @memberof proto.mgr
             * @interface IGetRoomListReq
             */

            /**
             * Constructs a new GetRoomListReq.
             * @memberof proto.mgr
             * @classdesc Represents a GetRoomListReq.
             * @implements IGetRoomListReq
             * @constructor
             * @param {proto.mgr.IGetRoomListReq=} [properties] Properties to set
             */
            function GetRoomListReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new GetRoomListReq instance using the specified properties.
             * @function create
             * @memberof proto.mgr.GetRoomListReq
             * @static
             * @param {proto.mgr.IGetRoomListReq=} [properties] Properties to set
             * @returns {proto.mgr.GetRoomListReq} GetRoomListReq instance
             */
            GetRoomListReq.create = function create(properties) {
                return new GetRoomListReq(properties);
            };

            /**
             * Encodes the specified GetRoomListReq message. Does not implicitly {@link proto.mgr.GetRoomListReq.verify|verify} messages.
             * @function encode
             * @memberof proto.mgr.GetRoomListReq
             * @static
             * @param {proto.mgr.IGetRoomListReq} message GetRoomListReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetRoomListReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified GetRoomListReq message, length delimited. Does not implicitly {@link proto.mgr.GetRoomListReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.mgr.GetRoomListReq
             * @static
             * @param {proto.mgr.IGetRoomListReq} message GetRoomListReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetRoomListReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetRoomListReq message from the specified reader or buffer.
             * @function decode
             * @memberof proto.mgr.GetRoomListReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.mgr.GetRoomListReq} GetRoomListReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetRoomListReq.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.mgr.GetRoomListReq();
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
             * Decodes a GetRoomListReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.mgr.GetRoomListReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.mgr.GetRoomListReq} GetRoomListReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetRoomListReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetRoomListReq message.
             * @function verify
             * @memberof proto.mgr.GetRoomListReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetRoomListReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a GetRoomListReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.mgr.GetRoomListReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.mgr.GetRoomListReq} GetRoomListReq
             */
            GetRoomListReq.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.mgr.GetRoomListReq)
                    return object;
                return new $root.proto.mgr.GetRoomListReq();
            };

            /**
             * Creates a plain object from a GetRoomListReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.mgr.GetRoomListReq
             * @static
             * @param {proto.mgr.GetRoomListReq} message GetRoomListReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetRoomListReq.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this GetRoomListReq to JSON.
             * @function toJSON
             * @memberof proto.mgr.GetRoomListReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetRoomListReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return GetRoomListReq;
        })();

        mgr.GetRoomListRes = (function() {

            /**
             * Properties of a GetRoomListRes.
             * @memberof proto.mgr
             * @interface IGetRoomListRes
             * @property {Array.<proto.mgr.IRoom>|null} [rooms] GetRoomListRes rooms
             */

            /**
             * Constructs a new GetRoomListRes.
             * @memberof proto.mgr
             * @classdesc Represents a GetRoomListRes.
             * @implements IGetRoomListRes
             * @constructor
             * @param {proto.mgr.IGetRoomListRes=} [properties] Properties to set
             */
            function GetRoomListRes(properties) {
                this.rooms = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetRoomListRes rooms.
             * @member {Array.<proto.mgr.IRoom>} rooms
             * @memberof proto.mgr.GetRoomListRes
             * @instance
             */
            GetRoomListRes.prototype.rooms = $util.emptyArray;

            /**
             * Creates a new GetRoomListRes instance using the specified properties.
             * @function create
             * @memberof proto.mgr.GetRoomListRes
             * @static
             * @param {proto.mgr.IGetRoomListRes=} [properties] Properties to set
             * @returns {proto.mgr.GetRoomListRes} GetRoomListRes instance
             */
            GetRoomListRes.create = function create(properties) {
                return new GetRoomListRes(properties);
            };

            /**
             * Encodes the specified GetRoomListRes message. Does not implicitly {@link proto.mgr.GetRoomListRes.verify|verify} messages.
             * @function encode
             * @memberof proto.mgr.GetRoomListRes
             * @static
             * @param {proto.mgr.IGetRoomListRes} message GetRoomListRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetRoomListRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.rooms != null && message.rooms.length)
                    for (var i = 0; i < message.rooms.length; ++i)
                        $root.proto.mgr.Room.encode(message.rooms[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified GetRoomListRes message, length delimited. Does not implicitly {@link proto.mgr.GetRoomListRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.mgr.GetRoomListRes
             * @static
             * @param {proto.mgr.IGetRoomListRes} message GetRoomListRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetRoomListRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetRoomListRes message from the specified reader or buffer.
             * @function decode
             * @memberof proto.mgr.GetRoomListRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.mgr.GetRoomListRes} GetRoomListRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetRoomListRes.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.mgr.GetRoomListRes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.rooms && message.rooms.length))
                            message.rooms = [];
                        message.rooms.push($root.proto.mgr.Room.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GetRoomListRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.mgr.GetRoomListRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.mgr.GetRoomListRes} GetRoomListRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetRoomListRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetRoomListRes message.
             * @function verify
             * @memberof proto.mgr.GetRoomListRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetRoomListRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.rooms != null && message.hasOwnProperty("rooms")) {
                    if (!Array.isArray(message.rooms))
                        return "rooms: array expected";
                    for (var i = 0; i < message.rooms.length; ++i) {
                        var error = $root.proto.mgr.Room.verify(message.rooms[i]);
                        if (error)
                            return "rooms." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a GetRoomListRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.mgr.GetRoomListRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.mgr.GetRoomListRes} GetRoomListRes
             */
            GetRoomListRes.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.mgr.GetRoomListRes)
                    return object;
                var message = new $root.proto.mgr.GetRoomListRes();
                if (object.rooms) {
                    if (!Array.isArray(object.rooms))
                        throw TypeError(".proto.mgr.GetRoomListRes.rooms: array expected");
                    message.rooms = [];
                    for (var i = 0; i < object.rooms.length; ++i) {
                        if (typeof object.rooms[i] !== "object")
                            throw TypeError(".proto.mgr.GetRoomListRes.rooms: object expected");
                        message.rooms[i] = $root.proto.mgr.Room.fromObject(object.rooms[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a GetRoomListRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.mgr.GetRoomListRes
             * @static
             * @param {proto.mgr.GetRoomListRes} message GetRoomListRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetRoomListRes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.rooms = [];
                if (message.rooms && message.rooms.length) {
                    object.rooms = [];
                    for (var j = 0; j < message.rooms.length; ++j)
                        object.rooms[j] = $root.proto.mgr.Room.toObject(message.rooms[j], options);
                }
                return object;
            };

            /**
             * Converts this GetRoomListRes to JSON.
             * @function toJSON
             * @memberof proto.mgr.GetRoomListRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetRoomListRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return GetRoomListRes;
        })();

        mgr.CreateRoomReq = (function() {

            /**
             * Properties of a CreateRoomReq.
             * @memberof proto.mgr
             * @interface ICreateRoomReq
             * @property {string|null} [name] CreateRoomReq name
             */

            /**
             * Constructs a new CreateRoomReq.
             * @memberof proto.mgr
             * @classdesc Represents a CreateRoomReq.
             * @implements ICreateRoomReq
             * @constructor
             * @param {proto.mgr.ICreateRoomReq=} [properties] Properties to set
             */
            function CreateRoomReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CreateRoomReq name.
             * @member {string} name
             * @memberof proto.mgr.CreateRoomReq
             * @instance
             */
            CreateRoomReq.prototype.name = "";

            /**
             * Creates a new CreateRoomReq instance using the specified properties.
             * @function create
             * @memberof proto.mgr.CreateRoomReq
             * @static
             * @param {proto.mgr.ICreateRoomReq=} [properties] Properties to set
             * @returns {proto.mgr.CreateRoomReq} CreateRoomReq instance
             */
            CreateRoomReq.create = function create(properties) {
                return new CreateRoomReq(properties);
            };

            /**
             * Encodes the specified CreateRoomReq message. Does not implicitly {@link proto.mgr.CreateRoomReq.verify|verify} messages.
             * @function encode
             * @memberof proto.mgr.CreateRoomReq
             * @static
             * @param {proto.mgr.ICreateRoomReq} message CreateRoomReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateRoomReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                return writer;
            };

            /**
             * Encodes the specified CreateRoomReq message, length delimited. Does not implicitly {@link proto.mgr.CreateRoomReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.mgr.CreateRoomReq
             * @static
             * @param {proto.mgr.ICreateRoomReq} message CreateRoomReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CreateRoomReq message from the specified reader or buffer.
             * @function decode
             * @memberof proto.mgr.CreateRoomReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.mgr.CreateRoomReq} CreateRoomReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateRoomReq.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.mgr.CreateRoomReq();
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
             * Decodes a CreateRoomReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.mgr.CreateRoomReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.mgr.CreateRoomReq} CreateRoomReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateRoomReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CreateRoomReq message.
             * @function verify
             * @memberof proto.mgr.CreateRoomReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CreateRoomReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                return null;
            };

            /**
             * Creates a CreateRoomReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.mgr.CreateRoomReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.mgr.CreateRoomReq} CreateRoomReq
             */
            CreateRoomReq.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.mgr.CreateRoomReq)
                    return object;
                var message = new $root.proto.mgr.CreateRoomReq();
                if (object.name != null)
                    message.name = String(object.name);
                return message;
            };

            /**
             * Creates a plain object from a CreateRoomReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.mgr.CreateRoomReq
             * @static
             * @param {proto.mgr.CreateRoomReq} message CreateRoomReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CreateRoomReq.toObject = function toObject(message, options) {
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
             * Converts this CreateRoomReq to JSON.
             * @function toJSON
             * @memberof proto.mgr.CreateRoomReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CreateRoomReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return CreateRoomReq;
        })();

        mgr.CreateRoomRes = (function() {

            /**
             * Properties of a CreateRoomRes.
             * @memberof proto.mgr
             * @interface ICreateRoomRes
             * @property {string|null} [code] CreateRoomRes code
             * @property {string|null} [serverId] CreateRoomRes serverId
             * @property {proto.mgr.IRoom|null} [room] CreateRoomRes room
             */

            /**
             * Constructs a new CreateRoomRes.
             * @memberof proto.mgr
             * @classdesc Represents a CreateRoomRes.
             * @implements ICreateRoomRes
             * @constructor
             * @param {proto.mgr.ICreateRoomRes=} [properties] Properties to set
             */
            function CreateRoomRes(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CreateRoomRes code.
             * @member {string} code
             * @memberof proto.mgr.CreateRoomRes
             * @instance
             */
            CreateRoomRes.prototype.code = "";

            /**
             * CreateRoomRes serverId.
             * @member {string} serverId
             * @memberof proto.mgr.CreateRoomRes
             * @instance
             */
            CreateRoomRes.prototype.serverId = "";

            /**
             * CreateRoomRes room.
             * @member {proto.mgr.IRoom|null|undefined} room
             * @memberof proto.mgr.CreateRoomRes
             * @instance
             */
            CreateRoomRes.prototype.room = null;

            /**
             * Creates a new CreateRoomRes instance using the specified properties.
             * @function create
             * @memberof proto.mgr.CreateRoomRes
             * @static
             * @param {proto.mgr.ICreateRoomRes=} [properties] Properties to set
             * @returns {proto.mgr.CreateRoomRes} CreateRoomRes instance
             */
            CreateRoomRes.create = function create(properties) {
                return new CreateRoomRes(properties);
            };

            /**
             * Encodes the specified CreateRoomRes message. Does not implicitly {@link proto.mgr.CreateRoomRes.verify|verify} messages.
             * @function encode
             * @memberof proto.mgr.CreateRoomRes
             * @static
             * @param {proto.mgr.ICreateRoomRes} message CreateRoomRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateRoomRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.code);
                if (message.room != null && Object.hasOwnProperty.call(message, "room"))
                    $root.proto.mgr.Room.encode(message.room, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.serverId != null && Object.hasOwnProperty.call(message, "serverId"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.serverId);
                return writer;
            };

            /**
             * Encodes the specified CreateRoomRes message, length delimited. Does not implicitly {@link proto.mgr.CreateRoomRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.mgr.CreateRoomRes
             * @static
             * @param {proto.mgr.ICreateRoomRes} message CreateRoomRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateRoomRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CreateRoomRes message from the specified reader or buffer.
             * @function decode
             * @memberof proto.mgr.CreateRoomRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.mgr.CreateRoomRes} CreateRoomRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateRoomRes.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.mgr.CreateRoomRes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.code = reader.string();
                        break;
                    case 3:
                        message.serverId = reader.string();
                        break;
                    case 2:
                        message.room = $root.proto.mgr.Room.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CreateRoomRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.mgr.CreateRoomRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.mgr.CreateRoomRes} CreateRoomRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateRoomRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CreateRoomRes message.
             * @function verify
             * @memberof proto.mgr.CreateRoomRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CreateRoomRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.code != null && message.hasOwnProperty("code"))
                    if (!$util.isString(message.code))
                        return "code: string expected";
                if (message.serverId != null && message.hasOwnProperty("serverId"))
                    if (!$util.isString(message.serverId))
                        return "serverId: string expected";
                if (message.room != null && message.hasOwnProperty("room")) {
                    var error = $root.proto.mgr.Room.verify(message.room);
                    if (error)
                        return "room." + error;
                }
                return null;
            };

            /**
             * Creates a CreateRoomRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.mgr.CreateRoomRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.mgr.CreateRoomRes} CreateRoomRes
             */
            CreateRoomRes.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.mgr.CreateRoomRes)
                    return object;
                var message = new $root.proto.mgr.CreateRoomRes();
                if (object.code != null)
                    message.code = String(object.code);
                if (object.serverId != null)
                    message.serverId = String(object.serverId);
                if (object.room != null) {
                    if (typeof object.room !== "object")
                        throw TypeError(".proto.mgr.CreateRoomRes.room: object expected");
                    message.room = $root.proto.mgr.Room.fromObject(object.room);
                }
                return message;
            };

            /**
             * Creates a plain object from a CreateRoomRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.mgr.CreateRoomRes
             * @static
             * @param {proto.mgr.CreateRoomRes} message CreateRoomRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CreateRoomRes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.code = "";
                    object.room = null;
                    object.serverId = "";
                }
                if (message.code != null && message.hasOwnProperty("code"))
                    object.code = message.code;
                if (message.room != null && message.hasOwnProperty("room"))
                    object.room = $root.proto.mgr.Room.toObject(message.room, options);
                if (message.serverId != null && message.hasOwnProperty("serverId"))
                    object.serverId = message.serverId;
                return object;
            };

            /**
             * Converts this CreateRoomRes to JSON.
             * @function toJSON
             * @memberof proto.mgr.CreateRoomRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CreateRoomRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return CreateRoomRes;
        })();

        return mgr;
    })();

    proto.room = (function() {

        /**
         * Namespace room.
         * @memberof proto
         * @namespace
         */
        var room = {};

        room.User = (function() {

            /**
             * Properties of a User.
             * @memberof proto.room
             * @interface IUser
             * @property {string|null} [uid] User uid
             * @property {string|null} [username] User username
             */

            /**
             * Constructs a new User.
             * @memberof proto.room
             * @classdesc Represents a User.
             * @implements IUser
             * @constructor
             * @param {proto.room.IUser=} [properties] Properties to set
             */
            function User(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * User uid.
             * @member {string} uid
             * @memberof proto.room.User
             * @instance
             */
            User.prototype.uid = "";

            /**
             * User username.
             * @member {string} username
             * @memberof proto.room.User
             * @instance
             */
            User.prototype.username = "";

            /**
             * Creates a new User instance using the specified properties.
             * @function create
             * @memberof proto.room.User
             * @static
             * @param {proto.room.IUser=} [properties] Properties to set
             * @returns {proto.room.User} User instance
             */
            User.create = function create(properties) {
                return new User(properties);
            };

            /**
             * Encodes the specified User message. Does not implicitly {@link proto.room.User.verify|verify} messages.
             * @function encode
             * @memberof proto.room.User
             * @static
             * @param {proto.room.IUser} message User message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            User.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
                if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.username);
                return writer;
            };

            /**
             * Encodes the specified User message, length delimited. Does not implicitly {@link proto.room.User.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.room.User
             * @static
             * @param {proto.room.IUser} message User message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            User.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a User message from the specified reader or buffer.
             * @function decode
             * @memberof proto.room.User
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.room.User} User
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            User.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.room.User();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.uid = reader.string();
                        break;
                    case 2:
                        message.username = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a User message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.room.User
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.room.User} User
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            User.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a User message.
             * @function verify
             * @memberof proto.room.User
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            User.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uid != null && message.hasOwnProperty("uid"))
                    if (!$util.isString(message.uid))
                        return "uid: string expected";
                if (message.username != null && message.hasOwnProperty("username"))
                    if (!$util.isString(message.username))
                        return "username: string expected";
                return null;
            };

            /**
             * Creates a User message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.room.User
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.room.User} User
             */
            User.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.room.User)
                    return object;
                var message = new $root.proto.room.User();
                if (object.uid != null)
                    message.uid = String(object.uid);
                if (object.username != null)
                    message.username = String(object.username);
                return message;
            };

            /**
             * Creates a plain object from a User message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.room.User
             * @static
             * @param {proto.room.User} message User
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            User.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.uid = "";
                    object.username = "";
                }
                if (message.uid != null && message.hasOwnProperty("uid"))
                    object.uid = message.uid;
                if (message.username != null && message.hasOwnProperty("username"))
                    object.username = message.username;
                return object;
            };

            /**
             * Converts this User to JSON.
             * @function toJSON
             * @memberof proto.room.User
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            User.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return User;
        })();

        room.Room = (function() {

            /**
             * Properties of a Room.
             * @memberof proto.room
             * @interface IRoom
             * @property {string|null} [id] Room id
             * @property {string|null} [name] Room name
             * @property {Array.<proto.room.IUser>|null} [users] Room users
             */

            /**
             * Constructs a new Room.
             * @memberof proto.room
             * @classdesc Represents a Room.
             * @implements IRoom
             * @constructor
             * @param {proto.room.IRoom=} [properties] Properties to set
             */
            function Room(properties) {
                this.users = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Room id.
             * @member {string} id
             * @memberof proto.room.Room
             * @instance
             */
            Room.prototype.id = "";

            /**
             * Room name.
             * @member {string} name
             * @memberof proto.room.Room
             * @instance
             */
            Room.prototype.name = "";

            /**
             * Room users.
             * @member {Array.<proto.room.IUser>} users
             * @memberof proto.room.Room
             * @instance
             */
            Room.prototype.users = $util.emptyArray;

            /**
             * Creates a new Room instance using the specified properties.
             * @function create
             * @memberof proto.room.Room
             * @static
             * @param {proto.room.IRoom=} [properties] Properties to set
             * @returns {proto.room.Room} Room instance
             */
            Room.create = function create(properties) {
                return new Room(properties);
            };

            /**
             * Encodes the specified Room message. Does not implicitly {@link proto.room.Room.verify|verify} messages.
             * @function encode
             * @memberof proto.room.Room
             * @static
             * @param {proto.room.IRoom} message Room message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Room.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.users != null && message.users.length)
                    for (var i = 0; i < message.users.length; ++i)
                        $root.proto.room.User.encode(message.users[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Room message, length delimited. Does not implicitly {@link proto.room.Room.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.room.Room
             * @static
             * @param {proto.room.IRoom} message Room message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Room.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Room message from the specified reader or buffer.
             * @function decode
             * @memberof proto.room.Room
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.room.Room} Room
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Room.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.room.Room();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.name = reader.string();
                        break;
                    case 4:
                        if (!(message.users && message.users.length))
                            message.users = [];
                        message.users.push($root.proto.room.User.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Room message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.room.Room
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.room.Room} Room
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Room.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Room message.
             * @function verify
             * @memberof proto.room.Room
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Room.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.users != null && message.hasOwnProperty("users")) {
                    if (!Array.isArray(message.users))
                        return "users: array expected";
                    for (var i = 0; i < message.users.length; ++i) {
                        var error = $root.proto.room.User.verify(message.users[i]);
                        if (error)
                            return "users." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Room message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.room.Room
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.room.Room} Room
             */
            Room.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.room.Room)
                    return object;
                var message = new $root.proto.room.Room();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.name != null)
                    message.name = String(object.name);
                if (object.users) {
                    if (!Array.isArray(object.users))
                        throw TypeError(".proto.room.Room.users: array expected");
                    message.users = [];
                    for (var i = 0; i < object.users.length; ++i) {
                        if (typeof object.users[i] !== "object")
                            throw TypeError(".proto.room.Room.users: object expected");
                        message.users[i] = $root.proto.room.User.fromObject(object.users[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a Room message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.room.Room
             * @static
             * @param {proto.room.Room} message Room
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Room.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.users = [];
                if (options.defaults) {
                    object.id = "";
                    object.name = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.users && message.users.length) {
                    object.users = [];
                    for (var j = 0; j < message.users.length; ++j)
                        object.users[j] = $root.proto.room.User.toObject(message.users[j], options);
                }
                return object;
            };

            /**
             * Converts this Room to JSON.
             * @function toJSON
             * @memberof proto.room.Room
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Room.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Room;
        })();

        room.JoinReq = (function() {

            /**
             * Properties of a JoinReq.
             * @memberof proto.room
             * @interface IJoinReq
             * @property {string|null} [id] JoinReq id
             */

            /**
             * Constructs a new JoinReq.
             * @memberof proto.room
             * @classdesc Represents a JoinReq.
             * @implements IJoinReq
             * @constructor
             * @param {proto.room.IJoinReq=} [properties] Properties to set
             */
            function JoinReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * JoinReq id.
             * @member {string} id
             * @memberof proto.room.JoinReq
             * @instance
             */
            JoinReq.prototype.id = "";

            /**
             * Creates a new JoinReq instance using the specified properties.
             * @function create
             * @memberof proto.room.JoinReq
             * @static
             * @param {proto.room.IJoinReq=} [properties] Properties to set
             * @returns {proto.room.JoinReq} JoinReq instance
             */
            JoinReq.create = function create(properties) {
                return new JoinReq(properties);
            };

            /**
             * Encodes the specified JoinReq message. Does not implicitly {@link proto.room.JoinReq.verify|verify} messages.
             * @function encode
             * @memberof proto.room.JoinReq
             * @static
             * @param {proto.room.IJoinReq} message JoinReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            JoinReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                return writer;
            };

            /**
             * Encodes the specified JoinReq message, length delimited. Does not implicitly {@link proto.room.JoinReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.room.JoinReq
             * @static
             * @param {proto.room.IJoinReq} message JoinReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            JoinReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a JoinReq message from the specified reader or buffer.
             * @function decode
             * @memberof proto.room.JoinReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.room.JoinReq} JoinReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            JoinReq.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.room.JoinReq();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a JoinReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.room.JoinReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.room.JoinReq} JoinReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            JoinReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a JoinReq message.
             * @function verify
             * @memberof proto.room.JoinReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            JoinReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                return null;
            };

            /**
             * Creates a JoinReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.room.JoinReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.room.JoinReq} JoinReq
             */
            JoinReq.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.room.JoinReq)
                    return object;
                var message = new $root.proto.room.JoinReq();
                if (object.id != null)
                    message.id = String(object.id);
                return message;
            };

            /**
             * Creates a plain object from a JoinReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.room.JoinReq
             * @static
             * @param {proto.room.JoinReq} message JoinReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            JoinReq.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.id = "";
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                return object;
            };

            /**
             * Converts this JoinReq to JSON.
             * @function toJSON
             * @memberof proto.room.JoinReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            JoinReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return JoinReq;
        })();

        room.JoinRes = (function() {

            /**
             * Properties of a JoinRes.
             * @memberof proto.room
             * @interface IJoinRes
             * @property {string|null} [code] JoinRes code
             * @property {proto.room.IRoom|null} [room] JoinRes room
             */

            /**
             * Constructs a new JoinRes.
             * @memberof proto.room
             * @classdesc Represents a JoinRes.
             * @implements IJoinRes
             * @constructor
             * @param {proto.room.IJoinRes=} [properties] Properties to set
             */
            function JoinRes(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * JoinRes code.
             * @member {string} code
             * @memberof proto.room.JoinRes
             * @instance
             */
            JoinRes.prototype.code = "";

            /**
             * JoinRes room.
             * @member {proto.room.IRoom|null|undefined} room
             * @memberof proto.room.JoinRes
             * @instance
             */
            JoinRes.prototype.room = null;

            /**
             * Creates a new JoinRes instance using the specified properties.
             * @function create
             * @memberof proto.room.JoinRes
             * @static
             * @param {proto.room.IJoinRes=} [properties] Properties to set
             * @returns {proto.room.JoinRes} JoinRes instance
             */
            JoinRes.create = function create(properties) {
                return new JoinRes(properties);
            };

            /**
             * Encodes the specified JoinRes message. Does not implicitly {@link proto.room.JoinRes.verify|verify} messages.
             * @function encode
             * @memberof proto.room.JoinRes
             * @static
             * @param {proto.room.IJoinRes} message JoinRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            JoinRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.code);
                if (message.room != null && Object.hasOwnProperty.call(message, "room"))
                    $root.proto.room.Room.encode(message.room, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified JoinRes message, length delimited. Does not implicitly {@link proto.room.JoinRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.room.JoinRes
             * @static
             * @param {proto.room.IJoinRes} message JoinRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            JoinRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a JoinRes message from the specified reader or buffer.
             * @function decode
             * @memberof proto.room.JoinRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.room.JoinRes} JoinRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            JoinRes.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.room.JoinRes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.code = reader.string();
                        break;
                    case 2:
                        message.room = $root.proto.room.Room.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a JoinRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.room.JoinRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.room.JoinRes} JoinRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            JoinRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a JoinRes message.
             * @function verify
             * @memberof proto.room.JoinRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            JoinRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.code != null && message.hasOwnProperty("code"))
                    if (!$util.isString(message.code))
                        return "code: string expected";
                if (message.room != null && message.hasOwnProperty("room")) {
                    var error = $root.proto.room.Room.verify(message.room);
                    if (error)
                        return "room." + error;
                }
                return null;
            };

            /**
             * Creates a JoinRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.room.JoinRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.room.JoinRes} JoinRes
             */
            JoinRes.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.room.JoinRes)
                    return object;
                var message = new $root.proto.room.JoinRes();
                if (object.code != null)
                    message.code = String(object.code);
                if (object.room != null) {
                    if (typeof object.room !== "object")
                        throw TypeError(".proto.room.JoinRes.room: object expected");
                    message.room = $root.proto.room.Room.fromObject(object.room);
                }
                return message;
            };

            /**
             * Creates a plain object from a JoinRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.room.JoinRes
             * @static
             * @param {proto.room.JoinRes} message JoinRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            JoinRes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.code = "";
                    object.room = null;
                }
                if (message.code != null && message.hasOwnProperty("code"))
                    object.code = message.code;
                if (message.room != null && message.hasOwnProperty("room"))
                    object.room = $root.proto.room.Room.toObject(message.room, options);
                return object;
            };

            /**
             * Converts this JoinRes to JSON.
             * @function toJSON
             * @memberof proto.room.JoinRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            JoinRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return JoinRes;
        })();

        room.ChatReq = (function() {

            /**
             * Properties of a ChatReq.
             * @memberof proto.room
             * @interface IChatReq
             * @property {string|null} [content] ChatReq content
             */

            /**
             * Constructs a new ChatReq.
             * @memberof proto.room
             * @classdesc Represents a ChatReq.
             * @implements IChatReq
             * @constructor
             * @param {proto.room.IChatReq=} [properties] Properties to set
             */
            function ChatReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ChatReq content.
             * @member {string} content
             * @memberof proto.room.ChatReq
             * @instance
             */
            ChatReq.prototype.content = "";

            /**
             * Creates a new ChatReq instance using the specified properties.
             * @function create
             * @memberof proto.room.ChatReq
             * @static
             * @param {proto.room.IChatReq=} [properties] Properties to set
             * @returns {proto.room.ChatReq} ChatReq instance
             */
            ChatReq.create = function create(properties) {
                return new ChatReq(properties);
            };

            /**
             * Encodes the specified ChatReq message. Does not implicitly {@link proto.room.ChatReq.verify|verify} messages.
             * @function encode
             * @memberof proto.room.ChatReq
             * @static
             * @param {proto.room.IChatReq} message ChatReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChatReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.content);
                return writer;
            };

            /**
             * Encodes the specified ChatReq message, length delimited. Does not implicitly {@link proto.room.ChatReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.room.ChatReq
             * @static
             * @param {proto.room.IChatReq} message ChatReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChatReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ChatReq message from the specified reader or buffer.
             * @function decode
             * @memberof proto.room.ChatReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.room.ChatReq} ChatReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChatReq.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.room.ChatReq();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.content = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ChatReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.room.ChatReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.room.ChatReq} ChatReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChatReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ChatReq message.
             * @function verify
             * @memberof proto.room.ChatReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ChatReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.content != null && message.hasOwnProperty("content"))
                    if (!$util.isString(message.content))
                        return "content: string expected";
                return null;
            };

            /**
             * Creates a ChatReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.room.ChatReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.room.ChatReq} ChatReq
             */
            ChatReq.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.room.ChatReq)
                    return object;
                var message = new $root.proto.room.ChatReq();
                if (object.content != null)
                    message.content = String(object.content);
                return message;
            };

            /**
             * Creates a plain object from a ChatReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.room.ChatReq
             * @static
             * @param {proto.room.ChatReq} message ChatReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ChatReq.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.content = "";
                if (message.content != null && message.hasOwnProperty("content"))
                    object.content = message.content;
                return object;
            };

            /**
             * Converts this ChatReq to JSON.
             * @function toJSON
             * @memberof proto.room.ChatReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ChatReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ChatReq;
        })();

        room.ChatNot = (function() {

            /**
             * Properties of a ChatNot.
             * @memberof proto.room
             * @interface IChatNot
             * @property {string|null} [uid] ChatNot uid
             * @property {string|null} [content] ChatNot content
             */

            /**
             * Constructs a new ChatNot.
             * @memberof proto.room
             * @classdesc Represents a ChatNot.
             * @implements IChatNot
             * @constructor
             * @param {proto.room.IChatNot=} [properties] Properties to set
             */
            function ChatNot(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ChatNot uid.
             * @member {string} uid
             * @memberof proto.room.ChatNot
             * @instance
             */
            ChatNot.prototype.uid = "";

            /**
             * ChatNot content.
             * @member {string} content
             * @memberof proto.room.ChatNot
             * @instance
             */
            ChatNot.prototype.content = "";

            /**
             * Creates a new ChatNot instance using the specified properties.
             * @function create
             * @memberof proto.room.ChatNot
             * @static
             * @param {proto.room.IChatNot=} [properties] Properties to set
             * @returns {proto.room.ChatNot} ChatNot instance
             */
            ChatNot.create = function create(properties) {
                return new ChatNot(properties);
            };

            /**
             * Encodes the specified ChatNot message. Does not implicitly {@link proto.room.ChatNot.verify|verify} messages.
             * @function encode
             * @memberof proto.room.ChatNot
             * @static
             * @param {proto.room.IChatNot} message ChatNot message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChatNot.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
                if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.content);
                return writer;
            };

            /**
             * Encodes the specified ChatNot message, length delimited. Does not implicitly {@link proto.room.ChatNot.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.room.ChatNot
             * @static
             * @param {proto.room.IChatNot} message ChatNot message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChatNot.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ChatNot message from the specified reader or buffer.
             * @function decode
             * @memberof proto.room.ChatNot
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.room.ChatNot} ChatNot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChatNot.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.room.ChatNot();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.uid = reader.string();
                        break;
                    case 2:
                        message.content = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ChatNot message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.room.ChatNot
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.room.ChatNot} ChatNot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChatNot.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ChatNot message.
             * @function verify
             * @memberof proto.room.ChatNot
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ChatNot.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uid != null && message.hasOwnProperty("uid"))
                    if (!$util.isString(message.uid))
                        return "uid: string expected";
                if (message.content != null && message.hasOwnProperty("content"))
                    if (!$util.isString(message.content))
                        return "content: string expected";
                return null;
            };

            /**
             * Creates a ChatNot message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.room.ChatNot
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.room.ChatNot} ChatNot
             */
            ChatNot.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.room.ChatNot)
                    return object;
                var message = new $root.proto.room.ChatNot();
                if (object.uid != null)
                    message.uid = String(object.uid);
                if (object.content != null)
                    message.content = String(object.content);
                return message;
            };

            /**
             * Creates a plain object from a ChatNot message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.room.ChatNot
             * @static
             * @param {proto.room.ChatNot} message ChatNot
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ChatNot.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.uid = "";
                    object.content = "";
                }
                if (message.uid != null && message.hasOwnProperty("uid"))
                    object.uid = message.uid;
                if (message.content != null && message.hasOwnProperty("content"))
                    object.content = message.content;
                return object;
            };

            /**
             * Converts this ChatNot to JSON.
             * @function toJSON
             * @memberof proto.room.ChatNot
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ChatNot.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ChatNot;
        })();

        room.UserAction = (function() {

            /**
             * Properties of a UserAction.
             * @memberof proto.room
             * @interface IUserAction
             * @property {number|null} [action] UserAction action
             * @property {string|null} [uid] UserAction uid
             */

            /**
             * Constructs a new UserAction.
             * @memberof proto.room
             * @classdesc Represents a UserAction.
             * @implements IUserAction
             * @constructor
             * @param {proto.room.IUserAction=} [properties] Properties to set
             */
            function UserAction(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UserAction action.
             * @member {number} action
             * @memberof proto.room.UserAction
             * @instance
             */
            UserAction.prototype.action = 0;

            /**
             * UserAction uid.
             * @member {string} uid
             * @memberof proto.room.UserAction
             * @instance
             */
            UserAction.prototype.uid = "";

            /**
             * Creates a new UserAction instance using the specified properties.
             * @function create
             * @memberof proto.room.UserAction
             * @static
             * @param {proto.room.IUserAction=} [properties] Properties to set
             * @returns {proto.room.UserAction} UserAction instance
             */
            UserAction.create = function create(properties) {
                return new UserAction(properties);
            };

            /**
             * Encodes the specified UserAction message. Does not implicitly {@link proto.room.UserAction.verify|verify} messages.
             * @function encode
             * @memberof proto.room.UserAction
             * @static
             * @param {proto.room.IUserAction} message UserAction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserAction.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.action != null && Object.hasOwnProperty.call(message, "action"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.action);
                if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.uid);
                return writer;
            };

            /**
             * Encodes the specified UserAction message, length delimited. Does not implicitly {@link proto.room.UserAction.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.room.UserAction
             * @static
             * @param {proto.room.IUserAction} message UserAction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserAction.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a UserAction message from the specified reader or buffer.
             * @function decode
             * @memberof proto.room.UserAction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.room.UserAction} UserAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserAction.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.room.UserAction();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.action = reader.int32();
                        break;
                    case 2:
                        message.uid = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a UserAction message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.room.UserAction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.room.UserAction} UserAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserAction.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UserAction message.
             * @function verify
             * @memberof proto.room.UserAction
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UserAction.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.action != null && message.hasOwnProperty("action"))
                    if (!$util.isInteger(message.action))
                        return "action: integer expected";
                if (message.uid != null && message.hasOwnProperty("uid"))
                    if (!$util.isString(message.uid))
                        return "uid: string expected";
                return null;
            };

            /**
             * Creates a UserAction message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.room.UserAction
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.room.UserAction} UserAction
             */
            UserAction.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.room.UserAction)
                    return object;
                var message = new $root.proto.room.UserAction();
                if (object.action != null)
                    message.action = object.action | 0;
                if (object.uid != null)
                    message.uid = String(object.uid);
                return message;
            };

            /**
             * Creates a plain object from a UserAction message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.room.UserAction
             * @static
             * @param {proto.room.UserAction} message UserAction
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UserAction.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.action = 0;
                    object.uid = "";
                }
                if (message.action != null && message.hasOwnProperty("action"))
                    object.action = message.action;
                if (message.uid != null && message.hasOwnProperty("uid"))
                    object.uid = message.uid;
                return object;
            };

            /**
             * Converts this UserAction to JSON.
             * @function toJSON
             * @memberof proto.room.UserAction
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UserAction.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return UserAction;
        })();

        room.CreateRoomReq = (function() {

            /**
             * Properties of a CreateRoomReq.
             * @memberof proto.room
             * @interface ICreateRoomReq
             * @property {string|null} [name] CreateRoomReq name
             */

            /**
             * Constructs a new CreateRoomReq.
             * @memberof proto.room
             * @classdesc Represents a CreateRoomReq.
             * @implements ICreateRoomReq
             * @constructor
             * @param {proto.room.ICreateRoomReq=} [properties] Properties to set
             */
            function CreateRoomReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CreateRoomReq name.
             * @member {string} name
             * @memberof proto.room.CreateRoomReq
             * @instance
             */
            CreateRoomReq.prototype.name = "";

            /**
             * Creates a new CreateRoomReq instance using the specified properties.
             * @function create
             * @memberof proto.room.CreateRoomReq
             * @static
             * @param {proto.room.ICreateRoomReq=} [properties] Properties to set
             * @returns {proto.room.CreateRoomReq} CreateRoomReq instance
             */
            CreateRoomReq.create = function create(properties) {
                return new CreateRoomReq(properties);
            };

            /**
             * Encodes the specified CreateRoomReq message. Does not implicitly {@link proto.room.CreateRoomReq.verify|verify} messages.
             * @function encode
             * @memberof proto.room.CreateRoomReq
             * @static
             * @param {proto.room.ICreateRoomReq} message CreateRoomReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateRoomReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                return writer;
            };

            /**
             * Encodes the specified CreateRoomReq message, length delimited. Does not implicitly {@link proto.room.CreateRoomReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.room.CreateRoomReq
             * @static
             * @param {proto.room.ICreateRoomReq} message CreateRoomReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CreateRoomReq message from the specified reader or buffer.
             * @function decode
             * @memberof proto.room.CreateRoomReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.room.CreateRoomReq} CreateRoomReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateRoomReq.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.room.CreateRoomReq();
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
             * Decodes a CreateRoomReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.room.CreateRoomReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.room.CreateRoomReq} CreateRoomReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateRoomReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CreateRoomReq message.
             * @function verify
             * @memberof proto.room.CreateRoomReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CreateRoomReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                return null;
            };

            /**
             * Creates a CreateRoomReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.room.CreateRoomReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.room.CreateRoomReq} CreateRoomReq
             */
            CreateRoomReq.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.room.CreateRoomReq)
                    return object;
                var message = new $root.proto.room.CreateRoomReq();
                if (object.name != null)
                    message.name = String(object.name);
                return message;
            };

            /**
             * Creates a plain object from a CreateRoomReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.room.CreateRoomReq
             * @static
             * @param {proto.room.CreateRoomReq} message CreateRoomReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CreateRoomReq.toObject = function toObject(message, options) {
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
             * Converts this CreateRoomReq to JSON.
             * @function toJSON
             * @memberof proto.room.CreateRoomReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CreateRoomReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return CreateRoomReq;
        })();

        room.CreateRoomRes = (function() {

            /**
             * Properties of a CreateRoomRes.
             * @memberof proto.room
             * @interface ICreateRoomRes
             * @property {string|null} [code] CreateRoomRes code
             * @property {proto.room.IRoom|null} [room] CreateRoomRes room
             * @property {string|null} [serverId] CreateRoomRes serverId
             */

            /**
             * Constructs a new CreateRoomRes.
             * @memberof proto.room
             * @classdesc Represents a CreateRoomRes.
             * @implements ICreateRoomRes
             * @constructor
             * @param {proto.room.ICreateRoomRes=} [properties] Properties to set
             */
            function CreateRoomRes(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CreateRoomRes code.
             * @member {string} code
             * @memberof proto.room.CreateRoomRes
             * @instance
             */
            CreateRoomRes.prototype.code = "";

            /**
             * CreateRoomRes room.
             * @member {proto.room.IRoom|null|undefined} room
             * @memberof proto.room.CreateRoomRes
             * @instance
             */
            CreateRoomRes.prototype.room = null;

            /**
             * CreateRoomRes serverId.
             * @member {string} serverId
             * @memberof proto.room.CreateRoomRes
             * @instance
             */
            CreateRoomRes.prototype.serverId = "";

            /**
             * Creates a new CreateRoomRes instance using the specified properties.
             * @function create
             * @memberof proto.room.CreateRoomRes
             * @static
             * @param {proto.room.ICreateRoomRes=} [properties] Properties to set
             * @returns {proto.room.CreateRoomRes} CreateRoomRes instance
             */
            CreateRoomRes.create = function create(properties) {
                return new CreateRoomRes(properties);
            };

            /**
             * Encodes the specified CreateRoomRes message. Does not implicitly {@link proto.room.CreateRoomRes.verify|verify} messages.
             * @function encode
             * @memberof proto.room.CreateRoomRes
             * @static
             * @param {proto.room.ICreateRoomRes} message CreateRoomRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateRoomRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.code);
                if (message.room != null && Object.hasOwnProperty.call(message, "room"))
                    $root.proto.room.Room.encode(message.room, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.serverId != null && Object.hasOwnProperty.call(message, "serverId"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.serverId);
                return writer;
            };

            /**
             * Encodes the specified CreateRoomRes message, length delimited. Does not implicitly {@link proto.room.CreateRoomRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.room.CreateRoomRes
             * @static
             * @param {proto.room.ICreateRoomRes} message CreateRoomRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateRoomRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CreateRoomRes message from the specified reader or buffer.
             * @function decode
             * @memberof proto.room.CreateRoomRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.room.CreateRoomRes} CreateRoomRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateRoomRes.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.room.CreateRoomRes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.code = reader.string();
                        break;
                    case 2:
                        message.room = $root.proto.room.Room.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.serverId = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CreateRoomRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.room.CreateRoomRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.room.CreateRoomRes} CreateRoomRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateRoomRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CreateRoomRes message.
             * @function verify
             * @memberof proto.room.CreateRoomRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CreateRoomRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.code != null && message.hasOwnProperty("code"))
                    if (!$util.isString(message.code))
                        return "code: string expected";
                if (message.room != null && message.hasOwnProperty("room")) {
                    var error = $root.proto.room.Room.verify(message.room);
                    if (error)
                        return "room." + error;
                }
                if (message.serverId != null && message.hasOwnProperty("serverId"))
                    if (!$util.isString(message.serverId))
                        return "serverId: string expected";
                return null;
            };

            /**
             * Creates a CreateRoomRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.room.CreateRoomRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.room.CreateRoomRes} CreateRoomRes
             */
            CreateRoomRes.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.room.CreateRoomRes)
                    return object;
                var message = new $root.proto.room.CreateRoomRes();
                if (object.code != null)
                    message.code = String(object.code);
                if (object.room != null) {
                    if (typeof object.room !== "object")
                        throw TypeError(".proto.room.CreateRoomRes.room: object expected");
                    message.room = $root.proto.room.Room.fromObject(object.room);
                }
                if (object.serverId != null)
                    message.serverId = String(object.serverId);
                return message;
            };

            /**
             * Creates a plain object from a CreateRoomRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.room.CreateRoomRes
             * @static
             * @param {proto.room.CreateRoomRes} message CreateRoomRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CreateRoomRes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.code = "";
                    object.room = null;
                    object.serverId = "";
                }
                if (message.code != null && message.hasOwnProperty("code"))
                    object.code = message.code;
                if (message.room != null && message.hasOwnProperty("room"))
                    object.room = $root.proto.room.Room.toObject(message.room, options);
                if (message.serverId != null && message.hasOwnProperty("serverId"))
                    object.serverId = message.serverId;
                return object;
            };

            /**
             * Converts this CreateRoomRes to JSON.
             * @function toJSON
             * @memberof proto.room.CreateRoomRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CreateRoomRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return CreateRoomRes;
        })();

        return room;
    })();

    return proto;
})();

module.exports = $root;
