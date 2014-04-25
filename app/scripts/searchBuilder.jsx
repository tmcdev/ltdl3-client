/**
 * @jsx React.DOM
 */
var app = app || {};

(function () {
    'use strict';

    var SearchBuilderComponent = app.SearchBuilderComponent;

    app.SearchBuilder = React.createClass({
        add: function () {
            var components = this.state.components;
            components.push(<SearchBuilderComponent add={this.add}/>);
            this.setState({
                components: components
            });
        },
        getInitialState: function () {
            return {
                components: [<SearchBuilderComponent add={this.add}/>]
            }
        },
        render: function() {
            return (
                <div className="jumbotron">
                    <form role="form">
                        <div>
                            {this.state.components}
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
