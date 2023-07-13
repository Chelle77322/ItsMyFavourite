/* eslint-disable react-hooks/rules-of-hooks */
import { userConstants } from "../Constants/user-constants.js";

function registration(users = {id:[{}]},action)
{
   switch (action.type){
        case userConstants.REGISTER_REQUEST:
            return { registering: true};
        case userConstants.REGISTER_SUCCESS: 
        return {registered: true};
        case userConstants.REGISTER_FAILURE:
            return{registered : false};
        default:
            return users
    }
}
export default registration;