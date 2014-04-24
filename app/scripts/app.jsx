/**
 * @jsx React.DOM
 */
var app = app || {};

(function () {
    'use strict';

/* TODO: Browserify  */

    var GithubRibbon = app.GithubRibbon;
    var SearchBuilder = app.SearchBuilder;
    var LtdlApp = React.createClass({
        render: function () {
            return (
                <div className="container">
                    <GithubRibbon/>
                    <h4>LTDL3 Search Builder Prototype</h4>
                    <SearchBuilder/>
                </div>
            );
        }
    });

    React.renderComponent(
        <LtdlApp/>,
        document.getElementById('content')
    );
}());
