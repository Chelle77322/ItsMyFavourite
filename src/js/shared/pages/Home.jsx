/* eslint-disable jsx-a11y/heading-has-content */
import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import {Route, Routes, Router}from 'react-router-dom'
import {default as Login} from "../components/Login.jsx";

import {default as Register} from "../components/Register.jsx";

import "../../../styles/styles.scss";




export default class Home extends Component{
   
    componentsWillMount(){
        return(
            <section>
                <Container fluid className = "imf-container" id="content">
                
                <Container className = "home-content">
                    <Row>
                    <Col>
                    <div className = "home-header">
                        <h1 style={{ paddingBottom:5 }}
                        className="heading"></h1>
                    </div>
                    <div style = {{padding: 50, textAlign: "right"}}>

                    </div>
                    </Col>
                    </Row>
                    <Row>
                        <Router>
                        <Routes>
                            <Route exact component = {Login} path = "/Login"/>
                            <Route exact component = {Register} path = "/Register"/>
                        </Routes>
                        </Router>
                    </Row>
                    </Container>
                    </Container>
            </section>
        );
    }
}
