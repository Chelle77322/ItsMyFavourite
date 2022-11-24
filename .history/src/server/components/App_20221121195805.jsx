import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import {default as Home} from '../../client/pages/Home';
import {default as PageMiss} from '../../client/pages/PageMiss';

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

