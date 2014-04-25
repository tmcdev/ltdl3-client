/**
 * @jsx React.DOM
 */
var app = app || {};

(function () {
    'use strict';

    var SearchBuilderComponent = app.SearchBuilderComponent;

    app.SearchBuilder = React.createClass({displayName: 'SearchBuilder',
        add: function (index) {
            var components = this.state.components;
            components.push(SearchBuilderComponent( {key:"comp"+(index+1), index:index+1, add:this.add, remove:this.remove}));
            this.setState({
                components: components
            });
        },
        remove: function (index) {
            var components = this.state.components;
            delete(components[index]);
            this.setState({
                components: components
            });
        },
        getInitialState: function () {
            return {
                components: [SearchBuilderComponent( {key:"comp0", index:0, add:this.add, remove:this.remove})]
            }
        },
        render: function() {
            return (
                React.DOM.div( {className:"jumbotron"}, 
                    React.DOM.form( {role:"form"}, 
                        React.DOM.div(null, 
                            this.state.components
                        ),
                        React.DOM.div( {className:"pull-right"}, 
                            React.DOM.button( {type:"submit", className:"btn btn-default"}, "Search ", React.DOM.span( {className:"glyphicon glyphicon-search"}))
                        )
                    )
                )
            );
        }
    });
}());
