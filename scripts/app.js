/**
 * @jsx React.DOM
 */
var app = app || {};

(function () {
    'use strict';

/* TODO: Subcomponents use data- attributes. Use props instead. */
/* TODO: Browserify  */

    var GithubRibbon = app.GithubRibbon;
    var SearchBuilder = app.SearchBuilder;
    var Footer = app.Footer;

    var LtdlApp = React.createClass({displayName: 'LtdlApp',
        render: function () {
            return (
                React.DOM.div( {className:"container"}, 
                    GithubRibbon(null),
                    React.DOM.h1(null, "LTDL3 Search Builder Prototype"),
                    SearchBuilder(null ),
                    Footer(null)
                )
            );
        }
    });

    React.renderComponent(
        LtdlApp(null),
        document.getElementById('content')
    );
}());
