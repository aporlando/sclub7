import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import rootReducer from './redux/reducers';
import storeEnhancers from './redux/enhancers';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';

const store = createStore(
    rootReducer,
    storeEnhancers
);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                        </ul>
                        <Route exact path="/" component={Home} />
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
