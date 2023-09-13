import React, {Component} from 'react';
import {connect}  from 'react-redux';
import {userActions} from "../Actions/userActions.js"
import Form from "react-inputs-validation";
import Input from "react-inputs-validation";
import Button from "react-inputs-validation";
//import {isValidEmail} from "../Utils/index.js";
//import signUp from "../Features/signUp.jsx";

export default class Register extends Component {
    constructor(props) { 
        super(props);
        this.state = {status:true};
        this.state = {
            users:{
             _id: ' ',
            firstName: '',
            lastName: '',
            password: '',
            favourites: [],
            },
           
        errors: {
            users: {
                _id: "Enter your unique identifier here",
                firstName: "Enter your first name here",
                lastName: "Enter your last name here",
                password: " Enter a unique password of at least 9 alpha numeric characters"
            }
        }, 
        validForm: '', 
        submitted: false,
        }
    }
    componentsDidMount() {
        if(this.props.user){
            this.setState({user: this.props.user_id});
        if(this.props.user.password){
            this.resetErrorMessage();
        }
        }
    }
    makeChange = (event) => {
        let password = " ";
        const {name, value}= event.target;
        const user = this.state.users;

        if (name ==="password") { 
            password = (value);
            user[name]=password;
        }else{
            user[name]=value
        }
        this.setState({user: user});
        this.validationErrorMessage(event);

    }
    validationErrorMessage = (event) => {
        const {name, value} = event.target;
        let errors = this.state.errors;
        switch(name){
           case '_id':
                errors.users._id = value.length <1?
               'Enter unique id': ' ';
            break;
            case 'first_name': errors.users.firstName = value <1? "Enter your first name": " ";
            break;
            case 'last_name': errors.users.lastName = value <1 ? "Enter your last name": " ";
            break;
            case "password": errors.users.password = value <1 ? " Enter a password": " ";
            break;
            default:
            break;
        }
        this.setState({errors});
    }
    checkChange = (event) => {
        const {name, checked} = event.target;
        const user = this.state.users;
        user[name] = checked;
        this.setState({user});
    }
//** VALIDATES REGISTRATION DATA */
validateForm = (errors)=> {
    let valid = true;
    Object.entries(errors.user).forEach(item => {
        console.log(item);
        item && item[1].length > 0 && (valid = false)
    })
    return valid
}
//** SUBMITS THE DATA TO THE STORE TO BE KEPT AND RETRIEVED WHEN REQUIRED */
submitForm = async(event) => {
 const submitted = false;
    this.setState({submitted: true});
    this.props.dispatch(userActions.formSubmitionStatus(true));
    const user = this.state.users;
    if(user && this.props.users.user)
    {
        console.info('Valid Form')
        this.props.dispatch(userActions.registerSuccess(user));
        this.checkChange.history.push("../login")
    } else { 
        this.props.dispatch(userActions.register);
        this.props.history.push('/register')
        console.Console("Something Aint Right, please check the form again")
    }
}
//**RESETS THE FORM TO BLANK AND REMOVES THE ERROR MESSAGES */
resetErrorMessage = () => {
    let errors = this.state.errors;
    // eslint-disable-next-line no-unused-expressions
   errors.users._id = " ";
    errors.users.firstName = " ";
    errors.users.lastName = " ";
    errors.users.password = " ";
    this.setState({errors});

}
render() {
    const {_id, firstName, lastName, password, submitted} = this.state
    
    
  return (
      
      <div className = "col-md-12">
        <div className="card card-container">
          <img src = "//ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="profile-img" className ="profile-img-card"/>
          <Form >
              <div>
             
              <div className = "form-group">
                  <label htmlFor="id">ID</label>
                  <Input type = "text"
                  className = "form-control"
                  value = {_id}
                  name="id"onChange={(event)=>{this.makeChange(event)}}
                 />
                </div>
            
                <div className ="form-group">
                  <label htmlFor="first_name"> First Name</label>
                  <Input type = "text"
                  value = {firstName}
                  name = "first_name"onChange={(event)=>{this.makeChange(event)}}
                  className = "form-control"
                  placeholder = "First Name"/>
                  {submitted && this.state.errors.users.firstName.length > 0 && <span className = 'error'>{this.state.errors.users.firstName}</span>}
                </div>
                <div className ="form-group">
                  <label htmlFor="last_name"> Last Name</label>
                  <Input type = "text"
                  value = {lastName}
                  name = "last_name"onChange={(event)=>{this.makeChange(event)}}
                  className = "form-control"
                  placeholder = "Last Name"/>
                  {submitted && this.state.errors.users.lastName.length > 0 && <span className = 'error'>{this.state.errors.users.lastName}</span>}
                </div>
                <div className = "form-group">
                  <label htmlFor ="password"> Password</label>
                  <Input type = "password"
                  value={password}
                  name="password" onChange={(event)=>{this.makeChange(event)}}
                  className="form-control"
                  placeholder= "Password Required"/>
                 {submitted && this.state.errors.users.password.length >0 && < span className =" error"> {this.state.errors.users.password}</span>}
                </div>
                <div className="form-group">
                  <Button type = "button" className = "btn btn-primary btn-block"
                  onClick={this.registerForm}>Register</Button>
                  </div>
                </div>  
            
            </Form>
            </div>
            </div>
    );
                  }
                }
                const mapStateToProps = (state, user) => {
                  return {
                user,
                  state
                  }
                }
       
   connect(mapStateToProps)(Register);
                
                  
                  
                  
    
           
                 

  
