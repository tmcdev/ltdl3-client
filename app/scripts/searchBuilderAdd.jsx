/**
 * @jsx React.DOM
 */
var app = app || {};

(function () {
    'use strict';

    app.searchBuilderAdd = React.createClass({
        render: function () {
            return (
                <div className="input-group-btn">
                    <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown"><span className="glyphicon glyphicon-plus"></span></button>
                    <ul className="dropdown-menu dropdown-menu-right" role="menu">
                        <li><a href="#">AND</a></li>
                        <li><a href="#">OR</a></li>
                        <li><a href="#">NOT</a></li>
                    </ul>
                </div>
            )
        }
    });
}());
