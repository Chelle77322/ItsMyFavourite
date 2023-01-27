import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


import {Home} from '../src/js/shared/Pages/Home.jsx';
import  {PageMiss} from '../src/js/shared/Pages/PageMiss.jsx';

export function App() { 
    return (
        <div className = "root">
            <Router>
                <Routes>
                    <Route Component={Home} path = "/home"/>
                    <Route Component={PageMiss} path = "/pagemiss"/>
                </Routes>
            </Router>
            
        </div>
    );
}

export default App