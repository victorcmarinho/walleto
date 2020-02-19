'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _configurations = require('../configurations');

var _configurations2 = _interopRequireDefault(_configurations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var paymentSchema = Schema({
  user: { type: Schema.Types.ObjectId, ref: 'users', required: true },
  bills: [{ type: Schema.Types.ObjectId, ref: 'bills', required: true }],
  billetInfo: {
    billet: { type: String, required: false },
    code: { type: String, required: false },
    value: { type: String, required: false },
    purchaseInterest: { type: Number, required: false },
    interestFrom: { type: Number, required: false },
    paidWithBillet: { type: Boolean, required: false, default: false }
  },
  bankCard: {
    value: { type: String, required: false },
    purchaseInterest: { type: Number, required: false },
    interestFrom: { type: Number, required: false },
    paidWithBankCard: { type: Boolean, required: false }
  },
  amount: { type: Number, required: true },
  cashback: { type: Number, required: true },
  paidOut: { type: Boolean, required: true },
  paidOutDate: { type: Date, required: true },
  creationDate: { type: Date, required: false, default: Date.now }
});

var PaymentSchema = _mongoose2.default.model(_configurations2.default.PaymentsCollection, paymentSchema);

exports.default = PaymentSchema;
//# sourceMappingURL=payment.js.map