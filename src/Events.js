import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEvents } from './redux/actions/index';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Events.css';

BigCalendar.momentLocalizer(moment);

class Events extends Component {
    componentDidMount() {
        this.props.fetchEvents();
    }

    render() {
        const { events } = this.props;
        return (
            <div className={'Home'}>
                <BigCalendar
                    events={events}
                />
            </div>
        );
    }
};

function mapStateToProps(state) {
    const events = (state.events.list || []).map(event => ({
        ...event,
        start: new Date(event.start_time),
        end: new Date(event.end_time),
        allDay: moment(event.end_time).diff(moment(event.start_time), 'hours') >= 24
    }));
    return {
        events
    };
};

export default connect(mapStateToProps, {
    fetchEvents
})(Events);
