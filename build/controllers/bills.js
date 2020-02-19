'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendBillsToUser = exports.createUnpaidBill = exports.getBillsByStatusOfPaymentMock = exports.getBillsByStatusOfPayment = exports.getAllBills = undefined;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

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
    var _req$query2, user, paidOut, skip, limit, id, result;

    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _req$query2 = req.query, user = _req$query2.user, paidOut = _req$query2.paidOut, skip = _req$query2.skip, limit = _req$query2.limit, id = _req$query2.id;
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

var getBillsByStatusOfPaymentMock = exports.getBillsByStatusOfPaymentMock = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res, next) {
    var result;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            try {
              result = {};


              if (req.body.length > 0 && (0, _keys2.default)(obj).length !== 0 && obj.constructor !== Object) {
                result = mountMockFalse(req.body);
              } else {
                result = mockResult();
              }

              res.status(200).send(_helpers.Response.Ok(result, "Contas não pagas"));
            } catch (error) {
              res.status(500).send(error);
            }

          case 1:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function getBillsByStatusOfPaymentMock(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

var createUnpaidBill = exports.createUnpaidBill = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res, next) {
    var result;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _services.billsService.createUnpaidBill(req.body);

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

  return function createUnpaidBill(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

var sendBillsToUser = exports.sendBillsToUser = function () {
  var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res, next) {
    var result;
    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return paymentService.sendBillsToUser(req.body);

          case 3:
            result = _context5.sent;


            res.status(200).send(result);
            _context5.next = 10;
            break;

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5['catch'](0);

            res.status(500).send(_context5.t0);

          case 10:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this, [[0, 7]]);
  }));

  return function sendBillsToUser(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();

var _services = require('../services');

var _helpers = require('../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mountMockFalse(id) {
  var result = mockResult();

  id.map(function (s) {
    result.map(function (r) {
      if (r.id = s) r.isPaid = true;
    });
  });

  return result;
}

function mockResult() {
  var result = [{
    id: "5e4c738182d3576726ea2f4c",
    name: 'Conta de Luz',
    price: '199.99',
    isPaid: false
  }, {
    id: "5e4c739196908953145a81c6",
    name: 'Conta de Água',
    price: '200.00',
    isPaid: false
  }, {
    id: "5e4c739e9365142de3f74609",
    name: 'Conta de IPTU',
    price: '57.60',
    isPaid: false
  }, {
    id: "5e4c73b00c74b443ae7e083d",
    name: 'Conta de Gás',
    price: '32.65',
    isPaid: false
  }, {
    id: "5e4c73bdf358897f149ecf8f",
    name: 'Conta de Bombeiro',
    price: '25.25',
    isPaid: false
  }, {
    id: "5e4c73df3537428e6bf16b58",
    name: 'Casas Bahia',
    price: '64.89',
    isPaid: true
  }, {
    id: "5e4c73eb886fd304becb82d7",
    name: 'Netflix',
    price: '29.99',
    isPaid: true
  }];

  return result;
}
//# sourceMappingURL=bills.js.map