import * as React from 'react';

function Insert({ children, initialState, scripts }) {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <title>Welcome to It's My Favourite 🦘 </title>
      </head>
      <body>
        <div
          id="root"
          dangerouslySetInnerHTML={{ __html: children }} />

        {initialState && (
          <scripts
            dangerouslySetInnerHTML={{
              __html: `window.APP_STATE=${JSON.stringify(initialState)}`
            }} />
        )}

        {scripts.map((item, index) => <script key={index} src={item} />)}
        
      </body>

    </html>
  )
          }  


export default Insert;
