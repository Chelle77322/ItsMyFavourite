"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setStore = exports.removeItem = exports.isValidEmail = exports.getStore = void 0;

//**LOCAL STORAGE SETTINGS FOR THE REDUX STORE */
var setStore = function setStore(name, content) {
  if (!name) return;

  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }

  return window.localStorage.setItem(name, content);
}; //**GETS THE INFORMATION FROM THE REDUX STORE */


exports.setStore = setStore;

var getStore = function getStore(name) {
  if (!name) return;
  return JSON.parse(window.localStorage.getItem(name));
}; //**GETS RID OF INFORMATION IN THE REDUX STORE */


exports.getStore = getStore;

var removeItem = function removeItem(name) {
  if (!name) return;
  return window.localStorage.removeItem(name);
}; //**VALIDATES ALL EMAIL ADDRESSES */


exports.removeItem = removeItem;

var isValidEmail = function isValidEmail(value) {
  return !(value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,64}$/i.test(value));
};

exports.isValidEmail = isValidEmail;