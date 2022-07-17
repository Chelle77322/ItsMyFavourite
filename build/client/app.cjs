'use strict';

Object.defineProperty(exports, "__esModule", {value: true });

var _createClass = function () {
    function defineProperties(target, props)
    {
        for( var i = 0; i < props.length; i++)
        {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configureable = true;

            if ("value" in descriptor)
            descriptor.writeable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function (Constructor, protoProps, staticProps)
    {
        if(protoProps)

        defineProperties(Constructor.prototype, protoProps);

        if(staticProps)
        defineProperties(Constructor,staticProps);

        return Constructor;}
    }

    (App);
    import _react from "react";
    var _react2 = _interopRequireDefault(_react);
    import { connect } from 'react-redux';
    import { getUsers } from './redux/selectors.cjs';
    import { usersFetched } from './redux/actions.cjs';

    function _interopRequireDefault(object) { return object && object.__esModule ? object: {default: object}; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor))
    {
        throw new TypeError(" Cannot call a class as a fuunction");
    }   
}
function _possibleConstructorReturn(self,call){
    if(!self){
        throw new ReferenceError("This has not been initialises - super() has not been called yet");
    }
    return call && (typeof call === "object"|| typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or" + typeof superClass);}
subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writeable: true, configurable: true }});
if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass): subClass.__proto__ = superClass;}

var ENDPOINT = 'http://localhost:3000/user_fake_data.json';

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ = Object.getPrototypeOf(App)).apply(this, arguments));
    }
    _createClass(App, [{

        key: 'componentWillMount',
        value: function componentWillMount() {

            var _props = this.props,
            users = _props.users,
            fetchUsers = _props.fetchUsers;

            if (users === null){
                fetchUsers();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var users = this.props.users;

            return _react2.default.createElement('div', null,
            users && users.length > 0 && users.map(function (_ref){
                var id = _ref.id,
                firstName = _ref.first_name,
                lastName = _ref.last_name;
                return _react2.default.createElement('p',
                {key: id},
                firstName + ' '+ lastName);
            })
            );
        }
    }]);
    return App;
} (_react2.default.Component);


