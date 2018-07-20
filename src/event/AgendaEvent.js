import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AgendaEvent.css';
import Event from './Event';
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
                        const style = tag.color ? {
                            backgroundColor: `${tag.color}`,
                            color: invertColor(tag.color, true)
                        } : null;
                        return (
                            <span key={tag.id} className={'ml-1 badge badge-pill badge-secondary'} style={style}>{tag.name}</span>
                        );
                    })}
                </div>
                }
            </div>
        );
    }
};

function mapStateToProps(_, initialProps) {
    const { event: { tags: tagIdList = [ 1, 2 , 3, 4] }} = initialProps;
    const tagSelector = createSelector(
        state => state.tags.list,
        (tags) => {
            console.log(tags);
            return tags.filter(tag => { return tagIdList.includes(tag.id)});
        }
    )
    return (state) => ({
        tags: tagSelector(state)
    });
}

export default connect(mapStateToProps)(AgendaEvent);


function invertColor(hex, bw) {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
    }
    var r = parseInt(hex.slice(0, 2), 16),
        g = parseInt(hex.slice(2, 4), 16),
        b = parseInt(hex.slice(4, 6), 16);
    if (bw) {
        // http://stackoverflow.com/a/3943023/112731
        return (r * 0.299 + g * 0.587 + b * 0.114) > 186
            ? '#000000'
            : '#FFFFFF';
    }
    // invert color components
    r = (255 - r).toString(16);
    g = (255 - g).toString(16);
    b = (255 - b).toString(16);
    // pad each with zeros and return
    return "#" + padZero(r) + padZero(g) + padZero(b);
}

function padZero(str, len) {
    len = len || 2;
    var zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
}
