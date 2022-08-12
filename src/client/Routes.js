import {Home} from './pages/Home';
import PageMiss from './pages/PageMiss';
import {LandingPage} from './pages/LandingPage';
import {Register} from '../components/Register';
import {Login} from '../components/Login';
//import MyFavourites from './pages/MyFavourites';
//import GooglePlace from './pages/GooglePlace;'

import {App} from './App';

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