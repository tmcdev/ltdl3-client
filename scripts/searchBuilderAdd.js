/**
 * @jsx React.DOM
 */
var app = app || {};

// TODO: magic value plusOrMinus = "plus" or "minus" should be booleanized or enumed

(function () {
    'use strict';

    app.searchBuilderAdd = React.createClass({displayName: 'searchBuilderAdd',
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
                React.DOM.div( {className:"input-group-btn"}, 
                    React.DOM.button( {style:revisePulldownStyle, type:"button", className:"btn btn-default dropdown-toggle", 'data-toggle':"dropdown"}, this.state.boolean, " ", React.DOM.span( {className:"caret"})),
                    React.DOM.button( {type:"button", onClick:this.remove, className:"btn btn-default {toggleClass}", 'data-toggle':"dropdown"}, React.DOM.span( {className:"glyphicon glyphicon-" + this.state.plusOrMinus})),
                    React.DOM.ul( {className:"dropdown-menu dropdown-menu-right", role:"menu"}, 
                        React.DOM.li(null, React.DOM.a( {'data-boolean':"AND", onClick:this.add, href:"#"}, "AND")),
                        React.DOM.li(null, React.DOM.a( {'data-boolean':"OR", onClick:this.add, href:"#"}, "OR")),
                        React.DOM.li(null, React.DOM.a( {'data-boolean':"NOT", onClick:this.add, href:"#"}, "NOT"))
                    )
                )
            )
        }
    });
}());
