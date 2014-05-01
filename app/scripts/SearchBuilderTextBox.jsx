/**
 * @jsx React.DOM
 */
var React = require('react');

(function () {
    'use strict';

    module.exports = React.createClass({
        focus: function () {
            this.refs.textInputElement.getDOMNode().focus();
        },
        getInitialState: function () {
            return {value: ''};
        },
        handleChange: function (event) {
            this.props.enablePhraseFilter();
            this.setState({value: event.target.value});
        },
        render: function () {
            return (
                <input type="text" value={this.state.value} ref="textInputElement" onChange={this.handleChange} className="form-control" placeholder="Tip: use (*) or (?) to find word variants like legislat* and wom?n"></input>
            )
        }
    });
}());
