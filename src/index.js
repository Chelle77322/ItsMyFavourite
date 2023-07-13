import React from "react";
import {createRoot } from "react-dom/client";
import {BrowserRouter as Router} from "react-router-dom"
import {Provider} from "react-redux";
import store from "./js/shared/Store/store.js"
import App from "./App.jsx";

const rootElement = document.getElementById("root");
if (rootElement){
        const root = createRoot(rootElement);
        root.render(
        <Router>
                <Provider store = {store}>
                <App/>
                </Provider>
                </Router>
                )
}