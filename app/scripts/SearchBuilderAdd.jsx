/**
 * @jsx React.DOM
 */
var React = require('react');

// TODO: magic value plusOrMinus = "plus" or "minus" should be booleanized or enumed

(function () {
    'use strict';

    module.exports = React.createClass({
        getInitialState: function () {
            return {
                plusOrMinus: "plus",
                boolean: ""
            }
        },
        add: function (event) {
            this.setState({boolean: event.target.getAttribute('data-boolean')});

            if (this.state.plusOrMinus === "plus") {
                this.setState({plusOrMinus: "minus"});
                this.props.add(this.props.index);
            }
        },
        remove: function (event) {
            if (this.state.plusOrMinus === "minus") {
                this.props.remove(this.props.index);
            }
        },
        render: function () {
            var revisePulldownStyle = {display: "inherit"};
            var toggleClass = "";
            if (this.state.plusOrMinus === "plus") {
                revisePulldownStyle = {display: "none"}
                toggleClass = "dropdown-toggle"
            }
            return (
                <div className="input-group-btn">
                    <button style={revisePulldownStyle} type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">{this.state.boolean} <span className="caret"></span></button>
                    <button type="button" onClick={this.remove} className="btn btn-default {toggleClass}" data-toggle="dropdown"><span className={"glyphicon glyphicon-" + this.state.plusOrMinus}></span></button>
                    <ul className="dropdown-menu dropdown-menu-right" role="menu">
                        <li><a data-boolean="AND" onClick={this.add} href="#">AND</a></li>
                        <li><a data-boolean="OR" onClick={this.add} href="#">OR</a></li>
                        <li><a data-boolean="NOT" onClick={this.add} href="#">NOT</a></li>
                    </ul>
                </div>
            )
        }
    });
}());
