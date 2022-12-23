import axios from 'axios';
import authHeader from "./auth-header.js";
const GOOGLE_API_KEY = "../../../config.js";

export class UserService {
    getPublicContent() {
        return axios.get(GOOGLE_API_KEY + " all");
    }
    getUserBoard () {
        return axios.get(GOOGLE_API_KEY + "user", {headers: authHeader()});
    }
    getAdminBoard(){
        return axios.get(GOOGLE_API_KEY + "admin", {headers: authHeader()
    });
}
}
export default new UserService();