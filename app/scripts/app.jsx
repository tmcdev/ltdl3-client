/**
 * @jsx React.DOM
 */
var GithubRibbon = require('./GithubRibbon.jsx');
var SearchBuilder = require('./SearchBuilder.jsx');
var Footer = require('./Footer.jsx');

var app = app || {};

(function () {
    'use strict';

/* TODO: Subcomponents use data- attributes. Use props instead. */

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
