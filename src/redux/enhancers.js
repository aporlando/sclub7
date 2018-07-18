import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

let composeEnhancers = compose;
if(process.env.NODE_ENV === 'development')
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const promiseTypeSuffix = ['REQUEST', 'SUCCESS', 'ERROR'];

let storeEnhancers = composeEnhancers(
    applyMiddleware(
        thunk,
        promiseMiddleware({
            promiseTypeSuffixes: promiseTypeSuffix
        }),
    )
);

export default storeEnhancers;
