'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.paymentService = exports.billsService = exports.userService = undefined;

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var _bills = require('./bills');

var _bills2 = _interopRequireDefault(_bills);

var _payments = require('./payments');

var _payments2 = _interopRequireDefault(_payments);

var _repositories = require('../repositories');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userService = new _user2.default(_repositories.userRepository);
var billsService = new _bills2.default(_repositories.billsRepository, _repositories.userRepository);
var paymentService = new _payments2.default(_repositories.paymentRepository, _repositories.userRepository, _repositories.billsRepository);

exports.userService = userService;
exports.billsService = billsService;
exports.paymentService = paymentService;
//# sourceMappingURL=index.js.map