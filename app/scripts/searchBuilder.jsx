/**
 * @jsx React.DOM
 */
var app = app || {};

(function () {
    'use strict';

    var SearchBuilderComponent = app.SearchBuilderComponent;

    app.SearchBuilder = React.createClass({
        add: function (index) {
            var components = this.state.components;
            components.push(<SearchBuilderComponent key={"comp"+(index+1)} index={index+1} add={this.add} remove={this.remove}/>);
            this.setState({
                components: components
            });
        },
        remove: function (index) {
            var components = this.state.components;
            components.splice(index,1);
            this.setState({
                components: components
            });
        },
        getInitialState: function () {
            return {
                components: [<SearchBuilderComponent key="comp0" index={0} add={this.add} remove={this.remove}/>]
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
