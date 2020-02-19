'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Configs = function () {
  function Configs() {
    (0, _classCallCheck3.default)(this, Configs);
  }

  (0, _createClass3.default)(Configs, [{
    key: 'Env',
    get: function get() {
      return process.env.NODE_ENV || 'DEV';
    }
  }, {
    key: 'Port',
    get: function get() {
      return process.env.PORT || '3000';
    }
  }, {
    key: 'DatabaseUrl',
    get: function get() {
      return process.env.DB_URL || 'mongodb://localhost:27017';
    }
  }, {
    key: 'DatabaseName',
    get: function get() {
      return process.env.DB_NAME || 'walleto';
    }
  }, {
    key: 'UserCollection',
    get: function get() {
      return process.env.DB_GAME_COLLECTION || 'users';
    }
  }, {
    key: 'BillsCollection',
    get: function get() {
      return process.env.DB_GAME_COLLECTION || 'bills';
    }
  }, {
    key: 'PaymentsCollection',
    get: function get() {
      return process.env.DB_GAME_COLLECTION || 'payments';
    }
  }]);
  return Configs;
}();

exports.default = new Configs();
//# sourceMappingURL=index.js.map