import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEvents } from './redux/actions/index';

class Home extends Component {
    componentDidMount() {
        this.props.fetchEvents();
    }

    render() {
        return <div>There are {this.props.events.length} events.</div>;
    }
};

function mapStateToProps(state) {
    return {
        events: state.events.list
    };
};

export default connect(mapStateToProps, {
    fetchEvents
})(Home);
