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

var PaymentsService = function () {
  function PaymentsService(paymentRepository, userRepository, billsRepository) {
    (0, _classCallCheck3.default)(this, PaymentsService);

    this.paymentRepository = paymentRepository;
    this.userRepository = userRepository;
    this.billsRepository = billsRepository;
  }

  (0, _createClass3.default)(PaymentsService, [{
    key: 'payBillsByBankCard',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(body) {
        var _this = this;

        var existUser, bills, model, result;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return this.userRepository.findById(body.user);

              case 3:
                existUser = _context2.sent;

                if (!(existUser.length == 0)) {
                  _context2.next = 6;
                  break;
                }

                return _context2.abrupt('return', _helpers.Response.Error(mountErrorNotExistsUser()));

              case 6:
                _context2.next = 8;
                return this.billsRepository.findBillsToPay(body.user, body.bills);

              case 8:
                bills = _context2.sent;

                if (!(bills.length == 0)) {
                  _context2.next = 11;
                  break;
                }

                return _context2.abrupt('return', _helpers.Response.Error(mountErrorNotExistBills()));

              case 11:
                model = mountModelToPaymentsToBankCard(body);
                _context2.next = 14;
                return this.paymentRepository.createPayments(model);

              case 14:
                result = _context2.sent;


                bills.forEach(function () {
                  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(b) {
                    return _regenerator2.default.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return _this.billsRepository.editPaidBillsByCode(b);

                          case 2:
                          case 'end':
                            return _context.stop();
                        }
                      }
                    }, _callee, _this);
                  }));

                  return function (_x2) {
                    return _ref2.apply(this, arguments);
                  };
                }());

                return _context2.abrupt('return', _helpers.Response.Created(result, 'Conta paga com sucesso'));

              case 19:
                _context2.prev = 19;
                _context2.t0 = _context2['catch'](0);

                console.error('[PaymentsService - payBillsByBankCard] ' + _context2.t0.message);
                return _context2.abrupt('return', _helpers.Response.Error(_context2.t0));

              case 23:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 19]]);
      }));

      function payBillsByBankCard(_x) {
        return _ref.apply(this, arguments);
      }

      return payBillsByBankCard;
    }()
  }, {
    key: 'payBillsByBillet',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(body) {
        var _this2 = this;

        var existUser, bills, totalBills, model, result;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return this.userRepository.findById(body.user);

              case 3:
                existUser = _context4.sent;

                if (!(existUser.length == 0)) {
                  _context4.next = 6;
                  break;
                }

                return _context4.abrupt('return', _helpers.Response.Error(mountErrorNotExistsUser()));

              case 6:
                _context4.next = 8;
                return this.billsRepository.findBillsToPay(body.user, body.bills);

              case 8:
                bills = _context4.sent;

                if (!(bills.length == 0)) {
                  _context4.next = 11;
                  break;
                }

                return _context4.abrupt('return', _helpers.Response.Error(mountErrorNotExistBills()));

              case 11:
                totalBills = sumTotalBills(bills);

                if (!(totalBills > depositedMoney)) {
                  _context4.next = 14;
                  break;
                }

                return _context4.abrupt('return', _helpers.Response.Error(mountErrorDontHaveCashToPayBills()));

              case 14:
                model = mountModelToPayments(body);
                _context4.next = 17;
                return this.paymentRepository.createPayments(model);

              case 17:
                result = _context4.sent;
                _context4.next = 20;
                return this.userRepository.removeCash(body.user, totalBills);

              case 20:

                bills.forEach(function () {
                  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(b) {
                    return _regenerator2.default.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            _context3.next = 2;
                            return _this2.billsRepository.editPaidBillsByCode(b);

                          case 2:
                          case 'end':
                            return _context3.stop();
                        }
                      }
                    }, _callee3, _this2);
                  }));

                  return function (_x4) {
                    return _ref4.apply(this, arguments);
                  };
                }());

                return _context4.abrupt('return', _helpers.Response.Created(result, 'Conta paga com sucesso'));

              case 24:
                _context4.prev = 24;
                _context4.t0 = _context4['catch'](0);

                console.error('[PaymentsService - payBillsByBillet] ' + _context4.t0.message);
                return _context4.abrupt('return', _helpers.Response.Error(_context4.t0));

              case 28:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 24]]);
      }));

      function payBillsByBillet(_x3) {
        return _ref3.apply(this, arguments);
      }

      return payBillsByBillet;
    }()
  }]);
  return PaymentsService;
}();

function mountModelToPaymentsToBankCard(body) {
  return {
    user: body.user,
    bills: body.bills,
    billetInfo: {
      billet: body.billetInfo.billet,
      code: body.billetInfo.code,
      value: body.billetInfo.value,
      purchaseInterest: body.billetInfo.purchaseInterest,
      interestFrom: body.billetInfo.interestFrom,
      paidWithBillet: true
    },
    amount: body.amount,
    cashback: body.cashback,
    paidOut: true,
    paidOutDate: Date.now
  };
}

function mountModelToPayments(body) {
  return {
    user: body.user,
    bills: body.bills,
    bankCard: {
      value: body.bankCard.value,
      purchaseInterest: body.bankCard.purchaseInterest,
      interestFrom: body.bankCard.interestFrom,
      paidWithBankCard: true
    },
    amount: body.amount,
    cashback: body.cashback,
    paidOut: true,
    paidOutDate: Date.now
  };
}

function sumTotalBills(bills) {
  var total = 0;
  bills.forEach(function (b) {
    total += b.amount;
  });

  return total;
}

function mountErrorDontHaveCashToPayBills() {
  return {
    code: 40,
    message: 'Dinheiro insuficiente'
  };
}

function mountErrorNotExistsUser() {
  return {
    code: 404,
    message: 'Usuário não cadastrado'
  };
}

function mountErrorNotExistBills() {
  return {
    code: 404,
    message: 'Contas não cadastradas para esse usuário'
  };
}

exports.default = PaymentsService;
//# sourceMappingURL=payments.js.map