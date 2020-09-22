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

    proto.auth = (function() {

        /**
         * Namespace auth.
         * @memberof proto
         * @namespace
         */
        var auth = {};

        auth.Error = (function() {

            /**
             * Properties of an Error.
             * @memberof proto.auth
             * @interface IError
             * @property {string|null} [id] Error id
             * @property {number|null} [code] Error code
             * @property {string|null} [detail] Error detail
             * @property {string|null} [status] Error status
             */

            /**
             * Constructs a new Error.
             * @memberof proto.auth
             * @classdesc Represents an Error.
             * @implements IError
             * @constructor
             * @param {proto.auth.IError=} [properties] Properties to set
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
             * @memberof proto.auth.Error
             * @instance
             */
            Error.prototype.id = "";

            /**
             * Error code.
             * @member {number} code
             * @memberof proto.auth.Error
             * @instance
             */
            Error.prototype.code = 0;

            /**
             * Error detail.
             * @member {string} detail
             * @memberof proto.auth.Error
             * @instance
             */
            Error.prototype.detail = "";

            /**
             * Error status.
             * @member {string} status
             * @memberof proto.auth.Error
             * @instance
             */
            Error.prototype.status = "";

            /**
             * Creates a new Error instance using the specified properties.
             * @function create
             * @memberof proto.auth.Error
             * @static
             * @param {proto.auth.IError=} [properties] Properties to set
             * @returns {proto.auth.Error} Error instance
             */
            Error.create = function create(properties) {
                return new Error(properties);
            };

            /**
             * Encodes the specified Error message. Does not implicitly {@link proto.auth.Error.verify|verify} messages.
             * @function encode
             * @memberof proto.auth.Error
             * @static
             * @param {proto.auth.IError} message Error message or plain object to encode
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
             * Encodes the specified Error message, length delimited. Does not implicitly {@link proto.auth.Error.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.auth.Error
             * @static
             * @param {proto.auth.IError} message Error message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Error.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Error message from the specified reader or buffer.
             * @function decode
             * @memberof proto.auth.Error
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.auth.Error} Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Error.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.auth.Error();
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
             * @memberof proto.auth.Error
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.auth.Error} Error
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
             * @memberof proto.auth.Error
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
             * @memberof proto.auth.Error
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.auth.Error} Error
             */
            Error.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.auth.Error)
                    return object;
                var message = new $root.proto.auth.Error();
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
             * @memberof proto.auth.Error
             * @static
             * @param {proto.auth.Error} message Error
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
             * @memberof proto.auth.Error
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Error.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Error;
        })();

        auth.LoginReq = (function() {

            /**
             * Properties of a LoginReq.
             * @memberof proto.auth
             * @interface ILoginReq
             * @property {string|null} [username] LoginReq username
             */

            /**
             * Constructs a new LoginReq.
             * @memberof proto.auth
             * @classdesc Represents a LoginReq.
             * @implements ILoginReq
             * @constructor
             * @param {proto.auth.ILoginReq=} [properties] Properties to set
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
             * @memberof proto.auth.LoginReq
             * @instance
             */
            LoginReq.prototype.username = "";

            /**
             * Creates a new LoginReq instance using the specified properties.
             * @function create
             * @memberof proto.auth.LoginReq
             * @static
             * @param {proto.auth.ILoginReq=} [properties] Properties to set
             * @returns {proto.auth.LoginReq} LoginReq instance
             */
            LoginReq.create = function create(properties) {
                return new LoginReq(properties);
            };

            /**
             * Encodes the specified LoginReq message. Does not implicitly {@link proto.auth.LoginReq.verify|verify} messages.
             * @function encode
             * @memberof proto.auth.LoginReq
             * @static
             * @param {proto.auth.ILoginReq} message LoginReq message or plain object to encode
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
             * Encodes the specified LoginReq message, length delimited. Does not implicitly {@link proto.auth.LoginReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.auth.LoginReq
             * @static
             * @param {proto.auth.ILoginReq} message LoginReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LoginReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a LoginReq message from the specified reader or buffer.
             * @function decode
             * @memberof proto.auth.LoginReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.auth.LoginReq} LoginReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LoginReq.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.auth.LoginReq();
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
             * @memberof proto.auth.LoginReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.auth.LoginReq} LoginReq
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
             * @memberof proto.auth.LoginReq
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
             * @memberof proto.auth.LoginReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.auth.LoginReq} LoginReq
             */
            LoginReq.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.auth.LoginReq)
                    return object;
                var message = new $root.proto.auth.LoginReq();
                if (object.username != null)
                    message.username = String(object.username);
                return message;
            };

            /**
             * Creates a plain object from a LoginReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.auth.LoginReq
             * @static
             * @param {proto.auth.LoginReq} message LoginReq
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
             * @memberof proto.auth.LoginReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LoginReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return LoginReq;
        })();

        auth.LoginRes = (function() {

            /**
             * Properties of a LoginRes.
             * @memberof proto.auth
             * @interface ILoginRes
             * @property {string|null} [code] LoginRes code
             * @property {string|null} [uid] LoginRes uid
             * @property {string|null} [username] LoginRes username
             */

            /**
             * Constructs a new LoginRes.
             * @memberof proto.auth
             * @classdesc Represents a LoginRes.
             * @implements ILoginRes
             * @constructor
             * @param {proto.auth.ILoginRes=} [properties] Properties to set
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
             * @memberof proto.auth.LoginRes
             * @instance
             */
            LoginRes.prototype.code = "";

            /**
             * LoginRes uid.
             * @member {string} uid
             * @memberof proto.auth.LoginRes
             * @instance
             */
            LoginRes.prototype.uid = "";

            /**
             * LoginRes username.
             * @member {string} username
             * @memberof proto.auth.LoginRes
             * @instance
             */
            LoginRes.prototype.username = "";

            /**
             * Creates a new LoginRes instance using the specified properties.
             * @function create
             * @memberof proto.auth.LoginRes
             * @static
             * @param {proto.auth.ILoginRes=} [properties] Properties to set
             * @returns {proto.auth.LoginRes} LoginRes instance
             */
            LoginRes.create = function create(properties) {
                return new LoginRes(properties);
            };

            /**
             * Encodes the specified LoginRes message. Does not implicitly {@link proto.auth.LoginRes.verify|verify} messages.
             * @function encode
             * @memberof proto.auth.LoginRes
             * @static
             * @param {proto.auth.ILoginRes} message LoginRes message or plain object to encode
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
             * Encodes the specified LoginRes message, length delimited. Does not implicitly {@link proto.auth.LoginRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.auth.LoginRes
             * @static
             * @param {proto.auth.ILoginRes} message LoginRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LoginRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a LoginRes message from the specified reader or buffer.
             * @function decode
             * @memberof proto.auth.LoginRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.auth.LoginRes} LoginRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LoginRes.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.auth.LoginRes();
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
             * @memberof proto.auth.LoginRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.auth.LoginRes} LoginRes
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
             * @memberof proto.auth.LoginRes
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
             * @memberof proto.auth.LoginRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.auth.LoginRes} LoginRes
             */
            LoginRes.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.auth.LoginRes)
                    return object;
                var message = new $root.proto.auth.LoginRes();
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
             * @memberof proto.auth.LoginRes
             * @static
             * @param {proto.auth.LoginRes} message LoginRes
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
             * @memberof proto.auth.LoginRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LoginRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return LoginRes;
        })();

        auth.GetUserInfoReq = (function() {

            /**
             * Properties of a GetUserInfoReq.
             * @memberof proto.auth
             * @interface IGetUserInfoReq
             * @property {string|null} [uid] GetUserInfoReq uid
             */

            /**
             * Constructs a new GetUserInfoReq.
             * @memberof proto.auth
             * @classdesc Represents a GetUserInfoReq.
             * @implements IGetUserInfoReq
             * @constructor
             * @param {proto.auth.IGetUserInfoReq=} [properties] Properties to set
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
             * @memberof proto.auth.GetUserInfoReq
             * @instance
             */
            GetUserInfoReq.prototype.uid = "";

            /**
             * Creates a new GetUserInfoReq instance using the specified properties.
             * @function create
             * @memberof proto.auth.GetUserInfoReq
             * @static
             * @param {proto.auth.IGetUserInfoReq=} [properties] Properties to set
             * @returns {proto.auth.GetUserInfoReq} GetUserInfoReq instance
             */
            GetUserInfoReq.create = function create(properties) {
                return new GetUserInfoReq(properties);
            };

            /**
             * Encodes the specified GetUserInfoReq message. Does not implicitly {@link proto.auth.GetUserInfoReq.verify|verify} messages.
             * @function encode
             * @memberof proto.auth.GetUserInfoReq
             * @static
             * @param {proto.auth.IGetUserInfoReq} message GetUserInfoReq message or plain object to encode
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
             * Encodes the specified GetUserInfoReq message, length delimited. Does not implicitly {@link proto.auth.GetUserInfoReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.auth.GetUserInfoReq
             * @static
             * @param {proto.auth.IGetUserInfoReq} message GetUserInfoReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetUserInfoReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetUserInfoReq message from the specified reader or buffer.
             * @function decode
             * @memberof proto.auth.GetUserInfoReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.auth.GetUserInfoReq} GetUserInfoReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetUserInfoReq.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.auth.GetUserInfoReq();
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
             * @memberof proto.auth.GetUserInfoReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.auth.GetUserInfoReq} GetUserInfoReq
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
             * @memberof proto.auth.GetUserInfoReq
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
             * @memberof proto.auth.GetUserInfoReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.auth.GetUserInfoReq} GetUserInfoReq
             */
            GetUserInfoReq.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.auth.GetUserInfoReq)
                    return object;
                var message = new $root.proto.auth.GetUserInfoReq();
                if (object.uid != null)
                    message.uid = String(object.uid);
                return message;
            };

            /**
             * Creates a plain object from a GetUserInfoReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.auth.GetUserInfoReq
             * @static
             * @param {proto.auth.GetUserInfoReq} message GetUserInfoReq
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
             * @memberof proto.auth.GetUserInfoReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetUserInfoReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return GetUserInfoReq;
        })();

        auth.GetUserInfoRes = (function() {

            /**
             * Properties of a GetUserInfoRes.
             * @memberof proto.auth
             * @interface IGetUserInfoRes
             * @property {string|null} [code] GetUserInfoRes code
             * @property {string|null} [uid] GetUserInfoRes uid
             * @property {string|null} [username] GetUserInfoRes username
             */

            /**
             * Constructs a new GetUserInfoRes.
             * @memberof proto.auth
             * @classdesc Represents a GetUserInfoRes.
             * @implements IGetUserInfoRes
             * @constructor
             * @param {proto.auth.IGetUserInfoRes=} [properties] Properties to set
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
             * @memberof proto.auth.GetUserInfoRes
             * @instance
             */
            GetUserInfoRes.prototype.code = "";

            /**
             * GetUserInfoRes uid.
             * @member {string} uid
             * @memberof proto.auth.GetUserInfoRes
             * @instance
             */
            GetUserInfoRes.prototype.uid = "";

            /**
             * GetUserInfoRes username.
             * @member {string} username
             * @memberof proto.auth.GetUserInfoRes
             * @instance
             */
            GetUserInfoRes.prototype.username = "";

            /**
             * Creates a new GetUserInfoRes instance using the specified properties.
             * @function create
             * @memberof proto.auth.GetUserInfoRes
             * @static
             * @param {proto.auth.IGetUserInfoRes=} [properties] Properties to set
             * @returns {proto.auth.GetUserInfoRes} GetUserInfoRes instance
             */
            GetUserInfoRes.create = function create(properties) {
                return new GetUserInfoRes(properties);
            };

            /**
             * Encodes the specified GetUserInfoRes message. Does not implicitly {@link proto.auth.GetUserInfoRes.verify|verify} messages.
             * @function encode
             * @memberof proto.auth.GetUserInfoRes
             * @static
             * @param {proto.auth.IGetUserInfoRes} message GetUserInfoRes message or plain object to encode
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
             * Encodes the specified GetUserInfoRes message, length delimited. Does not implicitly {@link proto.auth.GetUserInfoRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.auth.GetUserInfoRes
             * @static
             * @param {proto.auth.IGetUserInfoRes} message GetUserInfoRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetUserInfoRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetUserInfoRes message from the specified reader or buffer.
             * @function decode
             * @memberof proto.auth.GetUserInfoRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.auth.GetUserInfoRes} GetUserInfoRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetUserInfoRes.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.auth.GetUserInfoRes();
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
             * @memberof proto.auth.GetUserInfoRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.auth.GetUserInfoRes} GetUserInfoRes
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
             * @memberof proto.auth.GetUserInfoRes
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
             * @memberof proto.auth.GetUserInfoRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.auth.GetUserInfoRes} GetUserInfoRes
             */
            GetUserInfoRes.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.auth.GetUserInfoRes)
                    return object;
                var message = new $root.proto.auth.GetUserInfoRes();
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
             * @memberof proto.auth.GetUserInfoRes
             * @static
             * @param {proto.auth.GetUserInfoRes} message GetUserInfoRes
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
             * @memberof proto.auth.GetUserInfoRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetUserInfoRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return GetUserInfoRes;
        })();

        return auth;
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
             * @property {proto.mgr.IRoom|null} [mgr] CreateRoomRes mgr
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
             * CreateRoomRes mgr.
             * @member {proto.mgr.IRoom|null|undefined} mgr
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
                        return "mgr." + error;
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
                        throw TypeError(".proto.mgr.CreateRoomRes.mgr: object expected");
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

        mgr.CloseRoomNot = (function() {

            /**
             * Properties of a CloseRoomNot.
             * @memberof proto.mgr
             * @interface ICloseRoomNot
             * @property {string|null} [rid] CloseRoomNot rid
             */

            /**
             * Constructs a new CloseRoomNot.
             * @memberof proto.mgr
             * @classdesc Represents a CloseRoomNot.
             * @implements ICloseRoomNot
             * @constructor
             * @param {proto.mgr.ICloseRoomNot=} [properties] Properties to set
             */
            function CloseRoomNot(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CloseRoomNot rid.
             * @member {string} rid
             * @memberof proto.mgr.CloseRoomNot
             * @instance
             */
            CloseRoomNot.prototype.rid = "";

            /**
             * Creates a new CloseRoomNot instance using the specified properties.
             * @function create
             * @memberof proto.mgr.CloseRoomNot
             * @static
             * @param {proto.mgr.ICloseRoomNot=} [properties] Properties to set
             * @returns {proto.mgr.CloseRoomNot} CloseRoomNot instance
             */
            CloseRoomNot.create = function create(properties) {
                return new CloseRoomNot(properties);
            };

            /**
             * Encodes the specified CloseRoomNot message. Does not implicitly {@link proto.mgr.CloseRoomNot.verify|verify} messages.
             * @function encode
             * @memberof proto.mgr.CloseRoomNot
             * @static
             * @param {proto.mgr.ICloseRoomNot} message CloseRoomNot message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CloseRoomNot.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.rid != null && Object.hasOwnProperty.call(message, "rid"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.rid);
                return writer;
            };

            /**
             * Encodes the specified CloseRoomNot message, length delimited. Does not implicitly {@link proto.mgr.CloseRoomNot.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.mgr.CloseRoomNot
             * @static
             * @param {proto.mgr.ICloseRoomNot} message CloseRoomNot message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CloseRoomNot.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CloseRoomNot message from the specified reader or buffer.
             * @function decode
             * @memberof proto.mgr.CloseRoomNot
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.mgr.CloseRoomNot} CloseRoomNot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CloseRoomNot.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.mgr.CloseRoomNot();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.rid = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CloseRoomNot message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.mgr.CloseRoomNot
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.mgr.CloseRoomNot} CloseRoomNot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CloseRoomNot.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CloseRoomNot message.
             * @function verify
             * @memberof proto.mgr.CloseRoomNot
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CloseRoomNot.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.rid != null && message.hasOwnProperty("rid"))
                    if (!$util.isString(message.rid))
                        return "rid: string expected";
                return null;
            };

            /**
             * Creates a CloseRoomNot message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.mgr.CloseRoomNot
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.mgr.CloseRoomNot} CloseRoomNot
             */
            CloseRoomNot.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.mgr.CloseRoomNot)
                    return object;
                var message = new $root.proto.mgr.CloseRoomNot();
                if (object.rid != null)
                    message.rid = String(object.rid);
                return message;
            };

            /**
             * Creates a plain object from a CloseRoomNot message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.mgr.CloseRoomNot
             * @static
             * @param {proto.mgr.CloseRoomNot} message CloseRoomNot
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CloseRoomNot.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.rid = "";
                if (message.rid != null && message.hasOwnProperty("rid"))
                    object.rid = message.rid;
                return object;
            };

            /**
             * Converts this CloseRoomNot to JSON.
             * @function toJSON
             * @memberof proto.mgr.CloseRoomNot
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CloseRoomNot.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return CloseRoomNot;
        })();

        return mgr;
    })();

    proto.room = (function() {

        /**
         * Namespace mgr.
         * @memberof proto
         * @namespace
         */
        var room = {};

        room.User = (function() {

            /**
             * Properties of a User.
             * @memberof proto.mgr
             * @interface IUser
             * @property {string|null} [uid] User uid
             * @property {string|null} [username] User username
             */

            /**
             * Constructs a new User.
             * @memberof proto.mgr
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
             * @memberof proto.mgr.User
             * @instance
             */
            User.prototype.uid = "";

            /**
             * User username.
             * @member {string} username
             * @memberof proto.mgr.User
             * @instance
             */
            User.prototype.username = "";

            /**
             * Creates a new User instance using the specified properties.
             * @function create
             * @memberof proto.mgr.User
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
             * @memberof proto.mgr.User
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
             * @memberof proto.mgr.User
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
             * @memberof proto.mgr.User
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
             * @memberof proto.mgr.User
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
             * @memberof proto.mgr.User
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
             * @memberof proto.mgr.User
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
             * @memberof proto.mgr.User
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
             * @memberof proto.mgr.User
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
             * @memberof proto.mgr
             * @interface IRoom
             * @property {string|null} [id] Room id
             * @property {string|null} [name] Room name
             * @property {Array.<proto.room.IUser>|null} [users] Room users
             */

            /**
             * Constructs a new Room.
             * @memberof proto.mgr
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
             * Room users.
             * @member {Array.<proto.room.IUser>} users
             * @memberof proto.mgr.Room
             * @instance
             */
            Room.prototype.users = $util.emptyArray;

            /**
             * Creates a new Room instance using the specified properties.
             * @function create
             * @memberof proto.mgr.Room
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
             * @memberof proto.mgr.Room
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
             * @memberof proto.mgr.Room
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
             * @memberof proto.mgr.Room
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
             * @memberof proto.mgr.Room
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
             * @memberof proto.mgr.Room
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
                        throw TypeError(".proto.mgr.Room.users: array expected");
                    message.users = [];
                    for (var i = 0; i < object.users.length; ++i) {
                        if (typeof object.users[i] !== "object")
                            throw TypeError(".proto.mgr.Room.users: object expected");
                        message.users[i] = $root.proto.room.User.fromObject(object.users[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a Room message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.mgr.Room
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
             * @memberof proto.mgr.Room
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
             * @memberof proto.mgr
             * @interface IJoinReq
             * @property {string|null} [id] JoinReq id
             */

            /**
             * Constructs a new JoinReq.
             * @memberof proto.mgr
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
             * @memberof proto.mgr.JoinReq
             * @instance
             */
            JoinReq.prototype.id = "";

            /**
             * Creates a new JoinReq instance using the specified properties.
             * @function create
             * @memberof proto.mgr.JoinReq
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
             * @memberof proto.mgr.JoinReq
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
             * @memberof proto.mgr.JoinReq
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
             * @memberof proto.mgr.JoinReq
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
             * @memberof proto.mgr.JoinReq
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
             * @memberof proto.mgr.JoinReq
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
             * @memberof proto.mgr.JoinReq
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
             * @memberof proto.mgr.JoinReq
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
             * @memberof proto.mgr.JoinReq
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
             * @memberof proto.mgr
             * @interface IJoinRes
             * @property {string|null} [code] JoinRes code
             * @property {proto.room.IRoom|null} [mgr] JoinRes mgr
             */

            /**
             * Constructs a new JoinRes.
             * @memberof proto.mgr
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
             * @memberof proto.mgr.JoinRes
             * @instance
             */
            JoinRes.prototype.code = "";

            /**
             * JoinRes mgr.
             * @member {proto.room.IRoom|null|undefined} mgr
             * @memberof proto.mgr.JoinRes
             * @instance
             */
            JoinRes.prototype.room = null;

            /**
             * Creates a new JoinRes instance using the specified properties.
             * @function create
             * @memberof proto.mgr.JoinRes
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
             * @memberof proto.mgr.JoinRes
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
             * @memberof proto.mgr.JoinRes
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
             * @memberof proto.mgr.JoinRes
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
             * @memberof proto.mgr.JoinRes
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
             * @memberof proto.mgr.JoinRes
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
                        return "mgr." + error;
                }
                return null;
            };

            /**
             * Creates a JoinRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.mgr.JoinRes
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
                        throw TypeError(".proto.mgr.JoinRes.mgr: object expected");
                    message.room = $root.proto.room.Room.fromObject(object.room);
                }
                return message;
            };

            /**
             * Creates a plain object from a JoinRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.mgr.JoinRes
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
             * @memberof proto.mgr.JoinRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            JoinRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return JoinRes;
        })();

        room.LeaveNot = (function() {

            /**
             * Properties of a LeaveNot.
             * @memberof proto.mgr
             * @interface ILeaveNot
             * @property {string|null} [uid] LeaveNot uid
             */

            /**
             * Constructs a new LeaveNot.
             * @memberof proto.mgr
             * @classdesc Represents a LeaveNot.
             * @implements ILeaveNot
             * @constructor
             * @param {proto.room.ILeaveNot=} [properties] Properties to set
             */
            function LeaveNot(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LeaveNot uid.
             * @member {string} uid
             * @memberof proto.mgr.LeaveNot
             * @instance
             */
            LeaveNot.prototype.uid = "";

            /**
             * Creates a new LeaveNot instance using the specified properties.
             * @function create
             * @memberof proto.mgr.LeaveNot
             * @static
             * @param {proto.room.ILeaveNot=} [properties] Properties to set
             * @returns {proto.room.LeaveNot} LeaveNot instance
             */
            LeaveNot.create = function create(properties) {
                return new LeaveNot(properties);
            };

            /**
             * Encodes the specified LeaveNot message. Does not implicitly {@link proto.room.LeaveNot.verify|verify} messages.
             * @function encode
             * @memberof proto.mgr.LeaveNot
             * @static
             * @param {proto.room.ILeaveNot} message LeaveNot message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LeaveNot.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
                return writer;
            };

            /**
             * Encodes the specified LeaveNot message, length delimited. Does not implicitly {@link proto.room.LeaveNot.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.mgr.LeaveNot
             * @static
             * @param {proto.room.ILeaveNot} message LeaveNot message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LeaveNot.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a LeaveNot message from the specified reader or buffer.
             * @function decode
             * @memberof proto.mgr.LeaveNot
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.room.LeaveNot} LeaveNot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LeaveNot.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.room.LeaveNot();
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
             * Decodes a LeaveNot message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.mgr.LeaveNot
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.room.LeaveNot} LeaveNot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LeaveNot.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a LeaveNot message.
             * @function verify
             * @memberof proto.mgr.LeaveNot
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LeaveNot.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uid != null && message.hasOwnProperty("uid"))
                    if (!$util.isString(message.uid))
                        return "uid: string expected";
                return null;
            };

            /**
             * Creates a LeaveNot message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.mgr.LeaveNot
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.room.LeaveNot} LeaveNot
             */
            LeaveNot.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.room.LeaveNot)
                    return object;
                var message = new $root.proto.room.LeaveNot();
                if (object.uid != null)
                    message.uid = String(object.uid);
                return message;
            };

            /**
             * Creates a plain object from a LeaveNot message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.mgr.LeaveNot
             * @static
             * @param {proto.room.LeaveNot} message LeaveNot
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LeaveNot.toObject = function toObject(message, options) {
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
             * Converts this LeaveNot to JSON.
             * @function toJSON
             * @memberof proto.mgr.LeaveNot
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LeaveNot.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return LeaveNot;
        })();

        room.ChatReq = (function() {

            /**
             * Properties of a ChatReq.
             * @memberof proto.mgr
             * @interface IChatReq
             * @property {string|null} [content] ChatReq content
             */

            /**
             * Constructs a new ChatReq.
             * @memberof proto.mgr
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
             * @memberof proto.mgr.ChatReq
             * @instance
             */
            ChatReq.prototype.content = "";

            /**
             * Creates a new ChatReq instance using the specified properties.
             * @function create
             * @memberof proto.mgr.ChatReq
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
             * @memberof proto.mgr.ChatReq
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
             * @memberof proto.mgr.ChatReq
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
             * @memberof proto.mgr.ChatReq
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
             * @memberof proto.mgr.ChatReq
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
             * @memberof proto.mgr.ChatReq
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
             * @memberof proto.mgr.ChatReq
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
             * @memberof proto.mgr.ChatReq
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
             * @memberof proto.mgr.ChatReq
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
             * @memberof proto.mgr
             * @interface IChatNot
             * @property {string|null} [uid] ChatNot uid
             * @property {string|null} [content] ChatNot content
             */

            /**
             * Constructs a new ChatNot.
             * @memberof proto.mgr
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
             * @memberof proto.mgr.ChatNot
             * @instance
             */
            ChatNot.prototype.uid = "";

            /**
             * ChatNot content.
             * @member {string} content
             * @memberof proto.mgr.ChatNot
             * @instance
             */
            ChatNot.prototype.content = "";

            /**
             * Creates a new ChatNot instance using the specified properties.
             * @function create
             * @memberof proto.mgr.ChatNot
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
             * @memberof proto.mgr.ChatNot
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
             * @memberof proto.mgr.ChatNot
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
             * @memberof proto.mgr.ChatNot
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
             * @memberof proto.mgr.ChatNot
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
             * @memberof proto.mgr.ChatNot
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
             * @memberof proto.mgr.ChatNot
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
             * @memberof proto.mgr.ChatNot
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
             * @memberof proto.mgr.ChatNot
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
             * @memberof proto.mgr
             * @interface IUserAction
             * @property {number|null} [action] UserAction action
             * @property {string|null} [uid] UserAction uid
             */

            /**
             * Constructs a new UserAction.
             * @memberof proto.mgr
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
             * @memberof proto.mgr.UserAction
             * @instance
             */
            UserAction.prototype.action = 0;

            /**
             * UserAction uid.
             * @member {string} uid
             * @memberof proto.mgr.UserAction
             * @instance
             */
            UserAction.prototype.uid = "";

            /**
             * Creates a new UserAction instance using the specified properties.
             * @function create
             * @memberof proto.mgr.UserAction
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
             * @memberof proto.mgr.UserAction
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
             * @memberof proto.mgr.UserAction
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
             * @memberof proto.mgr.UserAction
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
             * @memberof proto.mgr.UserAction
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
             * @memberof proto.mgr.UserAction
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
             * @memberof proto.mgr.UserAction
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
             * @memberof proto.mgr.UserAction
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
             * @memberof proto.mgr.UserAction
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
             * @memberof proto.mgr.CreateRoomReq
             * @instance
             */
            CreateRoomReq.prototype.name = "";

            /**
             * Creates a new CreateRoomReq instance using the specified properties.
             * @function create
             * @memberof proto.mgr.CreateRoomReq
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
             * @memberof proto.mgr.CreateRoomReq
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
             * @memberof proto.mgr.CreateRoomReq
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
             * @memberof proto.mgr.CreateRoomReq
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
             * @memberof proto.mgr.CreateRoomReq
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
             * @memberof proto.mgr.CreateRoomReq
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
             * @memberof proto.mgr.CreateRoomReq
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
             * @memberof proto.mgr
             * @interface ICreateRoomRes
             * @property {string|null} [code] CreateRoomRes code
             * @property {proto.room.IRoom|null} [mgr] CreateRoomRes mgr
             * @property {string|null} [serverId] CreateRoomRes serverId
             */

            /**
             * Constructs a new CreateRoomRes.
             * @memberof proto.mgr
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
             * @memberof proto.mgr.CreateRoomRes
             * @instance
             */
            CreateRoomRes.prototype.code = "";

            /**
             * CreateRoomRes mgr.
             * @member {proto.room.IRoom|null|undefined} mgr
             * @memberof proto.mgr.CreateRoomRes
             * @instance
             */
            CreateRoomRes.prototype.room = null;

            /**
             * CreateRoomRes serverId.
             * @member {string} serverId
             * @memberof proto.mgr.CreateRoomRes
             * @instance
             */
            CreateRoomRes.prototype.serverId = "";

            /**
             * Creates a new CreateRoomRes instance using the specified properties.
             * @function create
             * @memberof proto.mgr.CreateRoomRes
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
             * @memberof proto.mgr.CreateRoomRes
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
             * @memberof proto.mgr.CreateRoomRes
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
             * @memberof proto.mgr.CreateRoomRes
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
             * @memberof proto.mgr.CreateRoomRes
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
                if (message.room != null && message.hasOwnProperty("room")) {
                    var error = $root.proto.room.Room.verify(message.room);
                    if (error)
                        return "mgr." + error;
                }
                if (message.serverId != null && message.hasOwnProperty("serverId"))
                    if (!$util.isString(message.serverId))
                        return "serverId: string expected";
                return null;
            };

            /**
             * Creates a CreateRoomRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.mgr.CreateRoomRes
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
                        throw TypeError(".proto.mgr.CreateRoomRes.mgr: object expected");
                    message.room = $root.proto.room.Room.fromObject(object.room);
                }
                if (object.serverId != null)
                    message.serverId = String(object.serverId);
                return message;
            };

            /**
             * Creates a plain object from a CreateRoomRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.mgr.CreateRoomRes
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
             * @memberof proto.mgr.CreateRoomRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CreateRoomRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return CreateRoomRes;
        })();

        room.CloseRoomNot = (function() {

            /**
             * Properties of a CloseRoomNot.
             * @memberof proto.mgr
             * @interface ICloseRoomNot
             * @property {string|null} [rid] CloseRoomNot rid
             */

            /**
             * Constructs a new CloseRoomNot.
             * @memberof proto.mgr
             * @classdesc Represents a CloseRoomNot.
             * @implements ICloseRoomNot
             * @constructor
             * @param {proto.room.ICloseRoomNot=} [properties] Properties to set
             */
            function CloseRoomNot(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CloseRoomNot rid.
             * @member {string} rid
             * @memberof proto.mgr.CloseRoomNot
             * @instance
             */
            CloseRoomNot.prototype.rid = "";

            /**
             * Creates a new CloseRoomNot instance using the specified properties.
             * @function create
             * @memberof proto.mgr.CloseRoomNot
             * @static
             * @param {proto.room.ICloseRoomNot=} [properties] Properties to set
             * @returns {proto.room.CloseRoomNot} CloseRoomNot instance
             */
            CloseRoomNot.create = function create(properties) {
                return new CloseRoomNot(properties);
            };

            /**
             * Encodes the specified CloseRoomNot message. Does not implicitly {@link proto.room.CloseRoomNot.verify|verify} messages.
             * @function encode
             * @memberof proto.mgr.CloseRoomNot
             * @static
             * @param {proto.room.ICloseRoomNot} message CloseRoomNot message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CloseRoomNot.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.rid != null && Object.hasOwnProperty.call(message, "rid"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.rid);
                return writer;
            };

            /**
             * Encodes the specified CloseRoomNot message, length delimited. Does not implicitly {@link proto.room.CloseRoomNot.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.mgr.CloseRoomNot
             * @static
             * @param {proto.room.ICloseRoomNot} message CloseRoomNot message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CloseRoomNot.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CloseRoomNot message from the specified reader or buffer.
             * @function decode
             * @memberof proto.mgr.CloseRoomNot
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.room.CloseRoomNot} CloseRoomNot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CloseRoomNot.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.room.CloseRoomNot();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.rid = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CloseRoomNot message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.mgr.CloseRoomNot
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.room.CloseRoomNot} CloseRoomNot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CloseRoomNot.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CloseRoomNot message.
             * @function verify
             * @memberof proto.mgr.CloseRoomNot
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CloseRoomNot.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.rid != null && message.hasOwnProperty("rid"))
                    if (!$util.isString(message.rid))
                        return "rid: string expected";
                return null;
            };

            /**
             * Creates a CloseRoomNot message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.mgr.CloseRoomNot
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.room.CloseRoomNot} CloseRoomNot
             */
            CloseRoomNot.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.room.CloseRoomNot)
                    return object;
                var message = new $root.proto.room.CloseRoomNot();
                if (object.rid != null)
                    message.rid = String(object.rid);
                return message;
            };

            /**
             * Creates a plain object from a CloseRoomNot message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.mgr.CloseRoomNot
             * @static
             * @param {proto.room.CloseRoomNot} message CloseRoomNot
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CloseRoomNot.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.rid = "";
                if (message.rid != null && message.hasOwnProperty("rid"))
                    object.rid = message.rid;
                return object;
            };

            /**
             * Converts this CloseRoomNot to JSON.
             * @function toJSON
             * @memberof proto.mgr.CloseRoomNot
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CloseRoomNot.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return CloseRoomNot;
        })();

        return room;
    })();

    proto.mj = (function() {

        /**
         * Namespace mj.
         * @memberof proto
         * @namespace
         */
        var mj = {};

        mj.BeginGameNot = (function() {

            /**
             * Properties of a BeginGameNot.
             * @memberof proto.mj
             * @interface IBeginGameNot
             */

            /**
             * Constructs a new BeginGameNot.
             * @memberof proto.mj
             * @classdesc Represents a BeginGameNot.
             * @implements IBeginGameNot
             * @constructor
             * @param {proto.mj.IBeginGameNot=} [properties] Properties to set
             */
            function BeginGameNot(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new BeginGameNot instance using the specified properties.
             * @function create
             * @memberof proto.mj.BeginGameNot
             * @static
             * @param {proto.mj.IBeginGameNot=} [properties] Properties to set
             * @returns {proto.mj.BeginGameNot} BeginGameNot instance
             */
            BeginGameNot.create = function create(properties) {
                return new BeginGameNot(properties);
            };

            /**
             * Encodes the specified BeginGameNot message. Does not implicitly {@link proto.mj.BeginGameNot.verify|verify} messages.
             * @function encode
             * @memberof proto.mj.BeginGameNot
             * @static
             * @param {proto.mj.IBeginGameNot} message BeginGameNot message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BeginGameNot.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified BeginGameNot message, length delimited. Does not implicitly {@link proto.mj.BeginGameNot.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.mj.BeginGameNot
             * @static
             * @param {proto.mj.IBeginGameNot} message BeginGameNot message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BeginGameNot.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BeginGameNot message from the specified reader or buffer.
             * @function decode
             * @memberof proto.mj.BeginGameNot
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.mj.BeginGameNot} BeginGameNot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BeginGameNot.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.mj.BeginGameNot();
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
             * Decodes a BeginGameNot message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.mj.BeginGameNot
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.mj.BeginGameNot} BeginGameNot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BeginGameNot.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BeginGameNot message.
             * @function verify
             * @memberof proto.mj.BeginGameNot
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BeginGameNot.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a BeginGameNot message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.mj.BeginGameNot
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.mj.BeginGameNot} BeginGameNot
             */
            BeginGameNot.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.mj.BeginGameNot)
                    return object;
                return new $root.proto.mj.BeginGameNot();
            };

            /**
             * Creates a plain object from a BeginGameNot message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.mj.BeginGameNot
             * @static
             * @param {proto.mj.BeginGameNot} message BeginGameNot
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BeginGameNot.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this BeginGameNot to JSON.
             * @function toJSON
             * @memberof proto.mj.BeginGameNot
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BeginGameNot.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return BeginGameNot;
        })();

        mj.SetDealerNot = (function() {

            /**
             * Properties of a SetDealerNot.
             * @memberof proto.mj
             * @interface ISetDealerNot
             * @property {Array.<number>|null} [dices] SetDealerNot dices
             * @property {string|null} [uid] SetDealerNot uid
             */

            /**
             * Constructs a new SetDealerNot.
             * @memberof proto.mj
             * @classdesc Represents a SetDealerNot.
             * @implements ISetDealerNot
             * @constructor
             * @param {proto.mj.ISetDealerNot=} [properties] Properties to set
             */
            function SetDealerNot(properties) {
                this.dices = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SetDealerNot dices.
             * @member {Array.<number>} dices
             * @memberof proto.mj.SetDealerNot
             * @instance
             */
            SetDealerNot.prototype.dices = $util.emptyArray;

            /**
             * SetDealerNot uid.
             * @member {string} uid
             * @memberof proto.mj.SetDealerNot
             * @instance
             */
            SetDealerNot.prototype.uid = "";

            /**
             * Creates a new SetDealerNot instance using the specified properties.
             * @function create
             * @memberof proto.mj.SetDealerNot
             * @static
             * @param {proto.mj.ISetDealerNot=} [properties] Properties to set
             * @returns {proto.mj.SetDealerNot} SetDealerNot instance
             */
            SetDealerNot.create = function create(properties) {
                return new SetDealerNot(properties);
            };

            /**
             * Encodes the specified SetDealerNot message. Does not implicitly {@link proto.mj.SetDealerNot.verify|verify} messages.
             * @function encode
             * @memberof proto.mj.SetDealerNot
             * @static
             * @param {proto.mj.ISetDealerNot} message SetDealerNot message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SetDealerNot.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.dices != null && message.dices.length) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork();
                    for (var i = 0; i < message.dices.length; ++i)
                        writer.int32(message.dices[i]);
                    writer.ldelim();
                }
                if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.uid);
                return writer;
            };

            /**
             * Encodes the specified SetDealerNot message, length delimited. Does not implicitly {@link proto.mj.SetDealerNot.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.mj.SetDealerNot
             * @static
             * @param {proto.mj.ISetDealerNot} message SetDealerNot message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SetDealerNot.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SetDealerNot message from the specified reader or buffer.
             * @function decode
             * @memberof proto.mj.SetDealerNot
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.mj.SetDealerNot} SetDealerNot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SetDealerNot.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.mj.SetDealerNot();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.dices && message.dices.length))
                            message.dices = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.dices.push(reader.int32());
                        } else
                            message.dices.push(reader.int32());
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
             * Decodes a SetDealerNot message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.mj.SetDealerNot
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.mj.SetDealerNot} SetDealerNot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SetDealerNot.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SetDealerNot message.
             * @function verify
             * @memberof proto.mj.SetDealerNot
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SetDealerNot.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.dices != null && message.hasOwnProperty("dices")) {
                    if (!Array.isArray(message.dices))
                        return "dices: array expected";
                    for (var i = 0; i < message.dices.length; ++i)
                        if (!$util.isInteger(message.dices[i]))
                            return "dices: integer[] expected";
                }
                if (message.uid != null && message.hasOwnProperty("uid"))
                    if (!$util.isString(message.uid))
                        return "uid: string expected";
                return null;
            };

            /**
             * Creates a SetDealerNot message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.mj.SetDealerNot
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.mj.SetDealerNot} SetDealerNot
             */
            SetDealerNot.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.mj.SetDealerNot)
                    return object;
                var message = new $root.proto.mj.SetDealerNot();
                if (object.dices) {
                    if (!Array.isArray(object.dices))
                        throw TypeError(".proto.mj.SetDealerNot.dices: array expected");
                    message.dices = [];
                    for (var i = 0; i < object.dices.length; ++i)
                        message.dices[i] = object.dices[i] | 0;
                }
                if (object.uid != null)
                    message.uid = String(object.uid);
                return message;
            };

            /**
             * Creates a plain object from a SetDealerNot message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.mj.SetDealerNot
             * @static
             * @param {proto.mj.SetDealerNot} message SetDealerNot
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SetDealerNot.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.dices = [];
                if (options.defaults)
                    object.uid = "";
                if (message.dices && message.dices.length) {
                    object.dices = [];
                    for (var j = 0; j < message.dices.length; ++j)
                        object.dices[j] = message.dices[j];
                }
                if (message.uid != null && message.hasOwnProperty("uid"))
                    object.uid = message.uid;
                return object;
            };

            /**
             * Converts this SetDealerNot to JSON.
             * @function toJSON
             * @memberof proto.mj.SetDealerNot
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SetDealerNot.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return SetDealerNot;
        })();

        mj.HandCardsNot = (function() {

            /**
             * Properties of a HandCardsNot.
             * @memberof proto.mj
             * @interface IHandCardsNot
             * @property {Array.<number>|null} [handCards] HandCardsNot handCards
             */

            /**
             * Constructs a new HandCardsNot.
             * @memberof proto.mj
             * @classdesc Represents a HandCardsNot.
             * @implements IHandCardsNot
             * @constructor
             * @param {proto.mj.IHandCardsNot=} [properties] Properties to set
             */
            function HandCardsNot(properties) {
                this.handCards = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * HandCardsNot handCards.
             * @member {Array.<number>} handCards
             * @memberof proto.mj.HandCardsNot
             * @instance
             */
            HandCardsNot.prototype.handCards = $util.emptyArray;

            /**
             * Creates a new HandCardsNot instance using the specified properties.
             * @function create
             * @memberof proto.mj.HandCardsNot
             * @static
             * @param {proto.mj.IHandCardsNot=} [properties] Properties to set
             * @returns {proto.mj.HandCardsNot} HandCardsNot instance
             */
            HandCardsNot.create = function create(properties) {
                return new HandCardsNot(properties);
            };

            /**
             * Encodes the specified HandCardsNot message. Does not implicitly {@link proto.mj.HandCardsNot.verify|verify} messages.
             * @function encode
             * @memberof proto.mj.HandCardsNot
             * @static
             * @param {proto.mj.IHandCardsNot} message HandCardsNot message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HandCardsNot.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.handCards != null && message.handCards.length) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork();
                    for (var i = 0; i < message.handCards.length; ++i)
                        writer.int32(message.handCards[i]);
                    writer.ldelim();
                }
                return writer;
            };

            /**
             * Encodes the specified HandCardsNot message, length delimited. Does not implicitly {@link proto.mj.HandCardsNot.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.mj.HandCardsNot
             * @static
             * @param {proto.mj.IHandCardsNot} message HandCardsNot message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HandCardsNot.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a HandCardsNot message from the specified reader or buffer.
             * @function decode
             * @memberof proto.mj.HandCardsNot
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.mj.HandCardsNot} HandCardsNot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HandCardsNot.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.mj.HandCardsNot();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.handCards && message.handCards.length))
                            message.handCards = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.handCards.push(reader.int32());
                        } else
                            message.handCards.push(reader.int32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a HandCardsNot message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.mj.HandCardsNot
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.mj.HandCardsNot} HandCardsNot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HandCardsNot.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a HandCardsNot message.
             * @function verify
             * @memberof proto.mj.HandCardsNot
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            HandCardsNot.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.handCards != null && message.hasOwnProperty("handCards")) {
                    if (!Array.isArray(message.handCards))
                        return "handCards: array expected";
                    for (var i = 0; i < message.handCards.length; ++i)
                        if (!$util.isInteger(message.handCards[i]))
                            return "handCards: integer[] expected";
                }
                return null;
            };

            /**
             * Creates a HandCardsNot message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.mj.HandCardsNot
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.mj.HandCardsNot} HandCardsNot
             */
            HandCardsNot.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.mj.HandCardsNot)
                    return object;
                var message = new $root.proto.mj.HandCardsNot();
                if (object.handCards) {
                    if (!Array.isArray(object.handCards))
                        throw TypeError(".proto.mj.HandCardsNot.handCards: array expected");
                    message.handCards = [];
                    for (var i = 0; i < object.handCards.length; ++i)
                        message.handCards[i] = object.handCards[i] | 0;
                }
                return message;
            };

            /**
             * Creates a plain object from a HandCardsNot message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.mj.HandCardsNot
             * @static
             * @param {proto.mj.HandCardsNot} message HandCardsNot
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            HandCardsNot.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.handCards = [];
                if (message.handCards && message.handCards.length) {
                    object.handCards = [];
                    for (var j = 0; j < message.handCards.length; ++j)
                        object.handCards[j] = message.handCards[j];
                }
                return object;
            };

            /**
             * Converts this HandCardsNot to JSON.
             * @function toJSON
             * @memberof proto.mj.HandCardsNot
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            HandCardsNot.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return HandCardsNot;
        })();

        mj.OperateReq = (function() {

            /**
             * Properties of an OperateReq.
             * @memberof proto.mj
             * @interface IOperateReq
             * @property {Array.<number>|null} [opCodes] OperateReq opCodes
             */

            /**
             * Constructs a new OperateReq.
             * @memberof proto.mj
             * @classdesc Represents an OperateReq.
             * @implements IOperateReq
             * @constructor
             * @param {proto.mj.IOperateReq=} [properties] Properties to set
             */
            function OperateReq(properties) {
                this.opCodes = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OperateReq opCodes.
             * @member {Array.<number>} opCodes
             * @memberof proto.mj.OperateReq
             * @instance
             */
            OperateReq.prototype.opCodes = $util.emptyArray;

            /**
             * Creates a new OperateReq instance using the specified properties.
             * @function create
             * @memberof proto.mj.OperateReq
             * @static
             * @param {proto.mj.IOperateReq=} [properties] Properties to set
             * @returns {proto.mj.OperateReq} OperateReq instance
             */
            OperateReq.create = function create(properties) {
                return new OperateReq(properties);
            };

            /**
             * Encodes the specified OperateReq message. Does not implicitly {@link proto.mj.OperateReq.verify|verify} messages.
             * @function encode
             * @memberof proto.mj.OperateReq
             * @static
             * @param {proto.mj.IOperateReq} message OperateReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OperateReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.opCodes != null && message.opCodes.length) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork();
                    for (var i = 0; i < message.opCodes.length; ++i)
                        writer.int32(message.opCodes[i]);
                    writer.ldelim();
                }
                return writer;
            };

            /**
             * Encodes the specified OperateReq message, length delimited. Does not implicitly {@link proto.mj.OperateReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.mj.OperateReq
             * @static
             * @param {proto.mj.IOperateReq} message OperateReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OperateReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OperateReq message from the specified reader or buffer.
             * @function decode
             * @memberof proto.mj.OperateReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.mj.OperateReq} OperateReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OperateReq.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.mj.OperateReq();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.opCodes && message.opCodes.length))
                            message.opCodes = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.opCodes.push(reader.int32());
                        } else
                            message.opCodes.push(reader.int32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an OperateReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.mj.OperateReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.mj.OperateReq} OperateReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OperateReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OperateReq message.
             * @function verify
             * @memberof proto.mj.OperateReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OperateReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.opCodes != null && message.hasOwnProperty("opCodes")) {
                    if (!Array.isArray(message.opCodes))
                        return "opCodes: array expected";
                    for (var i = 0; i < message.opCodes.length; ++i)
                        if (!$util.isInteger(message.opCodes[i]))
                            return "opCodes: integer[] expected";
                }
                return null;
            };

            /**
             * Creates an OperateReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.mj.OperateReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.mj.OperateReq} OperateReq
             */
            OperateReq.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.mj.OperateReq)
                    return object;
                var message = new $root.proto.mj.OperateReq();
                if (object.opCodes) {
                    if (!Array.isArray(object.opCodes))
                        throw TypeError(".proto.mj.OperateReq.opCodes: array expected");
                    message.opCodes = [];
                    for (var i = 0; i < object.opCodes.length; ++i)
                        message.opCodes[i] = object.opCodes[i] | 0;
                }
                return message;
            };

            /**
             * Creates a plain object from an OperateReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.mj.OperateReq
             * @static
             * @param {proto.mj.OperateReq} message OperateReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OperateReq.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.opCodes = [];
                if (message.opCodes && message.opCodes.length) {
                    object.opCodes = [];
                    for (var j = 0; j < message.opCodes.length; ++j)
                        object.opCodes[j] = message.opCodes[j];
                }
                return object;
            };

            /**
             * Converts this OperateReq to JSON.
             * @function toJSON
             * @memberof proto.mj.OperateReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OperateReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return OperateReq;
        })();

        mj.OperateRes = (function() {

            /**
             * Properties of an OperateRes.
             * @memberof proto.mj
             * @interface IOperateRes
             * @property {number|null} [opCode] OperateRes opCode
             * @property {Array.<number>|null} [cards] OperateRes cards
             */

            /**
             * Constructs a new OperateRes.
             * @memberof proto.mj
             * @classdesc Represents an OperateRes.
             * @implements IOperateRes
             * @constructor
             * @param {proto.mj.IOperateRes=} [properties] Properties to set
             */
            function OperateRes(properties) {
                this.cards = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OperateRes opCode.
             * @member {number} opCode
             * @memberof proto.mj.OperateRes
             * @instance
             */
            OperateRes.prototype.opCode = 0;

            /**
             * OperateRes cards.
             * @member {Array.<number>} cards
             * @memberof proto.mj.OperateRes
             * @instance
             */
            OperateRes.prototype.cards = $util.emptyArray;

            /**
             * Creates a new OperateRes instance using the specified properties.
             * @function create
             * @memberof proto.mj.OperateRes
             * @static
             * @param {proto.mj.IOperateRes=} [properties] Properties to set
             * @returns {proto.mj.OperateRes} OperateRes instance
             */
            OperateRes.create = function create(properties) {
                return new OperateRes(properties);
            };

            /**
             * Encodes the specified OperateRes message. Does not implicitly {@link proto.mj.OperateRes.verify|verify} messages.
             * @function encode
             * @memberof proto.mj.OperateRes
             * @static
             * @param {proto.mj.IOperateRes} message OperateRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OperateRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.opCode != null && Object.hasOwnProperty.call(message, "opCode"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.opCode);
                if (message.cards != null && message.cards.length) {
                    writer.uint32(/* id 2, wireType 2 =*/18).fork();
                    for (var i = 0; i < message.cards.length; ++i)
                        writer.int32(message.cards[i]);
                    writer.ldelim();
                }
                return writer;
            };

            /**
             * Encodes the specified OperateRes message, length delimited. Does not implicitly {@link proto.mj.OperateRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.mj.OperateRes
             * @static
             * @param {proto.mj.IOperateRes} message OperateRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OperateRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OperateRes message from the specified reader or buffer.
             * @function decode
             * @memberof proto.mj.OperateRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.mj.OperateRes} OperateRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OperateRes.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.mj.OperateRes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.opCode = reader.int32();
                        break;
                    case 2:
                        if (!(message.cards && message.cards.length))
                            message.cards = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.cards.push(reader.int32());
                        } else
                            message.cards.push(reader.int32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an OperateRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.mj.OperateRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.mj.OperateRes} OperateRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OperateRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OperateRes message.
             * @function verify
             * @memberof proto.mj.OperateRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OperateRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.opCode != null && message.hasOwnProperty("opCode"))
                    if (!$util.isInteger(message.opCode))
                        return "opCode: integer expected";
                if (message.cards != null && message.hasOwnProperty("cards")) {
                    if (!Array.isArray(message.cards))
                        return "cards: array expected";
                    for (var i = 0; i < message.cards.length; ++i)
                        if (!$util.isInteger(message.cards[i]))
                            return "cards: integer[] expected";
                }
                return null;
            };

            /**
             * Creates an OperateRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.mj.OperateRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.mj.OperateRes} OperateRes
             */
            OperateRes.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.mj.OperateRes)
                    return object;
                var message = new $root.proto.mj.OperateRes();
                if (object.opCode != null)
                    message.opCode = object.opCode | 0;
                if (object.cards) {
                    if (!Array.isArray(object.cards))
                        throw TypeError(".proto.mj.OperateRes.cards: array expected");
                    message.cards = [];
                    for (var i = 0; i < object.cards.length; ++i)
                        message.cards[i] = object.cards[i] | 0;
                }
                return message;
            };

            /**
             * Creates a plain object from an OperateRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.mj.OperateRes
             * @static
             * @param {proto.mj.OperateRes} message OperateRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OperateRes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.cards = [];
                if (options.defaults)
                    object.opCode = 0;
                if (message.opCode != null && message.hasOwnProperty("opCode"))
                    object.opCode = message.opCode;
                if (message.cards && message.cards.length) {
                    object.cards = [];
                    for (var j = 0; j < message.cards.length; ++j)
                        object.cards[j] = message.cards[j];
                }
                return object;
            };

            /**
             * Converts this OperateRes to JSON.
             * @function toJSON
             * @memberof proto.mj.OperateRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OperateRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return OperateRes;
        })();

        mj.OperateNot = (function() {

            /**
             * Properties of an OperateNot.
             * @memberof proto.mj
             * @interface IOperateNot
             * @property {number|null} [chairId] OperateNot chairId
             * @property {number|null} [opCode] OperateNot opCode
             * @property {Array.<number>|null} [cards] OperateNot cards
             */

            /**
             * Constructs a new OperateNot.
             * @memberof proto.mj
             * @classdesc Represents an OperateNot.
             * @implements IOperateNot
             * @constructor
             * @param {proto.mj.IOperateNot=} [properties] Properties to set
             */
            function OperateNot(properties) {
                this.cards = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OperateNot chairId.
             * @member {number} chairId
             * @memberof proto.mj.OperateNot
             * @instance
             */
            OperateNot.prototype.chairId = 0;

            /**
             * OperateNot opCode.
             * @member {number} opCode
             * @memberof proto.mj.OperateNot
             * @instance
             */
            OperateNot.prototype.opCode = 0;

            /**
             * OperateNot cards.
             * @member {Array.<number>} cards
             * @memberof proto.mj.OperateNot
             * @instance
             */
            OperateNot.prototype.cards = $util.emptyArray;

            /**
             * Creates a new OperateNot instance using the specified properties.
             * @function create
             * @memberof proto.mj.OperateNot
             * @static
             * @param {proto.mj.IOperateNot=} [properties] Properties to set
             * @returns {proto.mj.OperateNot} OperateNot instance
             */
            OperateNot.create = function create(properties) {
                return new OperateNot(properties);
            };

            /**
             * Encodes the specified OperateNot message. Does not implicitly {@link proto.mj.OperateNot.verify|verify} messages.
             * @function encode
             * @memberof proto.mj.OperateNot
             * @static
             * @param {proto.mj.IOperateNot} message OperateNot message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OperateNot.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.chairId != null && Object.hasOwnProperty.call(message, "chairId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.chairId);
                if (message.opCode != null && Object.hasOwnProperty.call(message, "opCode"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.opCode);
                if (message.cards != null && message.cards.length) {
                    writer.uint32(/* id 3, wireType 2 =*/26).fork();
                    for (var i = 0; i < message.cards.length; ++i)
                        writer.int32(message.cards[i]);
                    writer.ldelim();
                }
                return writer;
            };

            /**
             * Encodes the specified OperateNot message, length delimited. Does not implicitly {@link proto.mj.OperateNot.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.mj.OperateNot
             * @static
             * @param {proto.mj.IOperateNot} message OperateNot message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OperateNot.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OperateNot message from the specified reader or buffer.
             * @function decode
             * @memberof proto.mj.OperateNot
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.mj.OperateNot} OperateNot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OperateNot.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.mj.OperateNot();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.chairId = reader.int32();
                        break;
                    case 2:
                        message.opCode = reader.int32();
                        break;
                    case 3:
                        if (!(message.cards && message.cards.length))
                            message.cards = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.cards.push(reader.int32());
                        } else
                            message.cards.push(reader.int32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an OperateNot message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.mj.OperateNot
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.mj.OperateNot} OperateNot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OperateNot.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OperateNot message.
             * @function verify
             * @memberof proto.mj.OperateNot
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OperateNot.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.chairId != null && message.hasOwnProperty("chairId"))
                    if (!$util.isInteger(message.chairId))
                        return "chairId: integer expected";
                if (message.opCode != null && message.hasOwnProperty("opCode"))
                    if (!$util.isInteger(message.opCode))
                        return "opCode: integer expected";
                if (message.cards != null && message.hasOwnProperty("cards")) {
                    if (!Array.isArray(message.cards))
                        return "cards: array expected";
                    for (var i = 0; i < message.cards.length; ++i)
                        if (!$util.isInteger(message.cards[i]))
                            return "cards: integer[] expected";
                }
                return null;
            };

            /**
             * Creates an OperateNot message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.mj.OperateNot
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.mj.OperateNot} OperateNot
             */
            OperateNot.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.mj.OperateNot)
                    return object;
                var message = new $root.proto.mj.OperateNot();
                if (object.chairId != null)
                    message.chairId = object.chairId | 0;
                if (object.opCode != null)
                    message.opCode = object.opCode | 0;
                if (object.cards) {
                    if (!Array.isArray(object.cards))
                        throw TypeError(".proto.mj.OperateNot.cards: array expected");
                    message.cards = [];
                    for (var i = 0; i < object.cards.length; ++i)
                        message.cards[i] = object.cards[i] | 0;
                }
                return message;
            };

            /**
             * Creates a plain object from an OperateNot message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.mj.OperateNot
             * @static
             * @param {proto.mj.OperateNot} message OperateNot
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OperateNot.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.cards = [];
                if (options.defaults) {
                    object.chairId = 0;
                    object.opCode = 0;
                }
                if (message.chairId != null && message.hasOwnProperty("chairId"))
                    object.chairId = message.chairId;
                if (message.opCode != null && message.hasOwnProperty("opCode"))
                    object.opCode = message.opCode;
                if (message.cards && message.cards.length) {
                    object.cards = [];
                    for (var j = 0; j < message.cards.length; ++j)
                        object.cards[j] = message.cards[j];
                }
                return object;
            };

            /**
             * Converts this OperateNot to JSON.
             * @function toJSON
             * @memberof proto.mj.OperateNot
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OperateNot.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return OperateNot;
        })();

        mj.ReadyReq = (function() {

            /**
             * Properties of a ReadyReq.
             * @memberof proto.mj
             * @interface IReadyReq
             */

            /**
             * Constructs a new ReadyReq.
             * @memberof proto.mj
             * @classdesc Represents a ReadyReq.
             * @implements IReadyReq
             * @constructor
             * @param {proto.mj.IReadyReq=} [properties] Properties to set
             */
            function ReadyReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new ReadyReq instance using the specified properties.
             * @function create
             * @memberof proto.mj.ReadyReq
             * @static
             * @param {proto.mj.IReadyReq=} [properties] Properties to set
             * @returns {proto.mj.ReadyReq} ReadyReq instance
             */
            ReadyReq.create = function create(properties) {
                return new ReadyReq(properties);
            };

            /**
             * Encodes the specified ReadyReq message. Does not implicitly {@link proto.mj.ReadyReq.verify|verify} messages.
             * @function encode
             * @memberof proto.mj.ReadyReq
             * @static
             * @param {proto.mj.IReadyReq} message ReadyReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReadyReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified ReadyReq message, length delimited. Does not implicitly {@link proto.mj.ReadyReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.mj.ReadyReq
             * @static
             * @param {proto.mj.IReadyReq} message ReadyReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReadyReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ReadyReq message from the specified reader or buffer.
             * @function decode
             * @memberof proto.mj.ReadyReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.mj.ReadyReq} ReadyReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReadyReq.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.mj.ReadyReq();
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
             * Decodes a ReadyReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.mj.ReadyReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.mj.ReadyReq} ReadyReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReadyReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ReadyReq message.
             * @function verify
             * @memberof proto.mj.ReadyReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ReadyReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a ReadyReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.mj.ReadyReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.mj.ReadyReq} ReadyReq
             */
            ReadyReq.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.mj.ReadyReq)
                    return object;
                return new $root.proto.mj.ReadyReq();
            };

            /**
             * Creates a plain object from a ReadyReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.mj.ReadyReq
             * @static
             * @param {proto.mj.ReadyReq} message ReadyReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ReadyReq.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this ReadyReq to JSON.
             * @function toJSON
             * @memberof proto.mj.ReadyReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ReadyReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ReadyReq;
        })();

        mj.ReadyNot = (function() {

            /**
             * Properties of a ReadyNot.
             * @memberof proto.mj
             * @interface IReadyNot
             * @property {string|null} [uid] ReadyNot uid
             */

            /**
             * Constructs a new ReadyNot.
             * @memberof proto.mj
             * @classdesc Represents a ReadyNot.
             * @implements IReadyNot
             * @constructor
             * @param {proto.mj.IReadyNot=} [properties] Properties to set
             */
            function ReadyNot(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ReadyNot uid.
             * @member {string} uid
             * @memberof proto.mj.ReadyNot
             * @instance
             */
            ReadyNot.prototype.uid = "";

            /**
             * Creates a new ReadyNot instance using the specified properties.
             * @function create
             * @memberof proto.mj.ReadyNot
             * @static
             * @param {proto.mj.IReadyNot=} [properties] Properties to set
             * @returns {proto.mj.ReadyNot} ReadyNot instance
             */
            ReadyNot.create = function create(properties) {
                return new ReadyNot(properties);
            };

            /**
             * Encodes the specified ReadyNot message. Does not implicitly {@link proto.mj.ReadyNot.verify|verify} messages.
             * @function encode
             * @memberof proto.mj.ReadyNot
             * @static
             * @param {proto.mj.IReadyNot} message ReadyNot message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReadyNot.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
                return writer;
            };

            /**
             * Encodes the specified ReadyNot message, length delimited. Does not implicitly {@link proto.mj.ReadyNot.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.mj.ReadyNot
             * @static
             * @param {proto.mj.IReadyNot} message ReadyNot message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReadyNot.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ReadyNot message from the specified reader or buffer.
             * @function decode
             * @memberof proto.mj.ReadyNot
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.mj.ReadyNot} ReadyNot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReadyNot.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.mj.ReadyNot();
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
             * Decodes a ReadyNot message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.mj.ReadyNot
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.mj.ReadyNot} ReadyNot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReadyNot.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ReadyNot message.
             * @function verify
             * @memberof proto.mj.ReadyNot
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ReadyNot.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uid != null && message.hasOwnProperty("uid"))
                    if (!$util.isString(message.uid))
                        return "uid: string expected";
                return null;
            };

            /**
             * Creates a ReadyNot message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.mj.ReadyNot
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.mj.ReadyNot} ReadyNot
             */
            ReadyNot.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.mj.ReadyNot)
                    return object;
                var message = new $root.proto.mj.ReadyNot();
                if (object.uid != null)
                    message.uid = String(object.uid);
                return message;
            };

            /**
             * Creates a plain object from a ReadyNot message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.mj.ReadyNot
             * @static
             * @param {proto.mj.ReadyNot} message ReadyNot
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ReadyNot.toObject = function toObject(message, options) {
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
             * Converts this ReadyNot to JSON.
             * @function toJSON
             * @memberof proto.mj.ReadyNot
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ReadyNot.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ReadyNot;
        })();

        return mj;
    })();

    return proto;
})();

module.exports = $root;
