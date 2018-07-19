import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import rootReducer from './redux/reducers';
import storeEnhancers from './redux/enhancers';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Events from './Events';
import Tags from './Tags';
import Create from './event/Create';

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
                        <nav className="navbar navbar-dark bg-dark navbar-expand">
                            <span className={'navbar-brand'}>S Club 7</span>
                            <div className={'navbar-collapse collapse'}>
                                <ul className="navbar-nav mr-auto">
                                    <li className={`nav-item `}>
                                        <NavLink exact activeClassName={'active'} className="nav-link" to={'/'}>Events</NavLink>
                                    </li>
                                    <li className={`nav-item `}>
                                        <NavLink activeClassName={'active'} className="nav-link" to={'/tags'}>Tags</NavLink>
                                    </li>
                                </ul>
                                <NavLink to={'/create'} activeClassName={'d-none'} className="btn btn-outline-primary" type="button">Create Event</NavLink>
                            </div>
                        </nav>
                        <div className={'container-fluid mt-2'}>
                            <Route exact path="/" component={Events} />
                            <Route exact path="/tags" component={Tags} />
                            <Route exact path="/create" component={Create} />
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
