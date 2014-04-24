/**
 * @jsx React.DOM
 */
var app = app || {};

(function () {
    'use strict';

/* TODO: Browserify  */

    var GithubRibbon = app.GithubRibbon;
    var LtdlApp = React.createClass({
        render: function () {
            return (
                <GithubRibbon/>
            );
        }
    });

    React.renderComponent(
        <LtdlApp/>,
        document.getElementById('content')
    );
}());
