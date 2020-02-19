'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.editDepositedCash = exports.deleteBankCard = exports.addBankCard = exports.sign = exports.login = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var login = exports.login = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res, next) {
    var _req$body, email, password, result;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, email = _req$body.email, password = _req$body.password;
            _context.next = 4;
            return _services.userService.login(email, password);

          case 4:
            result = _context.sent;


            res.status(201).send(result);
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

  return function login(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var sign = exports.sign = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res, next) {
    var result;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _services.userService.sign(req.body);

          case 3:
            result = _context2.sent;


            res.status(201).send(result);
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2['catch'](0);

            res.status(500).send(_context2.t0);

          case 10:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[0, 7]]);
  }));

  return function sign(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

var addBankCard = exports.addBankCard = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res, next) {
    var result;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _services.userService.addBankCard(req.body);

          case 3:
            result = _context3.sent;


            res.status(201).send(result);
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

  return function addBankCard(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

var deleteBankCard = exports.deleteBankCard = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res, next) {
    var _req$query, user, id, result;

    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _req$query = req.query, user = _req$query.user, id = _req$query.id;
            _context4.next = 4;
            return _services.userService.deleteBankCard(user, id);

          case 4:
            result = _context4.sent;


            res.status(201).send(result);
            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4['catch'](0);

            res.status(500).send(_context4.t0);

          case 11:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this, [[0, 8]]);
  }));

  return function deleteBankCard(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

var editDepositedCash = exports.editDepositedCash = function () {
  var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res, next) {
    var _req$query2, id, total, result;

    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _req$query2 = req.query, id = _req$query2.id, total = _req$query2.total;
            _context5.next = 4;
            return _services.userService.editDepositedCash(id, total);

          case 4:
            result = _context5.sent;


            res.status(201).send(result);
            _context5.next = 11;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5['catch'](0);

            res.status(500).send(_context5.t0);

          case 11:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this, [[0, 8]]);
  }));

  return function editDepositedCash(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();

var _services = require('../services');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=users.js.map