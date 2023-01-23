import React from "react";
import ReactDOM  from "react-dom";
import {Provider} from 'react-redux';
import  {default as store} from "../src/js/shared/Store/store.js"
import {App} from "./App.jsx"
import "bootstrap/dist/css/bootstrap.min.css"

const initalState = window.__REDUX_STATE__
//console.log(store.getState(initalState));

const appElement = document.getElementById("root");



ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
appElement
	
	);