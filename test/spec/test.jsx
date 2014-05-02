/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react/addons');
var ReactTestUtils = React.addons.TestUtils;

(function () {
    describe('React.addons', function () {
        it('should include TestUtils', function () {
            expect(ReactTestUtils).toEqual(jasmine.any(Object));
        });
    });

    describe('LTDL3', function () {
        describe('GithubRibbon', function () {
            var GithubRibbon = require('../../app/scripts/GithubRibbon.jsx');

            it('should render a link to the GitHub repo', function () {
                var ribbon = ReactTestUtils.renderIntoDocument(<GithubRibbon/>);
                expect(ribbon.getDOMNode().getAttribute('href')).toBe('https://github.com/Trott/ltdl3-client');
            });
        });
    });
})();
