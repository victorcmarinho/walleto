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

var BillsRepository = function () {
  function BillsRepository() {
    (0, _classCallCheck3.default)(this, BillsRepository);

    this.schema = new _mongoose2.default.model('bills');
  }

  (0, _createClass3.default)(BillsRepository, [{
    key: 'createUnpaidBill',
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

                console.error('[BillsRepository - createUnpaidBill] ' + _context.t0.message);
                return _context.abrupt('return', _context.t0);

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 8]]);
      }));

      function createUnpaidBill(_x) {
        return _ref.apply(this, arguments);
      }

      return createUnpaidBill;
    }()
  }, {
    key: 'findBillsToPay',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(user, bills) {
        var response;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return this.schema.find({ user: ObjectId(user), _id: { '$in': ObjectId(bills) } });

              case 3:
                response = _context2.sent;
                return _context2.abrupt('return', response);

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2['catch'](0);

                console.error('[BillsRepository - createUnpaidBill] ' + _context2.t0.message);
                return _context2.abrupt('return', _context2.t0);

              case 11:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 7]]);
      }));

      function findBillsToPay(_x2, _x3) {
        return _ref2.apply(this, arguments);
      }

      return findBillsToPay;
    }()
  }, {
    key: 'editPaidBillsByCode',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(bill) {
        var response;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return this.schema.update({ _id: ObjectId(bill) }, { paidOut: true, paidOutDate: Date.now });

              case 3:
                response = _context3.sent;
                return _context3.abrupt('return', response);

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3['catch'](0);

                console.error('[BillsRepository - editPaidBillsByCode] ' + _context3.t0.message);
                return _context3.abrupt('return', _context3.t0);

              case 11:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 7]]);
      }));

      function editPaidBillsByCode(_x4) {
        return _ref3.apply(this, arguments);
      }

      return editPaidBillsByCode;
    }()
  }, {
    key: 'getBillsByStatusOfPayment',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(user, paidOut, skip, limit) {
        var response;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return this.schema.find({ user: ObjectId(user), paidOut: paidOut }).skip(skip).limit(limit);

              case 3:
                response = _context4.sent;
                return _context4.abrupt('return', response);

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4['catch'](0);

                console.error('[BillsRepository - getBillsByStatusOfPayment] ' + _context4.t0.message);
                return _context4.abrupt('return', _context4.t0);

              case 11:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 7]]);
      }));

      function getBillsByStatusOfPayment(_x5, _x6, _x7, _x8) {
        return _ref4.apply(this, arguments);
      }

      return getBillsByStatusOfPayment;
    }()
  }, {
    key: 'getAllBills',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(id, skip, limit) {
        var response;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return this.schema.find({ user: ObjectId(user) }).skip(skip).limit(limit);

              case 3:
                response = _context5.sent;
                return _context5.abrupt('return', response);

              case 7:
                _context5.prev = 7;
                _context5.t0 = _context5['catch'](0);

                console.error('[BillsRepository - getAllBills] ' + _context5.t0.message);
                return _context5.abrupt('return', _context5.t0);

              case 11:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 7]]);
      }));

      function getAllBills(_x9, _x10, _x11) {
        return _ref5.apply(this, arguments);
      }

      return getAllBills;
    }()
  }, {
    key: 'addBillToUser',
    value: function () {
      var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(bill) {
        var model, response;
        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                model = new this.schema(bill);
                _context6.next = 4;
                return this.schema.create(model);

              case 4:
                response = _context6.sent;
                return _context6.abrupt('return', response);

              case 8:
                _context6.prev = 8;
                _context6.t0 = _context6['catch'](0);

                console.error('[PaymentRepository - addBillToUser] ' + _context6.t0.message);
                return _context6.abrupt('return', _context6.t0);

              case 12:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this, [[0, 8]]);
      }));

      function addBillToUser(_x12) {
        return _ref6.apply(this, arguments);
      }

      return addBillToUser;
    }()
  }]);
  return BillsRepository;
}();

exports.default = BillsRepository;
//# sourceMappingURL=bills.js.map