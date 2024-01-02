/* eslint-disable jsx-a11y/heading-has-content */
import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Route, Routes}from 'react-router-dom';
import Login from "../Components/Login.jsx";


import Register from "../Components/Register.jsx";

import Navigation from "../Components/Home/Navigation.jsx"


import "../../../styles/styles.scss";


export default class Home extends Component{
   


render(){

       return(
        
        <section>
        <Container className = "home-content">
        <Row><Col>
        <div> 
    <h1>This is the home page for Login and Registration</h1>
    </div></Col>
    </Row>
    <Row>
        <Navigation />  
                    
        <Routes>
           
               <Route element = {<Login/>} path = "/Login" />
               <Route element = {<Register/>} path = "/Register" />

                               
                            </Routes>
                            
                            </Row>       
             
                                  
          
         
                            </Container>
          
                            </section>
          
            
            
       
        );
       }
       }
    
       

    


