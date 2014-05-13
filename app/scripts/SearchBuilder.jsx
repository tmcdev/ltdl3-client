/**
 * @jsx React.DOM
 */
var React = require('react');
var SearchBuilderComponent = require('./SearchBuilderComponent.jsx');
var Query = require('./query');
var query = new Query();

(function () {
    'use strict';

    module.exports = React.createClass({
        add: function (index) {
            var components = this.state.components;
            components.push(<SearchBuilderComponent
                value=""
                key={"comp"+(index+1)}
                index={index+1}
                add={this.add}
                remove={this.remove}
                queryBuilder={query}/>);
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
            this.props.showResults({loading: true, data: {}});
            $.ajax({
                url: this.props.url,
                type: 'GET',
                data: {q: query.getQueryString(), wt: 'json'},
                dataType: 'json',
                success: function(data) {
                    this.props.showResults({loading: false, data: data});
                }.bind(this)
            });
            return false;
        },
        getInitialState: function () {
            return {
                components: [
                    <SearchBuilderComponent
                        value=""
                        key="comp0"
                        index={0}
                        add={this.add}
                        remove={this.remove}
                        queryBuilder={query}
                    />]
            }
        },
        render: function() {
            return (
                <div className="jumbotron">
                    <form onSubmit={this.handleSubmit} role="form">
                        <div ref="components">
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
