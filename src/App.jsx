import React, {Component} from 'react';
import { Outlet, Routes, Route} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import Home from '../src/js/shared/Pages/Home.jsx';
import Html from "../src/js/shared/Pages/LandingPage.jsx";
import {PageMiss} from '../src/js/shared/Pages/PageMiss.jsx';
import Navigation from "../src/js/shared/Components/Navigation.jsx";

const FavouriteLayout = () => (
    <FavouriteState>
       <Outlet /> 
    </FavouriteState>
);

export default class App extends Component { 
    
   render(){
    return (
        
    <>
    <Container fluid className="imf-container" id="content">

        <Container className="home-content">
            <Row>
                <Col>
                    <div className="home-header">
                        <h1 style={{ paddingBottom: 5 }}
                            className="heading"> It's My Favourite</h1>
                    </div>
                    <div style={{ padding: 50, textAlign: "right" }}>

                    </div>
                </Col>
            </Row>
            </Container>
            <Navigation />  
          
         </Container>
            
      
       <Routes>
        <Route element={<FavouriteLayout />}/>
      
        <Route path = "/landing" element = {<Html/>} />
        <Route path ="/*" element={<Home/>} />
     
        <Route path = "/pagemiss" element = {<PageMiss/>} />
    
        </Routes>     
        </>
                    
    );
   }        
            
}
