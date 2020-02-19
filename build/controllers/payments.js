'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.payBillsByBankCard = exports.payBillsByBillet = exports.generateBillet = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var generateBillet = exports.generateBillet = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res, next) {
    var _req$body, email, password, result;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            try {
              _req$body = req.body, email = _req$body.email, password = _req$body.password;
              result = {};


              res.status(201).send(result);
            } catch (error) {
              res.status(500).send(error);
            }

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function generateBillet(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var payBillsByBillet = exports.payBillsByBillet = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res, next) {
    var result;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _services.paymentService.payBillsByBillet(req.body);

          case 3:
            result = _context2.sent;
            _context2.next = 9;
            break;

          case 6:
            _context2.prev = 6;
            _context2.t0 = _context2['catch'](0);

            res.status(500).send(_context2.t0);

          case 9:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[0, 6]]);
  }));

  return function payBillsByBillet(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

var payBillsByBankCard = exports.payBillsByBankCard = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res, next) {
    var result;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _services.paymentService.payBillsByBankCard(req.body);

          case 3:
            result = _context3.sent;
            _context3.next = 9;
            break;

          case 6:
            _context3.prev = 6;
            _context3.t0 = _context3['catch'](0);

            res.status(500).send(_context3.t0);

          case 9:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this, [[0, 6]]);
  }));

  return function payBillsByBankCard(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

var _services = require('../services');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=payments.js.map