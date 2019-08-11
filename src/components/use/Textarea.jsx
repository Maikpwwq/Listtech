import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Textarea component
export class Textarea extends Component {

    static defaultProps = {
        value: ''
    };

    static propTypes = {
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        value: PropTypes.string
    }

    state = {
        value: this.props.value
    };

    handleChange = event => {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <textarea id={this.props.id}
                name={this.props.name}
                defaultValue={this.state.value}
                onChange={this.handleChange} />
        );
    }
}