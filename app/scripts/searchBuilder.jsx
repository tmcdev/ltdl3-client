/**
 * @jsx React.DOM
 */
var app = app || {};

(function () {
    'use strict';

    var SearchBuilderComponent = app.SearchBuilderComponent;

    app.SearchBuilder = React.createClass({
        render: function() {
            return (
                <div className="jumbotron">
                    <form role="form">
                        <div>
                            <SearchBuilderComponent/>
                        </div>
                        <div className="pull-right">
                            <button type="submit" className="btn btn-default">Search <span className="glyphicon glyphicon-search"></span></button>
                        </div>
                    </form>
                </div>
            );
        }
    });
}());
