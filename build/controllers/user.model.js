"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var schema = new Schema({
  id: {
    type: String,
    unique: true,
    required: true
  },
  hash: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  createdDate: {
    type: Date,
    "default": Date.now
  }
});
schema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function transform(document, ret) {
    delete ret._id;
    delete ret.hash;
  }
});
module.exports = _mongoose["default"].model('User', schema);