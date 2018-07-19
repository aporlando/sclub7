import { combineReducers } from 'redux';
import { CREATE_EVENT, FETCH_EVENTS, FETCH_TAGS} from '../types';

const initialState = {
    list: []
};
const tags = (state = initialState, action) => {
    switch(action.type) {
        case `${FETCH_TAGS}_SUCCESS`:
            return {
                ...state,
                list: action.payload.data.objs || []
            }
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
