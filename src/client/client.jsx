import React, {Component} from 'react';
import {Provider} from "react-redux";
import {default as App} from "../server/components/App.jsx"
//import rootReducer from "../client/_reducers";
import store from "../client/_helpers/store.js"


export default class Client extends Component {
componentsWillMount() {
  // eslint-disable-next-line no-unused-expressions
  <Provider store ={store}>
    <App />
    </Provider>
    
}
}