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

var PaymentRepository = function () {
  function PaymentRepository() {
    (0, _classCallCheck3.default)(this, PaymentRepository);

    this.schema = new _mongoose2.default.model('payments');
  }

  (0, _createClass3.default)(PaymentRepository, [{
    key: 'payBillByBillet',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(payment) {
        var model, response;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                model = new this.schema(payment);
                _context.next = 4;
                return this.schema.create(model);

              case 4:
                response = _context.sent;
                return _context.abrupt('return', response);

              case 8:
                _context.prev = 8;
                _context.t0 = _context['catch'](0);

                console.error('[PaymentRepository - addBillToUser] ' + _context.t0.message);
                return _context.abrupt('return', _context.t0);

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 8]]);
      }));

      function payBillByBillet(_x) {
        return _ref.apply(this, arguments);
      }

      return payBillByBillet;
    }()
  }]);
  return PaymentRepository;
}();

exports.default = PaymentRepository;
//# sourceMappingURL=payments.js.map