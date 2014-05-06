/**
 * @jsx React.DOM
 */
var React = require('react');

(function () {
    'use strict';

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
        handleClick: function (event) {
            this.setState({filterPhrase: event.target.getAttribute('data-value')});
            this.props.focusTextBox();
        },
        render: function() {
            var choices = [
                {key: 'choice0', label: 'for any of the words'},
                {key: 'choice1', label: 'for all of the words'},
                {key: 'choice2', label: 'for the exact phrase'}
            ];
            if (this.props.showExcludes) {
                choices.push(
                    {key: 'choice3', label: 'excluding the words'},
                    {key:'choice4', label: 'excluding the phrase'})
                ;
            }
            var renderedChoices = choices.map(function (choice) {
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
