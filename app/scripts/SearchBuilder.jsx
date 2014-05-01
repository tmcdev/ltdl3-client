/**
 * @jsx React.DOM
 */
var React = require('react');
var SearchBuilderComponent = require('./SearchBuilderComponent.jsx');

(function () {
    'use strict';

    module.exports = React.createClass({
        add: function (index) {
            var components = this.state.components;
            components.push(<SearchBuilderComponent key={"comp"+(index+1)} index={index+1} add={this.add} remove={this.remove}/>);
            this.setState({
                components: components
            });
        },
        remove: function (index) {
            var components = this.state.components;
            delete(components[index]);
            this.setState({
                components: components
            });
        },
        handleSubmit: function () {
            // JSONP hack
            $.ajax({
                url: this.props.url,
                type: 'GET',
                data: {q: 'tobacco', wt: 'json'},
                dataType: 'jsonp',
                jsonp: 'json.wrf',
                success: function(data) {
                    this.props.showResults({data: data});
                }.bind(this)
            });
            return false;
        },
        getInitialState: function () {
            return {
                components: [<SearchBuilderComponent key="comp0" index={0} add={this.add} remove={this.remove}/>]
            }
        },
        render: function() {
            return (
                <div className="jumbotron">
                    <form onSubmit={this.handleSubmit} role="form">
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
