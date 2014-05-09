/**
 * @jsx React.DOM
 */
var React = require('react');
var SearchBuilderComponent = require('./SearchBuilderComponent.jsx');
var query = require('./query');

(function () {
    'use strict';

    module.exports = React.createClass({
        add: function (index) {
            var components = this.state.components;
            components.push(<SearchBuilderComponent
                value=""
                key={"comp"+(index+1)}
                index={index+1}
                showExcludes={true}
                add={this.add}
                remove={this.remove}
                setQueryExpression={query.setQueryExpression}
                deleteQueryExpression={query.deleteQueryExpression}/>);
            this.setState({
                components: components
            });
        },
        remove: function (index) {
            var components = this.state.components;
            // If deleting the first component, turn off excludes for the new first component
            if (!components[index].props.showExcludes) {
                var firstIndex = index+1;
                while (!components[firstIndex]) {
                    firstIndex++;
                }
                var first = components[firstIndex];
                components[firstIndex] =
                    <SearchBuilderComponent
                        value = {first.props.value}
                        key={first.props.key}
                        index={first.props.index}
                        showExcludes={false}
                        add={first.props.add}
                        remove={first.props.remove}
                        setQueryExpression={first.props.setQueryExpression}
                        deleteQueryExpression={query.deleteQueryExpression}
                    />;
            }
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
                        showExcludes={false}
                        add={this.add}
                        remove={this.remove}
                        setQueryExpression={query.setQueryExpression}
                        deleteQueryExpression={query.deleteQueryExpression}
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
