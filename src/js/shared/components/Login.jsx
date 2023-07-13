import React, {Component} from 'react';
import {userActions} from "../Actions/userActions.js";


import {Label, Container} from "reactstrap";
import Form from "react-validation";

import Input from "react-validation";
import Button from "react-validation";


export  default class Login extends Component {
    constructor (props){ 
        super(props);
        this.state = { status: true};
    
        this.state = {
            user:{
            id: ' ',
            password: ' ',
            submitted: false
            },
            errors: {
                id: "Enter your unique id",
                password: "Please enter your password"
            },
            loginStatus: ' ',
            submitted: false
        
    }
}
    makeChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
        this.validationErrorMessage(event);
    }
    validationErrorMessage= (event) => {
        const {name, value} = event.target;
        let errors = this.state.errors;
        switch(name){
            case 'id':
                errors.id = value.length < 1 ? "Enter your unique identifier here": ' ';
                break;
            case 'password':
                errors.password = value.length < 1 ? "Enter your password here": ' ';
            break;
            default: break;
        }
        this.setState({errors});
    }
    validateForm = (errors) => {
        let valid = true;
        console.log(errors);
        Object.entries(errors).forEach(item => {
            console.log(item); item && item[1].length > 0 && ( valid = false)
        })
        console.log(valid);
        return valid;
    }
    loginForm = async(event) => {
        this.setState({submitted:true});
        event.PreventDefault();
        if(this.validateForm(this.state.errors)){
           
            console.info('Form is Validated');const user = getStore('user')
            if(user){
                this.props.dispatch(userActions.loginSuccess(user,{}));

                this.props.history.push('/favourites')
            } else {
                this.setState({loginStatus: 'Login Failed!. Wrong id and or password combination'})
            } 
            } else {
                this.props.dispatch(userActions.loginFail);
                console.info('Login Form in Invalid')
            }
        }
    render () { 
        const user = {id, password, errors, submitted, loginStatus} = this.state.user;
        return (
            <>
            <div>
                <p> I get to the Login Page</p>
            <Container className = "imf-column-container">
                  <div className = "imf-card">
                    </div>
                    <Form name = "loginForm">
                      <div className = 'form-group'>
                        <Label htmlFor = "id">ID</Label>
                        <Input type = "text"
                        value = {id}
                        name = "id" onChange={(event) =>{this.makeChange(event)}}
                        className = "form-control"
                        id = "id"
                        placeholder = "ID"/>
                        {submitted && errors.id.length >0 && <span className = "error">{errors.id}</span>}
                      </div>
        
                      <div className = "form-group">
                      <Label htmlFor = "password">Password</Label>
                      <Input type = "password" value = {password}
                      name = "password" onChange = {(event)=> {this.makeChange(event)}}
                      className = "form-control"
                      id = "password"
                      placeholder = "Enter Password"/>
                      {submitted && errors.password.length > 0 && <span className = "error">{errors.password}</span>}
                      </div>
                      <div className = "col-sm-4"></div>
                    
                      <div className = "row">
                        <div className = " col-sm-12 center mt-1">
                          {submitted && loginStatus.length > 0 && < span className = "error"> {loginStatus}</span>}
                        
                        </div>
                      </div>
                    <div className = "row">
                      <div className = "col-sm-12 center mt-2">
                        <Button type = "submit" className = "button, btn btn-primary" onClick = {this.loginForm}>Login</Button>
                    </div>
                    </div>
                    <div className = "row">
                      <div className = "col-sm-4 mt-2">
                      </div>
                      <div className = "col-sm-4 right">
                        <Button type = "submit"  className = "button, btn btn-primary">
                        <a href = "/Register"> Register</a>
                        </Button>
                    </div>
                    <div className = "col-sm-4 mt-2"></div>
                    </div>
                        
                    </Form>
                    </Container>
                    </div>
                    </>
        );
        }
        }
     const mapStateToProps = (state, user)=> {
        return {
            user: state.user.user
        }
     }
     export const connect = (mapStateToProps, Login);
      
    
    
