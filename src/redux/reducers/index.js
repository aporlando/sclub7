import { combineReducers } from 'redux';
import { CREATE_EVENT, FETCH_EVENTS, FETCH_TAGS, CREATE_TAG } from '../types';

const initialState = {
    list: []
};
const tags = (state = initialState, action) => {
    switch(action.type) {
        case `${FETCH_TAGS}_SUCCESS`:
            return {
                ...state,
                list: action.payload.data.objs.map(tag => {
                    return {
                        ...tag,
                        color: stringToColour(tag.name)
                    }
                }) || []
            }
        case `${CREATE_TAG}_SUCCESS`:
            if (!action.payload.data.objs) return state;
            return {
                ...state,
                list: [...state.list, action.payload.data.objs]
            };
        default:
            return state;
    }
};
const events = (state = initialState, action) => {
    switch (action.type) {
        case `${FETCH_EVENTS}_SUCCESS`:
            return {
                ...state,
                list: action.payload.data.objs || []
            };
        case `${CREATE_EVENT}_SUCCESS`:
            if (!action.payload.data.objs) return state;
            return {
                ...state,
                list: [...state.list, action.payload.data.objs]
            };
        default:
            return state;
    }
};

export default combineReducers({
    tags,
    events
});


var stringToColour = function(str) {
    let hash = 0;

    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    let colour = '#';
    for (let i = 0; i < 3; i++) {
        let value = (hash >> (i * 8)) & 0xFF;
        colour += ('00' + value.toString(16)).substr(-2);
    }
    return colour;
}
