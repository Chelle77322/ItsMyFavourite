import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Login} from "../../components/Login";


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
                        </Routes>
                        </Router>
                    </Row>
                    </Container>
                    </Container>
            </section>
        );
    }
}
