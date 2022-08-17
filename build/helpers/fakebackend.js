"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configureFakeBackend = configureFakeBackend;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var users = JSON.parse(localStorage.getItem('users')) || [];

function configureFakeBackend() {
  var realFetch = window.fetch;

  window.fetch = function (url, opts) {
    var method = opts.method,
        headers = opts.headers;
    var body = opts.body && JSON.parse(opts.body);
    return new Promise(function (resolve, reject) {
      // wrap in timeout to simulate server api call
      setTimeout(handleRoute, 500);

      function handleRoute() {
        switch (true) {
          case url.endsWith('/users/authenticate') && method === 'POST':
            return authenticate();

          case url.endsWith('/users/register') && method === 'POST':
            return register();

          case url.endsWith('/users') && method === 'GET':
            return getUsers();

          case url.match(/\/users\/\d+$/) && method === 'DELETE':
            return deleteUser();

          default:
            // pass through any requests not handled above
            return realFetch(url, opts).then(function (response) {
              return resolve(response);
            })["catch"](function (error) {
              return reject(error);
            });
        }
      } // route functions


      function authenticate() {
        var username = body.username,
            password = body.password;
        var user = users.find(function (x) {
          return x.username === username && x.password === password;
        });
        if (!user) return error('Username or password is incorrect');
        return ok({
          id: user.id,
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
          token: 'fake-jwt-token'
        });
      }

      function register() {
        var user = body;

        if (users.find(function (x) {
          return x.username === user.username;
        })) {
          return error("Username  ".concat(user.username, " is already taken"));
        } // assign user id and a few other properties then save


        user.id = users.length ? Math.max.apply(Math, _toConsumableArray(users.map(function (x) {
          return x.id;
        }))) + 1 : 1;
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        return ok();
      }

      function getUsers() {
        if (!isLoggedIn()) return unauthorized();
        return ok(users);
      }

      function deleteUser() {
        if (!isLoggedIn()) return unauthorized();
        users = users.filter(function (x) {
          return x.id !== idFromUrl();
        });
        localStorage.setItem('users', JSON.stringify(users));
        return ok();
      } // helper functions


      function ok(body) {
        resolve({
          ok: true,
          text: function text() {
            return Promise.resolve(JSON.stringify(body));
          }
        });
      }

      function unauthorized() {
        resolve({
          status: 401,
          text: function text() {
            return Promise.resolve(JSON.stringify({
              message: 'Unauthorized'
            }));
          }
        });
      }

      function error(message) {
        resolve({
          status: 400,
          text: function text() {
            return Promise.resolve(JSON.stringify({
              message: message
            }));
          }
        });
      }

      function isLoggedIn() {
        return headers['Authorization'] === 'Bearer fake-jwt-token';
      }

      function idFromUrl() {
        var urlParts = url.split('/');
        return parseInt(urlParts[urlParts.length - 1]);
      }
    });
  };
}