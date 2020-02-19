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

var getUser = function () {
  var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(cnpj) {
    return _regenerator2.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return this.userRepository.findUserById(data.user);

          case 2:
            return _context6.abrupt('return', _context6.sent);

          case 3:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function getUser(_x11) {
    return _ref6.apply(this, arguments);
  };
}();

var _helpers = require('../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BillsService = function () {
  function BillsService(billsRepository, userRepository) {
    (0, _classCallCheck3.default)(this, BillsService);

    this.billsRepository = billsRepository;
    this.userRepository = userRepository;
  }

  (0, _createClass3.default)(BillsService, [{
    key: 'getAllBills',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(id, skip, limit) {
        var bills;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return this.billsRepository.getAllBills(id, skip, limit);

              case 3:
                bills = _context.sent;

                if (!(bills.length > 0)) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt('return', _helpers.Response.Created(bills, 'Contas cadastradas'));

              case 8:
                return _context.abrupt('return', _helpers.Response.Error(mountError()));

              case 9:
                _context.next = 15;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context['catch'](0);

                console.error('[BillsService - getAllBills] ' + _context.t0.message);
                return _context.abrupt('return', _helpers.Response.Error(_context.t0));

              case 15:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 11]]);
      }));

      function getAllBills(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      }

      return getAllBills;
    }()
  }, {
    key: 'getBillsByStatusOfPayment',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(user, paidOut, skip, limit) {
        var bills;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return this.billsRepository.getBillsByStatusOfPayment(user, paidOut, skip, limit);

              case 3:
                bills = _context2.sent;

                if (!(bills.length > 0)) {
                  _context2.next = 8;
                  break;
                }

                return _context2.abrupt('return', _helpers.Response.Created(bills, 'Contas cadastradas'));

              case 8:
                return _context2.abrupt('return', _helpers.Response.Error(mountError()));

              case 9:
                _context2.next = 15;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2['catch'](0);

                console.error('[BillsService - getBillsByStatusOfPayment] ' + _context2.t0.message);
                return _context2.abrupt('return', _helpers.Response.Error(_context2.t0));

              case 15:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 11]]);
      }));

      function getBillsByStatusOfPayment(_x4, _x5, _x6, _x7) {
        return _ref2.apply(this, arguments);
      }

      return getBillsByStatusOfPayment;
    }()
  }, {
    key: 'createUnpaidBill',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(body) {
        var _data, existsUser, _result;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _data = mountBillToUser(body);
                _context3.next = 4;
                return this.userRepository.findUserById(_data.user);

              case 4:
                existsUser = _context3.sent;

                if (!(existsUser.length == 0)) {
                  _context3.next = 7;
                  break;
                }

                return _context3.abrupt('return', _helpers.Response.Error(mountErrorExistsUser()));

              case 7:
                _context3.next = 9;
                return this.billsRepository.createUnpaidBill(_data);

              case 9:
                _result = _context3.sent;
                return _context3.abrupt('return', _helpers.Response.Created(_result, 'Conta cadastrada com sucesso'));

              case 13:
                _context3.prev = 13;
                _context3.t0 = _context3['catch'](0);

                console.error('[BillsService - createUnpaidBill] ' + _context3.t0.message);
                return _context3.abrupt('return', _helpers.Response.Error(_context3.t0));

              case 17:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 13]]);
      }));

      function createUnpaidBill(_x8) {
        return _ref3.apply(this, arguments);
      }

      return createUnpaidBill;
    }()
  }, {
    key: 'sendBillsToUser',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(body) {
        var _this = this;

        var sendedToUser;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                sendedToUser = {
                  sended: [],
                  notSended: []
                };

                if (!(body.length > 0)) {
                  _context5.next = 7;
                  break;
                }

                body.forEach(function () {
                  var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(bill) {
                    var existsUser, _bill;

                    return _regenerator2.default.wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            _context4.next = 2;
                            return getUser(bill.cnpj);

                          case 2:
                            existsUser = _context4.sent;

                            if (!(existsUser.length > 0)) {
                              _context4.next = 12;
                              break;
                            }

                            _bill = mountBillToUser(_bill, existsUser[0].id);
                            _context4.t0 = sendedToUser.sended;
                            _context4.next = 8;
                            return _this.billsRepository.addBillToUser(_bill);

                          case 8:
                            _context4.t1 = _context4.sent;

                            _context4.t0.push.call(_context4.t0, _context4.t1);

                            _context4.next = 13;
                            break;

                          case 12:
                            sendedToUser.sended.push(mountDontSendedBill(bill));

                          case 13:
                          case 'end':
                            return _context4.stop();
                        }
                      }
                    }, _callee4, _this);
                  }));

                  return function (_x10) {
                    return _ref5.apply(this, arguments);
                  };
                }());

                return _context5.abrupt('return', _helpers.Response.Created(sendedToUser, 'Contas enviadas aos seus respectivos'));

              case 7:
                return _context5.abrupt('return', _helpers.Response.Error(mountErrorNotExistsBills()));

              case 8:
                _context5.next = 14;
                break;

              case 10:
                _context5.prev = 10;
                _context5.t0 = _context5['catch'](0);

                console.error('[PaymentsService - sendBillsToUser] ' + _context5.t0.message);
                return _context5.abrupt('return', _helpers.Response.Error(_context5.t0));

              case 14:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 10]]);
      }));

      function sendBillsToUser(_x9) {
        return _ref4.apply(this, arguments);
      }

      return sendBillsToUser;
    }()
  }]);
  return BillsService;
}();

function mountErrorNotExistsBills() {
  return {
    code: 400,
    message: 'Nenhuma conta foi enviada'
  };
}

function mountBillToUser(data, user) {
  var result = {
    user: user ? user : data.user,
    name: data.name,
    description: data.description,
    storeCnpj: data.storeCnpj,
    storeFantasyName: data.storeFantasyName,
    discount: data.discount,
    purchaseDate: Date(data.purchaseDate),
    amount: data.amount,
    billetInfo: {
      billet: data.billetInfo.billet,
      code: data.billetInfo.code,
      value: data.billetInfo.value,
      paymentSlip: data.billetInfo.paymentSlip,
      bankName: data.billetInfo.bankName
    }
  };

  if (!result.discount || result.discount == null || result.discount == undefined) delete result.discount;

  if (!result.billetInfo || result.billetInfo == null || result.billetInfo == undefined) delete result.billetInfo;

  return result;
}

function mountDontSendedBill(bill) {
  return result = {
    code: bill.billetInfo.code,
    user: user,
    reason: 'Usuário não cadastrado'
  };
}

function mountBodyToModel(data) {
  var result = {
    user: data.user,
    name: data.name,
    description: data.description,
    amount: data.amount,
    discount: data.discount
  };

  if (!result.discount || result.discount == null || result.discount == undefined) delete result.discount;

  if (!result.description || result.description == null || result.description == undefined) delete result.description;

  return result;
}

function mountErrorExistsUser() {
  return {
    code: 400,
    message: 'Usuário não está cadastrado'
  };
}

function mountError() {
  return {
    code: 404,
    message: 'Nenhuma conta cadastrada'
  };
}

exports.default = BillsService;
//# sourceMappingURL=bills.js.map