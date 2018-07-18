import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEvents } from './redux/actions/index';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

BigCalendar.momentLocalizer(moment);

class Home extends Component {
    componentDidMount() {
        this.props.fetchEvents();
    }

    render() {
        const events = this.props.events.map(event => ({
            ...event,
            title: event.name,
            start: new Date(event.start),
            end: new Date(event.stop)
        }));
        return (
            <div>
                <div>There are {this.props.events.length} events.</div>
                <BigCalendar
                    events={events}
                />
            </div>
        );
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
