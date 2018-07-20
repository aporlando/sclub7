import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AgendaEvent.css';
import Event from './Event';
import Tag from '../tag/Tag';
import { createSelector } from 'reselect';

class AgendaEvent extends Component {
    render() {
        const { event, tags } = this.props;
        return (
            <div className={'AgendaEvent'}>
                <Event event={event} />
                {tags && tags.length > 0 &&
                <div className={'tags'}>
                    {tags.map(tag => {
                        return (
                            <Tag key={tag.id} {...tag} />
                        );
                    })}
                </div>
                }
            </div>
        );
    }
};

function mapStateToProps(state, props) {
    const tags = props.event.tags.map(tagId => {
        return state.tags.data[`${tagId}`];
    });
    return {
        tags
    };
}

export default connect(mapStateToProps)(AgendaEvent);

