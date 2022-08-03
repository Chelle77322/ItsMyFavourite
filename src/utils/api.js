import axios from "axios";
import GOOGLE_API_KEY from "../../config"

//eslint-disable-next-line
export default  {
    //Looks for a Google Place
    
    googlePlace: function(query) {
        return axios.get (`https://maps.googleapis.com/maps/api/js?q=${query}?key=${GOOGLE_API_KEY}&callback=initMap`);
    },
    //Saves the search to the mongodb associated by booking_id
    SavePlace: function(placesInfo) {
        return axios.post(`/${placesInfo.id}`);
    },
    //Gets the places you have saved from the mongodb
    getPlaces: async function() {
        try {
            const result = await axios.get("./api/GooglePlace");
            return result.data;
        } catch (error) {
            throw error;
        }
    },
    //This gets all places associated with booking_id of a registered user
    getPlace : function(user)
    {
        return axios.get("./api/GooglePlace" + URLSearchParams);
    },
    //This will delete a specific record associated with the booking_id of a registered user
    deletePlace: function (user){
        return axios.delete("./api/GooglePlace" + user);
    }
};