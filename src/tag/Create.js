import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTag } from '../redux/actions';

class Tags extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createTag({ name: this.state.name });
        this.setState({ name: '' });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type={'text'} name={'tag'} value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} /><button type={'submit'} className={'btn btn-primary'}>Save Tag</button>
            </form>
        );
    }
};

export default connect(null, {
    createTag
})(Tags);
