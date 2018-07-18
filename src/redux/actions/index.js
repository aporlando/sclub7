import { FETCH_EVENTS } from "../types";
import axios from 'axios';

axios.defaults.baseURL = '//localhost:5000';

export const fetchEvents = () => {
    return {
        type: FETCH_EVENTS,
        payload: axios.get('/events')
    }
};

export const fetchTags = () => {
    return {
        type: FETCH_EVENTS,
        payload: axios.get('/tags')
    }
};
