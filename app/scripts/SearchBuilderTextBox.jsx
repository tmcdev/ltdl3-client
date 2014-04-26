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
        value: function (value) {
            this.refs.textInputElement.getDOMNode().value = value;
        },
        handleChange: function () {
            this.props.enablePhraseFilter();
        },
        render: function () {
            return (
                <input type="text" ref="textInputElement" onChange={this.handleChange} className="form-control" placeholder="Tip: use (*) or (?) to find word variants like legislat* and wom?n"></input>
            )
        }
    });
}());
