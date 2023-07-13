import React, {Component} from 'react';
import { Outlet, Routes, Route} from 'react-router-dom';
import Home from '../src/js/shared/Pages/Home.jsx';
import Html from "../src/js/shared/Pages/LandingPage.jsx";
import  {PageMiss} from '../src/js/shared/Pages/PageMiss.jsx';

const FavouriteLayout = () => (
    <FavouriteState>
       <Outlet /> 
    </FavouriteState>
);

export default class App extends Component { 
    
   render(){
    return (
        <>
        
       <Routes>
        <Route element={<FavouriteLayout />}></Route>
        <Route path = "/landing" element = {<Html/>} />
        <Route path ="/*" element={<Home />} />
        <Route path = "/pagemiss" element = {<PageMiss/>} />
    
        </Routes>     
             
               
          
            </>  
    );
}
}
