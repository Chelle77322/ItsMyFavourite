import { Types} from '../actions/types';

const initialState = {

    user:{
    id:"",
    password: "",
    },
  
  loginFormSubmitted: false
}


const authReducer = (state = initialState, action) =>{
  switch(action.type){
  case Types.LOGIN_REQUEST:
    console.log('login', action.payload.user)
    return{
      ...state,
      loggedIn:action.payload.user,
      loginFormSubmitted: false
    }
    case Types.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.payload.user
      };
      case Types.LOGIN_FAILURE:
        return{
          loggedIn: false,
          user: action.payload.user
        };
        case Types.LOGOUT:
          return{
            loggedOut: true
          };
          default: return state
        case Types.REGISTER_REQUEST:
          return{
          ...state,
          user: action.payload.user,
          formSubmitted: false
          }
          case Types.REGISTER_SUCCESS:
            return{
              ...state,
              user: action.payload.user,
              
            }
            case Types.REGISTER_FAILURE:
              return {};
            
      case Types.FORM_SUBMITION_STATUS:
       return {
        ...state,
          user: action.payload.status,
           
          
       }  
         
      }     
 
}

export default authReducer;