'use strict';

Object.defineProperty(exports, "__esModule", {value: true });
import { configureStore, applyMiddleware } from "@reduxjs/toolkit";


var _constants = require('./constants.js');

var _redux = require('redux');

var _reducer = require('./reducer.js');

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(object)
{
    return object && object.__esModule ? object: { default: object };
}
exports.default = function() { 
    return (0, _redux.configureStore)(_reducer2.default);
};
console.log(_redux.configureStore);