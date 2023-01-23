import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


import {default as Home} from '../src/js/shared/Pages/Home.jsx';
import {default as PageMiss} from '../src/js/shared/Pages/PageMiss.jsx';

export function App() { 
    return (
        <div className = "root">
            <Router>
                <Routes>
                    <Route exact Component={Home} path = "/home"/>
                    <Route exact Component={PageMiss} path = "/pagemiss"/>
                </Routes>
            </Router>
            
        </div>
    );
}

export default App