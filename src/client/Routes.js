import Home from './pages/Home.cjs';
import PageMiss from './pages/PageMiss.cjs';
import LandingPage from './pages/LandingPage.cjs';
//import Register from './pages/Register';
//import Login from './pages/Login';
//import MyFavourites from './pages/MyFavourites';
//import GooglePlace from './pages/GooglePlace;'

import App from './App.jsx';

// eslint-disable-next-line import/no-anonymous-default-export
export default [
    {
        ...App,
        routes:[
            {
            ...Home,
            path: '/',
            exact: true
            },
            {
            path: '/favourite/:id',
            ...LandingPage
            },
            {
                path: '/favourite/',
                ...PageMiss
            }
        ]
    }
];