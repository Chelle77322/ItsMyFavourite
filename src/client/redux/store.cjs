'use strict';

Object.defineProperty(exports, "__esModule", {value: true});

var _constants = import('./constants.cjs');

var _redux = import('redux');

var _reducer = import('./reducer.cjs');

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(object) { return object && object.__esModule ? object : { default: object }; }

exports.default = function () {
    return (0, _redux.configureStore)(_reducer2.default);
};