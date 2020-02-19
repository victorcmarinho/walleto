"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Response = function () {
  function Response() {
    (0, _classCallCheck3.default)(this, Response);
  }

  (0, _createClass3.default)(Response, [{
    key: "Ok",
    value: function Ok(body, message) {
      return {
        statusCode: 200,
        data: body,
        message: message
      };
    }
  }, {
    key: "Created",
    value: function Created(body, message) {
      return {
        statusCode: 201,
        data: body,
        message: message
      };
    }
  }, {
    key: "Error",
    value: function Error(error) {
      return {
        statusCode: error.statusCode || 500,
        body: {
          error: error.message
        }
      };
    }
  }]);
  return Response;
}();

exports.default = new Response();
//# sourceMappingURL=response.js.map