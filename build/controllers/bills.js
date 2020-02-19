'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendBillsToUser = exports.createUnpaidBill = exports.getBillsByStatusOfPayment = exports.getAllBills = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var getAllBills = exports.getAllBills = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res, next) {
    var _req$query, user, skip, limit, result;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$query = req.query, user = _req$query.user, skip = _req$query.skip, limit = _req$query.limit;
            _context.next = 4;
            return _services.billsService.getAllBills(user, skip, limit);

          case 4:
            result = _context.sent;


            res.status(200).send(result);
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context['catch'](0);

            res.status(500).send(_context.t0);

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 8]]);
  }));

  return function getAllBills(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var getBillsByStatusOfPayment = exports.getBillsByStatusOfPayment = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res, next) {
    var _req$query2, user, paidOut, skip, limit, result;

    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _req$query2 = req.query, user = _req$query2.user, paidOut = _req$query2.paidOut, skip = _req$query2.skip, limit = _req$query2.limit;
            _context2.next = 4;
            return _services.billsService.getBillsByStatusOfPayment(user, paidOut, skip, limit);

          case 4:
            result = _context2.sent;


            res.status(200).send(result);
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2['catch'](0);

            res.status(500).send(_context2.t0);

          case 11:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[0, 8]]);
  }));

  return function getBillsByStatusOfPayment(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

var createUnpaidBill = exports.createUnpaidBill = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res, next) {
    var result;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _services.billsService.createUnpaidBill(req.body);

          case 3:
            result = _context3.sent;


            res.status(200).send(result);
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3['catch'](0);

            res.status(500).send(_context3.t0);

          case 10:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this, [[0, 7]]);
  }));

  return function createUnpaidBill(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

var sendBillsToUser = exports.sendBillsToUser = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res, next) {
    var result;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return paymentService.sendBillsToUser(req.body);

          case 3:
            result = _context4.sent;


            res.status(200).send(result);
            _context4.next = 10;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4['catch'](0);

            res.status(500).send(_context4.t0);

          case 10:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this, [[0, 7]]);
  }));

  return function sendBillsToUser(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

var _services = require('../services');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=bills.js.map