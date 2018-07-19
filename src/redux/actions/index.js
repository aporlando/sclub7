import { FETCH_EVENTS, CREATE_EVENT, FETCH_TAGS } from "../types";
import axios from 'axios';
import FormData from 'form-data';
import moment from 'moment';

axios.defaults.baseURL = '//0.0.0.0:9393/rest';
axios.defaults.withCredentials = true;

export const fetchEvents = () => {
    return {
        type: FETCH_EVENTS,
        payload: axios.get('/meeting')
    }
};

export const createEvent = ({ title, description, endTime, startTime }) => {
    const data = new FormData();
    data.append("model", JSON.stringify({
        title,
        description,
        'end_time': moment(endTime).format('YYYY-MM-DD hh:mm'),
        'start_time': moment(startTime).format('YYYY-MM-DD hh:mm')
    }));
    return {
        type: CREATE_EVENT,
        payload: axios.post('/meeting', data)
    }
};
window.createEvent = createEvent;

export const fetchTags = () => {
    return {
        type: FETCH_TAGS,
        payload: axios.get('/tag')
    }
};
