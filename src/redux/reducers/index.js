import { combineReducers } from 'redux';
import { FETCH_EVENTS } from '../types';

const initialState = {
    list: []
};
const tags = (state = initialState, action) => {
    return state;
};
const events = (state = initialState, action) => {
    if (action.type === `${FETCH_EVENTS}_SUCCESS`) {
        return {
            ...state,
            list: action.payload.data.objs || []
        };
    }
    return state;
};

export default combineReducers({
    tags,
    events
});
