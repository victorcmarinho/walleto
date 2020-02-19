'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = EmailValidator;

var _emailValidator = require('email-validator');

var _emailValidator2 = _interopRequireDefault(_emailValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function EmailValidator(email) {
  return _emailValidator2.default.validate(email);
}
//# sourceMappingURL=email-validator.js.map