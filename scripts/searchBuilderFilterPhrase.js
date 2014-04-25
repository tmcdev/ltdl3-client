/**
 * @jsx React.DOM
 */
var app = app || {};

(function () {
    'use strict';

    app.searchBuilderFilterPhrase = React.createClass({displayName: 'searchBuilderFilterPhrase',
        getInitialState: function () {
            return {filterPhrase: "for any of the words"};
        },
        handleClick: function (event) {
            this.setState({filterPhrase: event.target.getAttribute('data-value')});
            this.props.focusTextBox();
        },
        render: function() {
            return (
                React.DOM.div( {className:"input-group-btn"}, 
                    React.DOM.button( {type:"button", className:"btn btn-default dropdown-toggle", 'data-toggle':"dropdown"}, 
                        this.state.filterPhrase, " ", React.DOM.span( {className:"caret"})
                    ),
                    React.DOM.ul( {className:"dropdown-menu", role:"menu"}, 
                        React.DOM.li(null, React.DOM.a( {'data-value':"for any of the words", onClick:this.handleClick, href:"#"}, "for any of the words")),
                        React.DOM.li(null, React.DOM.a( {'data-value':"for all of the words", onClick:this.handleClick, href:"#"}, "for all of the words")),
                        React.DOM.li(null, React.DOM.a( {'data-value':"for the exact phrase", onClick:this.handleClick, href:"#"}, "for the exact phrase"))
                    )
                )
            );
        }
    });
}());
