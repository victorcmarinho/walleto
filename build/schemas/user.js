'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _configurations = require('../configurations');

var _configurations2 = _interopRequireDefault(_configurations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userSchema = _mongoose2.default.Schema({
  name: { type: String, required: true },
  cpf: { type: String, required: true },
  email: { type: String, required: true },
  image: { type: String, required: false },
  motherName: { type: String, required: true },
  password: { type: String, required: true },
  birthday: { type: Date, required: true },
  depositedMoney: { type: Number, required: false, default: 0.0 },
  address: {
    zipcode: { type: String, required: true },
    street: { type: String, required: true },
    neighborhood: { type: String, required: true },
    number: { type: Number, required: true },
    complement: { type: String, required: false }
  },
  bankCards: [{
    cardId: { type: _mongoose2.default.Schema.Types.ObjectId, required: false },
    name: { type: String, required: false },
    bankName: { type: String, required: false },
    cardNumber: { type: String, required: false },
    flag: { type: String, required: false },
    dueDate: { type: Date, required: false },
    securityNumber: { type: Number, required: false }
  }],
  isLoggedIn: { type: Boolean, required: false, default: false },
  creationDate: { type: Date, required: false, default: Date.now }
});

var UserSchema = _mongoose2.default.model(_configurations2.default.UserCollection, userSchema);

exports.default = UserSchema;
//# sourceMappingURL=user.js.map