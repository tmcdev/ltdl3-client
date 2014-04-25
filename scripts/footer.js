/**
 * @jsx React.DOM
 */
var app = app || {};

(function () {
    'use strict';

    app.Footer = React.createClass({displayName: 'Footer',
        render: function() {
            return (
                React.DOM.div( {id:"footer"}, 
                    React.DOM.div( {className:"container text-muted text-center small"}, 
                        React.DOM.p(null, "© 2014 Regents of the University of California"),
                        React.DOM.p(null, React.DOM.a( {href:"http://glyphicons.com/"}, "Glyphicons"), " are used on this page.")
                    )
                )
            );
        }
    });
}());
