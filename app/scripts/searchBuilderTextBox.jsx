/**
 * @jsx React.DOM
 */
var app = app || {};

(function () {
    'use strict';

    app.searchBuilderTextBox = React.createClass({
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
