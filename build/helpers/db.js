"use strict";

var _config = _interopRequireDefault(require("../../config.js"));

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var connectionOptions = {
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
};

_mongoose["default"].connect(process.env.MONGODB_URI || _config["default"].connectionString, connectionOptions);

_mongoose["default"].Promise = global.Promise;
module.exports = {
  User: require('./controllers/user.model')
};