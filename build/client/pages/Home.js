"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.GoogleMaps = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var GoogleMaps = /*#__PURE__*/function (_Component) {
  _inherits(GoogleMaps, _Component);

  var _super = _createSuper(GoogleMaps);

  function GoogleMaps(props) {
    var _this;

    _classCallCheck(this, GoogleMaps);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "_createMap", function () {
      var mapCanvas = _this.props.mapCanvas;
      var config = _this.props.config;

      if (config.type === 'street') {
        return new GoogleMaps.maps.StreetViewPanorama(mapCanvas, config.mapOptions);
      }

      return new GoogleMaps.maps.Map(mapCanvas, config.mapOptions);
    });

    _defineProperty(_assertThisInitialized(_this), "_createMarkers", function () {
      var config = _this.props.config;

      var _assertThisInitialize = _assertThisInitialized(_this),
          _createInfoWindow = _assertThisInitialize._createInfoWindow;

      if (config.allowClusters) {// eslint-disable-next-line no-undef
        // eslint-disable-next-line no-unused-vars
        // eslint-disable-next-line no-undef
      } else {
        _lodash["default"].forEach(config.locations, function (location) {
          var marker = new GoogleMaps.maps.Marker({
            position: location,
            map: _this.map,
            title: location.infoWindowContent.title || ''
          });

          _createInfoWindow(marker, location);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_createInfoWindow", function (marker, location) {
      var _location$infoWindowC = location.infoWindowContent,
          title = _location$infoWindowC.title,
          text = _location$infoWindowC.text,
          imgUrl = _location$infoWindowC.imgUrl;
      var infoWindowTemplate = "<div class = \"info-window\"\n        style = \"background-image: url(".concat(imgUrl, ")\"}>\n        <h4> ").concat(title, "</h4>\n        <p> ").concat(text, "</p>\n        </div>");
      var infoWindow = new GoogleMaps.maps.InfoWindow({
        content: infoWindowTemplate
      });
      marker.addListener('click', function () {
        infoWindow.open(this.map, marker);
      });
    });

    _this.state = "";
    return _this;
  }

  _createClass(GoogleMaps, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.map = this._createMap();
      this.marker = this._createmarkers();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "google-map",
        ref: "mapCanvas"
      }, "LOADING MAP ...");
    }
  }]);

  return GoogleMaps;
}(_react.Component);

exports.GoogleMaps = GoogleMaps;

_defineProperty(GoogleMaps, "propTypes", {
  config: _react.PropTypes.object.isRequired
});

_defineProperty(GoogleMaps, "defaultProps", {
  config: {}
});

var Home = function Home() {
  var streetViewConfig = {
    type: 'street',
    mapOptions: {
      position: {
        lat: -31.6443212,
        lng: -138.2993317
      },
      pov: {
        heading: 200,
        pitch: 0
      },
      scrollWheel: false
    }
  };
  var mapViewConfig = {
    mapOptions: {
      center: {
        lat: -31.6443212,
        lng: -138.2993317
      },
      zoom: 13,
      streetViewControl: true,
      scrollWheel: true
    },
    type: 'map',
    allowClusters: false,
    locations: [{
      lat: -31.6443212,
      lng: -138.2993317,
      infoWindowContent: {
        title: 'Rawnsley Park Station',
        text: "Rawnsley Park Station is owned and managed by fourth generation Flinders Ranges’ residents, Tony and Julieanne Smith. The station has been in the Smith family since 1953, and was originally owned by Tony’s father, Clem Smith. Initially devoted to sheep shearing, the station ventured into tourism in 1968, when the first cabins were opened and sheep shearing demonstrations began. ",
        imgUrl: 'https://goo.gl/maps/k2WQ7SSNapErQ4jV7'
      }
    }]
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "page"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flexbox"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "map-container u-vr"
  }, /*#__PURE__*/_react["default"].createElement(GoogleMaps, {
    config: mapViewConfig
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "map-container"
  }, /*#__PURE__*/_react["default"].createElement(GoogleMaps, {
    config: streetViewConfig
  }))));
};

(0, _reactDom["default"])( /*#__PURE__*/_react["default"].createElement(Home, null), document.body);
var _default = GoogleMaps;
exports["default"] = _default;