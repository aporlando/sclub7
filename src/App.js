import React, { Component } from 'react';
import './App.css';
// import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';


class App extends Component {
  render() {
    return (
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
    );
  }
}

export default App;
