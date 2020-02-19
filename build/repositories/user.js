'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _schemas = require('../schemas');

var _schemas2 = _interopRequireDefault(_schemas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ObjectId = _mongoose2.default.Types.ObjectId;

var UserRepository = function () {
  function UserRepository() {
    (0, _classCallCheck3.default)(this, UserRepository);

    this.schema = new _mongoose2.default.model('users');
  }

  (0, _createClass3.default)(UserRepository, [{
    key: 'sign',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(data) {
        var model, response;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                model = new this.schema(data);
                _context.next = 4;
                return this.schema.create(model);

              case 4:
                response = _context.sent;
                return _context.abrupt('return', response);

              case 8:
                _context.prev = 8;
                _context.t0 = _context['catch'](0);

                console.error('[UserRepository - sign] ' + _context.t0.message);
                return _context.abrupt('return', _context.t0);

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 8]]);
      }));

      function sign(_x) {
        return _ref.apply(this, arguments);
      }

      return sign;
    }()
  }, {
    key: 'login',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(email, password) {
        var response;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return this.schema.find({ email: email, password: password });

              case 3:
                response = _context2.sent;
                return _context2.abrupt('return', response);

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2['catch'](0);

                console.error('[UserRepository - login] ' + _context2.t0.message);
                return _context2.abrupt('return', _context2.t0);

              case 11:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 7]]);
      }));

      function login(_x2, _x3) {
        return _ref2.apply(this, arguments);
      }

      return login;
    }()
  }, {
    key: 'findUserByEmail',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(email) {
        var response;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return this.schema.find({ email: email });

              case 3:
                response = _context3.sent;
                return _context3.abrupt('return', response);

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3['catch'](0);

                console.error('[UserRepository - findUserByEmail] ' + _context3.t0.message);
                return _context3.abrupt('return', _context3.t0);

              case 11:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 7]]);
      }));

      function findUserByEmail(_x4) {
        return _ref3.apply(this, arguments);
      }

      return findUserByEmail;
    }()
  }, {
    key: 'findUserById',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(id) {
        var response;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return this.schema.find({ _id: ObjectId(id) });

              case 3:
                response = _context4.sent;
                return _context4.abrupt('return', response);

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4['catch'](0);

                console.error('[UserRepository - findUserByEmail] ' + _context4.t0.message);
                return _context4.abrupt('return', _context4.t0);

              case 11:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 7]]);
      }));

      function findUserById(_x5) {
        return _ref4.apply(this, arguments);
      }

      return findUserById;
    }()
  }, {
    key: 'findUserByCpf',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(cpf) {
        var response;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return this.schema.find({ cpf: cpf });

              case 3:
                response = _context5.sent;
                return _context5.abrupt('return', response);

              case 7:
                _context5.prev = 7;
                _context5.t0 = _context5['catch'](0);

                console.error('[UserRepository - findUserByEmail] ' + _context5.t0.message);
                return _context5.abrupt('return', _context5.t0);

              case 11:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 7]]);
      }));

      function findUserByCpf(_x6) {
        return _ref5.apply(this, arguments);
      }

      return findUserByCpf;
    }()
  }, {
    key: 'addBankCard',
    value: function () {
      var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(data, id) {
        var response;
        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return this.schema.update({ _id: ObjectId(id) }, data);

              case 3:
                response = _context6.sent;
                return _context6.abrupt('return', response);

              case 7:
                _context6.prev = 7;
                _context6.t0 = _context6['catch'](0);

                console.error('[UserRepository - addBankCard] ' + _context6.t0.message);
                return _context6.abrupt('return', _context6.t0);

              case 11:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this, [[0, 7]]);
      }));

      function addBankCard(_x7, _x8) {
        return _ref6.apply(this, arguments);
      }

      return addBankCard;
    }()
  }, {
    key: 'deleteBankCard',
    value: function () {
      var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(cardId, id) {
        var response;
        return _regenerator2.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.next = 3;
                return this.schema.update({ _id: id }, { '$pull': { cardId: cardId } });

              case 3:
                response = _context7.sent;
                return _context7.abrupt('return', response);

              case 7:
                _context7.prev = 7;
                _context7.t0 = _context7['catch'](0);

                console.error('[UserRepository - addBankCard] ' + _context7.t0.message);
                return _context7.abrupt('return', _context7.t0);

              case 11:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this, [[0, 7]]);
      }));

      function deleteBankCard(_x9, _x10) {
        return _ref7.apply(this, arguments);
      }

      return deleteBankCard;
    }()
  }, {
    key: 'removeCash',
    value: function () {
      var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(id, total) {
        var response;
        return _regenerator2.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                _context8.next = 3;
                return this.schema.update({ _id: id }, { depositedMoney: total });

              case 3:
                response = _context8.sent;
                return _context8.abrupt('return', response);

              case 7:
                _context8.prev = 7;
                _context8.t0 = _context8['catch'](0);

                console.error('[UserRepository - addBankCard] ' + _context8.t0.message);
                return _context8.abrupt('return', _context8.t0);

              case 11:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this, [[0, 7]]);
      }));

      function removeCash(_x11, _x12) {
        return _ref8.apply(this, arguments);
      }

      return removeCash;
    }()
  }]);
  return UserRepository;
}();

exports.default = UserRepository;
//# sourceMappingURL=user.js.map