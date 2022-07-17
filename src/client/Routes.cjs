import Home from '../client/pages/Home.cjs';
import PageMiss from '../client/pages/PageMiss.cjs';
import LandingPage from '../client/pages/LandingPage.cjs';
//import Register from './pages/Register';
//import Login from './pages/Login';
//import MyFavourites from './pages/MyFavourites';
//import GooglePlace from './pages/GooglePlace;'

import App from '../client/App.cjs';

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