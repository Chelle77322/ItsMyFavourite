import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import {Home} from "../shared/Pages/Home.jsx"

function App() {
    return (
        <Router>
           
            <div>
           
            <Route exact path = "/" component = {Home}/>
                
            </div>
            
        </Router>
    );
}
export default App;