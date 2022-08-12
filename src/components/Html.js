import React from 'react';
import "../helpers/helper";

function Html({ children, initialState, scripts }) {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <title>Welcome to It's My Favourite 🦘 </title>
      </head>
      <body>
        <div
          id="app"
          dangerouslySetInnerHTML={{ __html: children }} />

        {initialState && (
          <script
            dangerouslySetInnerHTML={{
              __html: `window.APP_STATE=${JSON.stringify(initialState)}`
            }} />
        )}

        {scripts.map((item, index) => <script key={index} src={item} />)}
      </body>

    </html>
  );
}
export default Html;
