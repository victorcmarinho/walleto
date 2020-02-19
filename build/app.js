'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function () {
    function App() {
        (0, _classCallCheck3.default)(this, App);

        this.app = (0, _express2.default)();
        this.middleware();
        (0, _routes2.default)(this.app);
    }

    (0, _createClass3.default)(App, [{
        key: 'middleware',
        value: function middleware() {
            this.app.use(_bodyParser2.default.json());
            this.app.use(_bodyParser2.default.urlencoded({ extended: true }));
            this.app.use((0, _helmet2.default)());
            this.app.use((0, _morgan2.default)('dev'));
            this.app.use((0, _cookieParser2.default)());
            this.app.use((0, _cors2.default)());
        }
    }]);
    return App;
}();

exports.default = new App().app;
//# sourceMappingURL=app.js.map