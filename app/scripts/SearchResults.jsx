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
                howMany;

            if (data) {
                response = data.response;
            }

            if (response) {
                numFound = response.numFound;
                start = response.start;
                if (response.docs instanceof Array) {
                    docs = response.docs;
                    howMany = <div>{start+1}-{start+docs.length} of {numFound}</div>;
                }
            }

            //count = <div>1-10 of 30234</div>;

            return (
                <div>
                    {howMany}
                    <ol>
                        <li>Whatsup</li>
                        <li>You too</li>
                    </ol>
                </div>
            );
        }
    });
}());
