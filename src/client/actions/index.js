import axios from 'axios';
import {config} from '../../../config';

export const FETCH_FAVOURITES = 'fetch_favourites';

function fetchFavourites(query) {
    return async (dispatch) => {
        let url;
        if (query) {
            url = `https://maps.googleapis.com/maps/api/js?q=${query}?key=${config.GOOGLE_API_KEY}&callback=initMap`;

        } else {
            url = `https://maps.googleapis.com/maps&key = ${config.GOOGLE_API_KEY}`;
        }
        const result = await axios.get(url);
        dispatch({
            type: FETCH_FAVOURITES,
            payload: result.data.favourites
        });
    };
}
export default fetchFavourites;