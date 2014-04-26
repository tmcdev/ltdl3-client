/**
 * @jsx React.DOM
 */
var React = require('react');
var searchBuilderFilterType = require('./searchBuilderFilterType.jsx');
var searchBuilderFilterPhrase = require('./searchBuilderFilterPhrase.jsx');
var searchBuilderTextBox = require('./searchBuilderTextBox.jsx');
var searchBuilderAdd = require('./searchBuilderAdd.jsx');

(function () {
    'use strict';

    module.exports = React.createClass({
        focusTextBox: function () {
            this.refs.textBox.focus();
        },
        setTextBox: function (value) {
            this.refs.textBox.value(value);
        },
        disablePhraseFilter: function () {
            this.refs.phraseFilter.disable();
        },
        enablePhraseFilter: function () {
            this.refs.phraseFilter.enable();
        },
        componentDidMount: function () {
            this.focusTextBox();
        },
        render: function() {
            return (
                <div className="form-group">
                    <div className="input-group">
                        <searchBuilderFilterType
                            focusTextBox={this.focusTextBox}
                            setTextBox={this.setTextBox}
                            disablePhraseFilter={this.disablePhraseFilter}
                        />
                        <searchBuilderFilterPhrase ref="phraseFilter" focusTextBox={this.focusTextBox}/>
                        <searchBuilderTextBox ref="textBox"/>
                        <searchBuilderAdd index={this.props.index} add={this.props.add} remove={this.props.remove}/>
                    </div>
                </div>
            );
        }
    });
}());

