import {Home} from './pages/Home.js';
import PageMiss from './pages/.js';
import {LandingPage} from './pages/LandingPage.js';
import {Register} from '../components/Register.js';
import {Login} from '../components/Login.js';
//import MyFavourites from './pages/MyFavourites';
//import GooglePlace from './pages/GooglePlace;'

import {App} from './App.js';

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
                ...Register,
                path :'/Register',
                exact: true
            },
            {
            path: '/:id',
            ...LandingPage
            },
            {
            ...Login,
            path: '/Login',
            exact: true
            },
            {
                path: '/',
                ...PageMiss
            }
        ]
    }
];