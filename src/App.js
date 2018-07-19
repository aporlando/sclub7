import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import rootReducer from './redux/reducers';
import storeEnhancers from './redux/enhancers';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Events from './Events';

const store = createStore(
    rootReducer,
    storeEnhancers
);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className={'App'}>
                        {/*<ul>*/}
                            {/*<li>*/}
                                {/*<Link to="/">Events</Link>*/}
                            {/*</li>*/}
                        {/*</ul>*/}
                        <Route exact path="/" component={Events} />
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
