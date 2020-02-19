'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.paymentRepository = exports.billsRepository = exports.userRepository = undefined;

var _database = require('../database');

var _database2 = _interopRequireDefault(_database);

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var _bills = require('./bills');

var _bills2 = _interopRequireDefault(_bills);

var _payments = require('./payments');

var _payments2 = _interopRequireDefault(_payments);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _database2.default)();

var userRepository = new _user2.default();
var billsRepository = new _bills2.default();
var paymentRepository = new _payments2.default();

exports.userRepository = userRepository;
exports.billsRepository = billsRepository;
exports.paymentRepository = paymentRepository;
//# sourceMappingURL=index.js.map