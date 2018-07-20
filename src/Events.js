import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEvents, fetchTags } from './redux/actions/index';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Events.css';
import Event from './event/Event';
import AgendaEvent from './event/AgendaEvent';

BigCalendar.momentLocalizer(moment);

class Events extends Component {
    componentDidMount() {
        this.props.fetchEvents();
        this.props.fetchTags();
    }

    render() {
        const { events } = this.props;
        return (
            <div className={'Events'}>
                <h1>Community Events</h1>
                <BigCalendar
                    events={events}
                    components={{
                        event: Event,
                        agenda: {
                            event: AgendaEvent
                        }
                    }}
                    popup
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
    fetchEvents,
    fetchTags
})(Events);
