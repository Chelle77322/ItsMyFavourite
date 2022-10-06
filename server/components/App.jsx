import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import {Home} from '../../src/client/pages/Home';
import {PageMiss} from '../../src/client/pages/PageMiss';

function App() { 
    return (
        <div className = "app">
            <Router>
                <Routes>
                    <Route exact Component={Home} path = "/home"/>
                    <Route exact Component={PageMiss} path = "/pagemiss"/>
                </Routes>
            </Router>
        </div>
    );
}
export default {App};
