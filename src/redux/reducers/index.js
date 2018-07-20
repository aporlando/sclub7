import { combineReducers } from 'redux';
import { CREATE_EVENT, FETCH_EVENTS, FETCH_TAGS, CREATE_TAG } from '../types';

const initialState = {
    data: {}
};

const normalize = (list = []) => {
    return list.reduce((result, item) => {
        return {
            ...result,
            [item.id]: item
        };
    }, {});
}
const tags = (state = initialState, action) => {
    switch(action.type) {
        case `${FETCH_TAGS}_SUCCESS`:
            const list = action.payload.data.objs || [];
            return {
                ...state,
                data: normalize(list)
            }
        case `${CREATE_TAG}_SUCCESS`:
            if (!action.payload.data.objs) return state;
            return {
                ...state,
                data: {
                    ...state.data,
                    [action.payload.data.objs.id]: action.payload.data.objs
                }
            };
        default:
            return state;
    }
};
const events = (state = initialState, action) => {
    switch (action.type) {
        case `${FETCH_EVENTS}_SUCCESS`:
            const list =action.payload.data.objs.map(event => {
                return {
                    ...event,
                    tags: event.tags.map(tag => {
                        return tag.Tag.id;
                    })
                }
            }) || [];
            return {
                ...state,
                data: normalize(list)
            };
        case `${CREATE_EVENT}_SUCCESS`:
            if (!action.payload.data.objs) return state;
            return {
                ...state,
                data: {
                    ...state.data,
                    [action.payload.data.objs.id]: action.payload.data.objs
                }
            };
        default:
            return state;
    }
};

export default combineReducers({
    tags,
    events
});
