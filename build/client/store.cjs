'use strict';

Object.defineProperty(exports, "__esModule", {value: true });

var _constants = require('./constants.cjs');

var _redux = require('redux');

var _reducer = require('./reducer.cjs');

var _reducer2 = interopRequireDefault(_reducer);

function _interopRequireDefault(object)
{
    return object && object.__esModule ? object: { default: object };
}
exports.default = function() { 
    return (0, _redux.configureStore)(_reducer2.default);
};