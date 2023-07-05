/* eslint-disable jsx-a11y/heading-has-content */
import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Route, Routes}from 'react-router-dom'
import Login from "../Components/Login.jsx";

import {default as Register} from "../Components/Register.jsx";

import "../../../styles/styles.scss";




export default class Home extends Component{
   
    render(){
       
        return(
           
            <section>
                <Container fluid className = "imf-container" id="content">
                
                <Container className = "home-content">
                    <Row>
                    <Col>
                    <div className = "home-header">
                        <h1 style={{ paddingBottom:5 }}
                        className="heading"> It's My Favourite</h1>
                    </div>
                    <div style = {{padding: 50, textAlign: "right"}}>

                    </div>
                    </Col>
                    </Row>
                    <Row>
                       
                        <Routes>
                            <Route exact component = {<Login/>} path = "/Login"/>
                            <Route exact component = {<Register/>} path = "/Register"/>
                        </Routes>
                        
                    </Row>
                    </Container>
                    </Container>
            </section>
       
        )
    }
    }


