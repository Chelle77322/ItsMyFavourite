import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {Home} from '../client/pages/Home';

export default function App() { 
    return (
        <div className = "app">
            <Router>
                <Routes>
                    <Route exact component={Home} path = "/home"/>
                </Routes>
            </Router>
        </div>
    );
}
