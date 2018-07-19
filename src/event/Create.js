import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createEvent } from '../redux/actions';

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            startTime: moment(props.start).format('YYYY-MM-DDTHH:mm'),
            endTime: moment(props.end || moment().add(1, 'hour')).format('YYYY-MM-DDTHH:mm')
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.createEvent({
            ...this.state
        });
    }
    render() {
        const { title, description, startTime, endTime } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className={'form-group'}>
                    <label>Title
                        <input name={'title'} type={'text'} className={'form-control'} value={title} onChange={(e) => this.setState({ title: e.target.value })}/>
                    </label>
                </div>
                <div className={'form-group'}>
                    <label>Description
                        <input name={'description'} type={'text'} className={'form-control'} value={description} onChange={(e) => this.setState({ description: e.target.value })}/>
                    </label>
                </div>
                <div className={'form-group'}>
                    <label>Start
                        <input name={'startdate'} type={'datetime-local'} value={startTime} className={'form-control'} onChange={(e) => this.setState({ startTime: e.target.value })}/>
                    </label>
                </div>
                <div className={'form-group'}>
                    <label>Stop
                        <input name={'enddate'} type={'datetime-local'} value={endTime} className={'form-control'} onChange={(e) => this.setState({ endTime: e.target.value })}/>
                    </label>
                </div>
                <button type={'submit'} className={'btn btn-primary'}>Save Event</button>
                <Link to={'/'} type={'button'} className={'btn btn-outline-secondary ml-1'}>Cancel</Link>
            </form>
        );
    }
}

export default connect(null, {
    createEvent
})(Create);
