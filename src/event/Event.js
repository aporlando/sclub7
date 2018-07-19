import React, { Component } from 'react';
import './Event.css';

export default class Event extends Component {
    render() {
        const { title, description } = this.props.event;
        return (
            <div onClick={this.handleClick} style={{ position: 'relative' }}>
                <strong>{title}</strong>
                {description && <div className={'eventDescription'}>{description}</div>}
            </div>
        );
    }
};
