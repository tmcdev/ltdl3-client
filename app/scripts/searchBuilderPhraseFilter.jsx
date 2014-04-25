/**
 * @jsx React.DOM
 */
var app = app || {};

(function () {
    'use strict';

    app.searchBuilderPhraseFilter = React.createClass({
        getInitialState: function () {
            return {filterPhrase: "for any of the words"};
        },
        handleClick: function (event) {
            this.setState({filterPhrase: event.target.getAttribute('data-value')});
            this.props.focusTextBox();
        },
        render: function() {
            return (
                <div className="input-group-btn">
                    <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                        {this.state.filterPhrase} <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu" role="menu">
                        <li><a data-value="for any of the words" onClick={this.handleClick} href="#">for any of the words</a></li>
                        <li><a data-value="for all of the words" onClick={this.handleClick} href="#">for all of the words</a></li>
                        <li><a data-value="for the exact phrase" onClick={this.handleClick} href="#">for the exact phrase</a></li>
                    </ul>
                </div>
            );
        }
    });
}());
