import React from 'react';
import {renderToString} from 'react-dom/server';
import {Provider} from "react-redux";
import configuredStore from "../redux/configureStore";
import App from "../components/App";

module.exports = function render(initialState){
  const store = configuredStore(initialState)

  let content = renderToString(
    <Provider store={store} >
      console.info(store={store});
      <App />
    </Provider>
  );
  const preloadedState = store.getState()

  return {content, preloadedState};
}