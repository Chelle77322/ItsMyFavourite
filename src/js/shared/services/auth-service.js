import axios from "axios";
const GOOGLE_API_URL  = "http://localhost:8080/Routes/api/";
axios.create({
    baseURL: GOOGLE_API_URL,
    headers: {
        "Content-Type": "application/json"
    }
});

export class AuthService {
    async login(_id, password){
        const response = await axios.post(`${GOOGLE_API_URL}signIn`, {_id, password});
        if(response.data.accessToken)
        {localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
    }

    logout () { 
        localStorage.removeItem("user");
    }

    register(_id, firstName, lastName, password, favourites){
        return axios.Axios(GOOGLE_API_URL  + "signUp",{
            _id, firstName, lastName, password, favourites
        });
    }
}
export default new AuthService();