/**
 * @jsx React.DOM
 */
var app = app || {};

(function () {
    'use strict';

/* TODO: Browserify  */

    var GithubRibbon = app.GithubRibbon;
    var SearchBuilder = app.SearchBuilder;
    var Footer = app.Footer;

    var LtdlApp = React.createClass({
        render: function () {
            return (
                <div className="container">
                    <GithubRibbon/>
                    <h1>LTDL3 Search Builder Prototype</h1>
                    <SearchBuilder/>
                    <Footer/>
                </div>
            );
        }
    });

    React.renderComponent(
        <LtdlApp/>,
        document.getElementById('content')
    );
}());
