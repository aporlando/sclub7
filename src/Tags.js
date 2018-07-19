import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTags } from './redux/actions';

class Tags extends Component {
    componentDidMount() {
        this.props.fetchTags();
    }

    render() {
        const { tags = [] } = this.props;
        return (
            <div>
                <h1>Event Tags</h1>
                <ul>
                    {tags.map(tag => {
                        return <li key={tag.id}>{tag.name}</li>;
                    })}
                </ul>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {
        tags: state.tags.list || []
    }
}

export default connect(mapStateToProps, {
    fetchTags
})(Tags);
