import axios from 'axios';
import authHeader from "./auth-header";
const GOOGLE_API_KEY = "http://localhost:3000/api";

export class userService {
    getPublicContent() {
        return axios. get(GOOGLE_API_KEY + " all");
    }
    getUserBoard () {
        return axios.get(GOOGLE_API_KEY + "user", {headers: authHeader()});
    }
    getAdminBoard(){
        return axios.get(GOOGLE_API_KEY + "admin", {headers: authHeader()
    });
}
}
export default new userService();