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

var billSchema = Schema({
  user: { type: Schema.Types.ObjectId, ref: 'users', required: true },
  name: { type: String, required: true },
  description: { type: String, required: false },
  storeCnpj: { type: String, required: false },
  storeFantasyName: { type: String, required: false },
  amount: { type: Number, required: true },
  discount: { type: Number, required: false, default: 0.0 },
  paidOut: { type: Boolean, required: false },
  paidOutDate: { type: Date, required: false },
  creationDate: { type: Date, required: false, default: Date.now },
  purchaseDate: { type: Date, required: true },
  billetInfo: {
    billet: { type: String, required: false },
    code: { type: String, required: false },
    value: { type: Number, required: false },
    paymentSlip: { type: Date, required: false },
    bankName: { type: String, required: false }
  }
});

var BillSchema = _mongoose2.default.model(_configurations2.default.BillsCollection, billSchema);

exports.default = BillSchema;
//# sourceMappingURL=bills.js.map