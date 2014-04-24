/**
 * @jsx React.DOM
 */
var app = app || {};

(function () {
    'use strict';

    app.Footer = React.createClass({
        render: function() {
            var style = {
                position: 'absolute',
                top: '0',
                right: '0',
                border: '0',
            };
            return (
                <div id="footer">
                    <div className="container text-muted text-center small">
                        <p>&copy; 2014 Regents of the University of California</p>
                        <p><a href="http://glyphicons.com/">Glyphicons</a> are used on this page.</p>
                    </div>
                </div>
            );
        }
    });
}());
