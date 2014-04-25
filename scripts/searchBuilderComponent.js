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

    app.SearchBuilderComponent = React.createClass({displayName: 'SearchBuilderComponent',
        focusTextBox: function () {
            this.refs.textBox.focus();
        },
        setTextBox: function (value) {
            this.refs.textBox.value(value);
        },
        componentDidMount: function () {
            this.focusTextBox();
        },
        render: function() {
            return (
                React.DOM.div( {className:"form-group"}, 
                    React.DOM.div( {className:"input-group"}, 
                        searchBuilderFilterType( {focusTextBox:this.focusTextBox, setTextBox:this.setTextBox}),
                        searchBuilderFilterPhrase( {focusTextBox:this.focusTextBox}),
                        searchBuilderTextBox( {ref:"textBox"}),
                        searchBuilderAdd( {index:this.props.index, add:this.props.add, remove:this.props.remove})
                    )
                )
            );
        }
    });
}());

