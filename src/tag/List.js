import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tag from "./Tag";

class Tags extends Component {
    render() {
        const { tags = [] } = this.props;

        return (
            <ul>
                {Object.values(tags).map(tag => {
                    return <li key={tag.id}><Tag {...tag} /></li>
                })}
            </ul>
        );
    }
};

function mapStateToProps(state) {
    return {
        tags: state.tags.data
    }
}

export default connect(mapStateToProps)(Tags);
