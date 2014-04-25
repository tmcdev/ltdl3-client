/**
 * @jsx React.DOM
 */
var app = app || {};

(function () {
    'use strict';

    var searchBuilderFilterType = app.searchBuilderFilterType;
    var searchBuilderFilterPhrase = app.searchBuilderFilterPhrase;
    var searchBuilderTextBox = app.searchBuilderTextBox;
    var searchBuilderAdd = app.searchBuilderAdd;

    app.SearchBuilderComponent = React.createClass({
        focusTextBox: function () {
            this.refs.textBox.focus();
        },
        setTextBox: function (value) {
            this.refs.textBox.value(value);
        },
        render: function() {
            return (
                <div className="form-group">
                    <div className="input-group">
                        <searchBuilderFilterType focusTextBox={this.focusTextBox} setTextBox={this.setTextBox}/>
                        <searchBuilderFilterPhrase focusTextBox={this.focusTextBox}/>
                        <searchBuilderTextBox ref="textBox"/>
                        <searchBuilderAdd add={this.props.add}/>
                    </div>
                </div>
            );
        }
    });
}());

