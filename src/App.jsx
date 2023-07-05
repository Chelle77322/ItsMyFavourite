import React, {Component} from 'react';
import { Outlet, BrowserRouter, Router, Route} from 'react-router-dom';
import { createMemoryHistory } from "history";
import Home from '../src/js/shared/Pages/Home.jsx';
import Html from "../src/js/shared/Pages/LandingPage.jsx";
import  {PageMiss} from '../src/js/shared/Pages/PageMiss.jsx';

const FavouriteLayout = () => (
    <FavouriteState>
       <Outlet /> 
    </FavouriteState>
);
const history = createMemoryHistory()
export default class App extends Component { 
    ;
   render(){
    return (
        <>
        <BrowserRouter>
        <Router navigator={history}>
        <Route element={<FavouriteLayout />}></Route>
        <Route path = "/landing" element = {<Html/>} />
        <Route path ="/" element={<Home />} />
        <Route path = "/pagemiss" element = {PageMiss} />
    
             
             
               
            </Router>
            </BrowserRouter>
            
            </>  
    );
}
}
