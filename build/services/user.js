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

var _helpers = require('../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserService = function () {
  function UserService(userRepository) {
    (0, _classCallCheck3.default)(this, UserService);

    this.userRepository = userRepository;
  }

  (0, _createClass3.default)(UserService, [{
    key: 'login',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(email, password) {
        var existsUser;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if ((0, _helpers.EmailValidator)(email)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt('return', _helpers.Response.Error(mountErrorInvalidEmail()));

              case 2:
                _context.next = 4;
                return this.userRepository.login(email, password);

              case 4:
                existsUser = _context.sent;

                if (!(existsUser.length > 0)) {
                  _context.next = 9;
                  break;
                }

                return _context.abrupt('return', _helpers.Response.Created({ logado: true, user: existsUser }, 'Usuário logado com sucesso'));

              case 9:
                return _context.abrupt('return', _helpers.Response.Error(mountErrorWrongPassword()));

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function login(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return login;
    }()
  }, {
    key: 'sign',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(body) {
        var data, existsUser, result;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                data = mountBodyToModel(body);
                _context2.next = 4;
                return this.userRepository.findUserByEmail(data.email);

              case 4:
                existsUser = _context2.sent;

                if (!(existsUser.length > 0)) {
                  _context2.next = 7;
                  break;
                }

                return _context2.abrupt('return', _helpers.Response.Error(mountErrorExistsUser()));

              case 7:
                _context2.next = 9;
                return this.userRepository.sign(data);

              case 9:
                result = _context2.sent;
                return _context2.abrupt('return', _helpers.Response.Created(existsUser, 'Usuário cadastrado com sucesso'));

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2['catch'](0);

                console.error('[UserService - sign] ' + _context2.t0.message);
                return _context2.abrupt('return', _helpers.Response.Error(_context2.t0));

              case 17:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 13]]);
      }));

      function sign(_x3) {
        return _ref2.apply(this, arguments);
      }

      return sign;
    }()
  }, {
    key: 'addBankCard',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(body) {
        var data, existsUser, existsCard, result;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                data = mountBodyToModelBankCard(body);
                _context3.next = 4;
                return this.userRepository.findUserById(body.id);

              case 4:
                existsUser = _context3.sent;

                if (!(existsUser.length > 0)) {
                  _context3.next = 16;
                  break;
                }

                existsCard = bankCardExists(existsUser.bankCards, data.cardNumber);

                if (!existsCard) {
                  _context3.next = 9;
                  break;
                }

                return _context3.abrupt('return', _helpers.Response.Error(mountErrorExistsCard()));

              case 9:

                existsUser.bankCards.push(data);
                _context3.next = 12;
                return this.userRepository.addBankCard(existsUser, body.id);

              case 12:
                result = _context3.sent;
                return _context3.abrupt('return', _helpers.Response.Created(result, 'Cartão cadastrado com sucesso'));

              case 16:
                return _context3.abrupt('return', _helpers.Response.Error(mountErrorNotExistsUser()));

              case 17:
                _context3.next = 23;
                break;

              case 19:
                _context3.prev = 19;
                _context3.t0 = _context3['catch'](0);

                console.error('[UserService - addBankCard] ' + _context3.t0.message);
                return _context3.abrupt('return', _helpers.Response.Error(_context3.t0));

              case 23:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 19]]);
      }));

      function addBankCard(_x4) {
        return _ref3.apply(this, arguments);
      }

      return addBankCard;
    }()
  }, {
    key: 'deleteBankCard',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(user, id) {
        var existsUser, result;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return this.userRepository.findUserById(user);

              case 3:
                existsUser = _context4.sent;

                if (!(existsUser.length > 0)) {
                  _context4.next = 11;
                  break;
                }

                _context4.next = 7;
                return this.userRepository.deleteBankCard(id);

              case 7:
                result = _context4.sent;
                return _context4.abrupt('return', _helpers.Response.Created(result, 'Cartão deletado com sucesso'));

              case 11:
                return _context4.abrupt('return', _helpers.Response.Error(mountErrorNotExistsUser()));

              case 12:
                _context4.next = 18;
                break;

              case 14:
                _context4.prev = 14;
                _context4.t0 = _context4['catch'](0);

                console.error('[UserService - addBankCard] ' + _context4.t0.message);
                return _context4.abrupt('return', _helpers.Response.Error(_context4.t0));

              case 18:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 14]]);
      }));

      function deleteBankCard(_x5, _x6) {
        return _ref4.apply(this, arguments);
      }

      return deleteBankCard;
    }()
  }, {
    key: 'editDepositedCash',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(id, amount) {
        var existsUser, total, result;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return this.userRepository.findUserById(id);

              case 3:
                existsUser = _context5.sent;

                if (!(existsUser.length > 0)) {
                  _context5.next = 12;
                  break;
                }

                total = existsUser[0].depositedMoney + amount;
                _context5.next = 8;
                return this.userRepository.removeCash(id, total);

              case 8:
                result = _context5.sent;
                return _context5.abrupt('return', _helpers.Response.Created(result, 'Cartão deletado com sucesso'));

              case 12:
                return _context5.abrupt('return', _helpers.Response.Error(mountErrorNotExistsUser()));

              case 13:
                _context5.next = 18;
                break;

              case 15:
                _context5.prev = 15;
                _context5.t0 = _context5['catch'](0);

                console.error('[UserService - getDepositedCash] ' + _context5.t0.message);

              case 18:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 15]]);
      }));

      function editDepositedCash(_x7, _x8) {
        return _ref5.apply(this, arguments);
      }

      return editDepositedCash;
    }()
  }]);
  return UserService;
}();

function mountErrorExistsCard() {
  return {
    code: 400,
    message: 'Cartão já cadastrado'
  };
}

function mountErrorNotExistsUser() {
  return {
    code: 404,
    message: 'Usuário não cadastrado'
  };
}

function mountErrorExistsUser() {
  return {
    code: 400,
    message: 'Usuário já cadastrado'
  };
}

function mountErrorWrongPassword() {
  return {
    code: 400,
    message: 'Email/Senha inválida'
  };
}

function mountErrorInvalidEmail() {
  return {
    code: 400,
    message: 'Email inváldio'
  };
}

function bankCardExists(bankCards, cardNumber) {
  if (bankCards.length == 0) return false;

  bankCards.forEach(function (element) {
    if (element.cardNumber === cardNumber) return true;
  });
}

function mountBodyToModelBankCard(data) {
  return {
    card: new _mongoose2.default.mongo.ObjectId(),
    name: data.name,
    bankName: data.bankName,
    cardNumber: data.cardNumber,
    flag: data.flag,
    dueDate: data.dueDate,
    securityNumber: data.securityNumber
  };
}

function mountBodyToModel(data) {
  var result = {
    name: data.name,
    cpf: data.cpf,
    email: data.email,
    password: data.password,
    birthday: Date(data.birthday),
    motherName: data.motherName,
    image: data.image,
    address: {
      zipcode: data.address.zipcode,
      street: data.address.street,
      neighborhood: data.address.neighborhood,
      number: data.address.number,
      complement: data.address.complement
    }
  };

  if (!result.image || result.image == null || result.image == undefined) delete result.image;

  return result;
}

exports.default = UserService;
//# sourceMappingURL=user.js.map