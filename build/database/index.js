'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = databaseConnect;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _configurations = require('../configurations');

var _configurations2 = _interopRequireDefault(_configurations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function databaseConnect() {
    _mongoose2.default.connect(_configurations2.default.DatabaseUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: _configurations2.default.DatabaseName
    }).catch(function (error) {
        console.log("Falha ao conectar no banco");
        throw Error("Falha ao conectar no banco");
    });
}
//# sourceMappingURL=index.js.map