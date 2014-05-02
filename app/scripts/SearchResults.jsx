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
        },
        render: function () {
            var data = this.state.data,
                response,
                numFound,
                docs,
                start,
                renderedRange,
                renderedResults;

            if (this.state.loading) {
                return (
                    <div className="progress progress-striped active">
                        <div className="progress-bar progress-bar-indeterminate" role="progressbar">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                );
            }

            if (data) {
                response = data.response;
            }

            if (response && response.docs instanceof Array) {
                docs = response.docs;
                numFound = response.numFound;
                start = response.start;
                if (numFound > 0) {
                    renderedRange = <div>{start+1}-{start+docs.length} of {numFound}</div>;
                } else {
                    renderedRange = <div>No results found.</div>;
                }
                console.dir(docs);
                renderedResults = <ol className="list-unstyled">
                                    {docs.map(function (doc) {
                                        return <li key={doc.id}>
                                            <div className="pull-right checkbox">
                                                <label>
                                                    <input type="checkbox"> Bookmark</input>
                                                </label>
                                            </div>
                                            <a href="#">{doc.ti}</a>
                                        </li>;
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
