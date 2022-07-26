import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import "../../styles/styles.scss";

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
                    </Container>
                    </Container>
            </section>
        );
    }
}