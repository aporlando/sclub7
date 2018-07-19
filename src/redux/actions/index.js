import { FETCH_EVENTS } from "../types";
import axios from 'axios';

axios.defaults.baseURL = '//0.0.0.0:9393/rest';
axios.defaults.withCredentials = true;

export const fetchEvents = () => {
    return {
        type: FETCH_EVENTS,
        payload: axios.get('/meeting')
    }
};

export const fetchTags = () => {
    return {
        type: FETCH_EVENTS,
        payload: axios.get('/tag')
    }
};
