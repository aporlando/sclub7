import { FETCH_EVENTS, CREATE_EVENT, FETCH_TAGS, CREATE_TAG, UPDATE_EVENTS } from "../types";
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

export const fetchTags = ({ meeting } = {}) => {
    const request = axios.get('/tag', {
        params: {
            meeting: meeting && meeting.id
        }
    });
    return {
        type: FETCH_TAGS,
        payload: request
    }
};

export const createTag = ({ name }) => {
    const data = new FormData();
    data.append("model", JSON.stringify({
        name
    }));
    return {
        type: CREATE_TAG,
        payload: axios.post('/tag', data)
    }
};

export const addTag = ({ meeting, tag }) => {
    const data = new FormData();
    data.append("model", JSON.stringify({
        ...meeting
    }));
    return {
        type: UPDATE_EVENTS,
        payload: axios.put(`/meeting/${meeting.id}`, data, {
            params: {
                tag: tag.id
            }
        })
    }
};
