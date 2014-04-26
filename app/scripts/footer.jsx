/**
 * @jsx React.DOM
 */
(function () {
    'use strict';

    module.exports = React.createClass({
        render: function() {
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
