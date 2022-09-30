import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import {Home} from '../client/pages/Home.js';
import {PageMiss} from '../client/pages/PageMiss.js';

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