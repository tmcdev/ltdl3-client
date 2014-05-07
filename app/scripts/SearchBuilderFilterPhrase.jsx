/**
 * @jsx React.DOM
 */
var React = require('react');

(function () {
    'use strict';

    var choices = [
        {key: 'choice0', label: 'for any of the words'},
        {key: 'choice1', label: 'for all of the words'},
        {key: 'choice2', label: 'for the exact phrase'}
    ];

    var excludes = [
        {key: 'choice3', label: 'excluding the words'},
        {key: 'choice4', label: 'excluding the phrase'}
    ];

    module.exports = React.createClass({
        enable: function () {
            this.refs.button.getDOMNode().removeAttribute('disabled');
        },
        disable: function () {
            this.refs.button.getDOMNode().setAttribute('disabled', 'disabled');
        },
        getInitialState: function () {
            return {filterPhrase: "for any of the words"};
        },
        componentDidUpdate: function () {
            if (!this.props.showExcludes) {
                var excludesLabels = excludes.map(function (el) { return el.label });
                if (excludesLabels.indexOf(this.state.filterPhrase) !== -1) {
                    this.setState({filterPhrase: choices[0].label});
                }
            }
        },
        handleClick: function (event) {
            this.setState({filterPhrase: event.target.getAttribute('data-value')});
            this.props.focusTextBox();
        },
        render: function() {
            var myChoices = choices;
            if (this.props.showExcludes) {
                myChoices = myChoices.concat(excludes);
            }
            var renderedChoices = myChoices.map(function (choice) {
                return <li key={choice.key}><a data-value={choice.label} onClick={this.handleClick} href="#">{choice.label}</a></li>;
            }.bind(this));
            return (
                <div className="input-group-btn">
                    <button ref="button" type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                        {this.state.filterPhrase} <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu" role="menu">
                        {renderedChoices}
                    </ul>
                </div>
            );
        }
    });
}());
