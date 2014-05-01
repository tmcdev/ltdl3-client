/**
 * @jsx React.DOM
 */
var React = require('react');

(function () {
    'use strict';

    module.exports = React.createClass({
        getInitialState: function () {
            return {};
        },
        show: function (value) {
            this.setState(value);
            console.dir(this.state);
        },
        render: function () {
            var data = this.state.data,
                response,
                numFound,
                docs,
                start,
                renderedRange,
                renderedResults;

            if (data) {
                response = data.response;
            }

            if (response && response.docs instanceof Array) {
                docs = response.docs;
                numFound = response.numFound;
                start = response.start;
                renderedRange = <div>{start+1}-{start+docs.length} of {numFound}</div>;
                renderedResults = <ol className="ltdl-search-results">
                                    {docs.map(function (doc) {
                                        return <li key={doc.id}><a href="#">{doc.ti}</a></li>;
                                    }.bind(this))}
                                </ol>;
            }


            return (
                <div>
                    {renderedRange}
                    {renderedResults}
                </div>
            );
        }
    });
}());
