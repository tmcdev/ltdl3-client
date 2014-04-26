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
        render: function () {
            return (
                <input ref="textInputElement" className="form-control" type="text" placeholder="Tip: use (*) or (?) to find word variants like legislat* and wom?n"></input>
            )
        }
    });
}());
