import React, { Component } from 'react';
import { connect } from 'react-redux';

class Tags extends Component {
    render() {
        const { tags = [] } = this.props;
        return (
            <ul>
                {tags.map(tag => {
                    return <li key={tag.id}>{tag.name}</li>;
                })}
            </ul>
        );
    }
};

function mapStateToProps(state) {
    return {
        tags: state.tags.list || []
    }
}

export default connect(mapStateToProps)(Tags);
