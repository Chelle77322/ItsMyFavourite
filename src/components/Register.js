import React, {Component} from 'react';
import {connect} from 'react-redux';
import {userActions} from "../client/actions/userActions"
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Button from "react-validation/build/button";
//import {isValidEmail} from "../utils/index";

export class Register extends Component {
    constructor(props) { 
        super(props);
        this.state = {
            user:{
            id: '',
            first_name: '',
            last_name: '',
            password: '',
            favourites: [],
            submitted: false
            },
        errors: {
            user: {
                id: "Enter your unique identifier here",
                first_name: "Enter your first name here",
                last_name: "Enter your last name here",
                password: " Enter a unique password of at least 9 alpha numeric characters"
            }
        }, 
        validForm: false, 
        submitted: false,
        }
    }
    componentsDidMount() {
        if(this.props.user){
            this.setState({user: this.props.user});
        if(this.props.user.password){
            this.resetErrorMessage();
        }
        }
    }
    makeChange = (event) => {
        let password = "";
        const {name, value}= event.target;
        const user = this.state.user;

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
            case 'id':
                errors.user.id = value.length <1?
                'Enter unique id': ' ';
            break;
            case 'first_name': errors.user.first_name = value <1? "Enter your first name": " ";
            break;
            case 'last_name': errors.user.last_name = value <1 ? "Enter your last name": " ";
            break;
            case "password": errors.user.password = value <1 ? " Enter a password": " ";
            break;
            default:
            break;
        }
        this.setState({errors});
    }
    checkChange = (event) => {
        const {name, checked} = event.target;
        const user = this.state.user;
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
    this.setState({submitted: true});
    this.props.dispatch(userActions.formSubmitionStatus(true));
    const user = this.state.user;
    if(user && this.props.user.user)
    {
        console.info('Valid Form')
        this.props.dispatch(userActions.registerSuccess(user));
        this.checkChange.history.push("../login")
    } else { 
        this.props.dispatch(userActions.registerFail);
        this.props.history.push('/register')
        console.Console("Something Aint Right, please check the form again")
    }
}
//**RESETS THE FORM TO BLANK AND REMOVES THE ERROR MESSAGES */
resetErrorMessage = () => {
    let errors = this.state.errors;
    errors.user.id = " ",
    errors.user.first_name = " ",
    errors.user.last_name = " ",
    errors.user.password = " ",
    this.setState({errors});

}
render() {
    const {id, first_name, last_name, password} = this.state.user;
    
    const {submitted} = this.state;
    
    
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
                  value = {id}
                  name="id"onChange={(e)=>{this.makeChange(e)}}
                 />
                </div>
            
                <div className ="form-group">
                  <label htmlFor="first_name"> First Name</label>
                  <Input type = "text"
                  value = {first_name}
                  name = "first_name"onChange={(e)=>{this.makeChange(e)}}
                  className = "form-control"
                  placeholder = "First Name"/>
                  {submitted && this.state.errors.user.first_name.length > 0 && <span className = 'error'>{this.state.errors.user.first_name}</span>}
                </div>
                <div className ="form-group">
                  <label htmlFor="last_name"> Last Name</label>
                  <Input type = "text"
                  value = {last_name}
                  name = "last_name"onChange={(e)=>{this.makeChange(e)}}
                  className = "form-control"
                  placeholder = "Last Name"/>
                  {submitted && this.state.errors.user.last_name.length > 0 && <span className = 'error'>{this.state.errors.user.last_name}</span>}
                </div>
                <div className = "form-group">
                  <label htmlFor ="password"> Password</label>
                  <Input type = "password"
                  value={password}
                  name="password" onChange={(e)=>{this.makeChange(e)}}
                  className="form-control"
                  placeholder= "Password Required"/>
                 {submitted && this.state.errors.user.password.length >0 && < span className =" error"> {this.state.errors.user.password}</span>}
                </div>
                <div className="form-group">
                  <Button type = "button" className = "btn btn-primary btn-block"
                  onClick={this.submitForm}>Register</Button>
                  </div>
                </div>  
            
            </Form>
            </div>
            </div>
    );
                  }
                }
                const mapStateToProps = (state) => {
                  return {
                    user: state.user.user
                  }
                }
                
                export default connect(mapStateToProps)(Register);
                
                  
                  
                  
    
           
                 

  
