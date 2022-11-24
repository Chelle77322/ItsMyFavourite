import axios from "axios";
const GOOGLE_API_KEY = "http://localhost:8080/api";
axios.create({
    baseURL: GOOGLE_API_KEY,
    headers: {
        "Content-Type": "application/json"
    }
});

export class AuthService {
    async login(id, password){
        const response = await axios.post(`${GOOGLE_API_KEY}signIn`, {id, password});
        if(response.data.accessToken)
        {localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
    }

    logout () { 
        localStorage.removeItem("user");
    }

    register(id, first_name, last_name, password, favourites){
        return axios.Axios(GOOGLE_API_KEY + "signUp",{
            id, first_name, last_name, password, favourites
        });
    }
}
export default new AuthService();