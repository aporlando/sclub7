import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEvents } from './redux/actions/index';
import BigCalendar from 'react-big-calendar';
import Create from './event/Create';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Events.css';

BigCalendar.momentLocalizer(moment);

class Events extends Component {
    constructor(props) {
        super(props);

        this.state = {
            createMode: false
        };
        this.createEvent = this.createEvent.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.onCreateEvent = this.onCreateEvent.bind(this);
    }

    componentDidMount() {
        this.props.fetchEvents();
    }

    createEvent({ start, end }) {
        this.setState({
            createMode: true,
            start,
            end
        });
    }

    onCreateEvent() {
        this.setState({
            createMode: false
        });
    }

    handleClick(e) {
        const {
            clientX,
            clientY
        } = e;
        this.posX = clientX;
        this.posY = clientY;
    }

    render() {
        const { events } = this.props;
        const { start, end } = this.state;
        return (
            <div className={'Home'} onClick={this.handleClick}>
                {this.state.createMode &&
                    <div className="popover fade show bs-popover-right" role="tooltip" id="popover859737" x-placement="right"
                        style={{
                            position: 'absolute',
                            willChange: 'transform',
                            top: '0px',
                            left: '0px',
                            transform: `translate3d(${this.posX + 8}px, ${this.posY - 42}px, 0px)`,
                            maxWidth: '25vw'
                        }}>
                        <div className="arrow" style={{ top: '34px' }}></div>
                        <div className="popover-header">Create Event</div>
                        <div className="popover-body"><Create onSubmit={this.onCreateEvent}/></div>
                    </div>
                }
                <BigCalendar
                    events={events}
                    selectable={true}
                    onSelectSlot={this.createEvent}
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
