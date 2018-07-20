import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTags } from './redux/actions';
import List from './tag/List';
import Create from './tag/Create';

class Tags extends Component {
    componentDidMount() {
        this.props.fetchTags();
    }

    render() {
        return (
            <div>
                <h1>Event Tags</h1>
                <List />
                <Create />
            </div>
        );
    }
};

export default connect(null, {
    fetchTags
})(Tags);
