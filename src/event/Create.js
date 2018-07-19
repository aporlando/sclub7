import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

export default class Create extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log('handle submit', e);
    }
    render() {
        const { start, end } = this.props;
        const defaultStart = moment(start).format('MM/DD/YYYY'),
            defaultEnd = moment(end).format('MM/DD/YYYY');
        return (
            <form onSubmit={this.handleSubmit}>
                <div className={'form-group'}>
                    <label>Title
                        <input name={'title'} type={'text'} className={'form-control'}/>
                    </label>
                </div>
                <div className={'form-group'}>
                    <label>Description
                        <input name={'description'} type={'text'} className={'form-control'}/>
                    </label>
                </div>
                <div className={'form-group'}>
                    <label>Start
                        <input name={'startdate'} type={'date'} defaultValue={defaultStart} className={'form-control'}/>
                    </label>
                </div>
                <div className={'form-group'}>
                    <label>Stop
                        <input name={'enddate'} type={'date'} defaultValue={defaultEnd} className={'form-control'}/>
                    </label>
                </div>
                <button type={'submit'} className={'btn btn-primary'}>Save Event</button>
                <Link to={'/'} type={'button'} className={'btn btn-outline-secondary ml-1'}>Cancel</Link>
            </form>
        );
    }
}
