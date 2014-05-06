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
                var ribbon = ReactTestUtils.renderIntoDocument(
                    <GithubRibbon/>
                );
                expect(ribbon.getDOMNode().getAttribute('href')).toBe('https://github.com/Trott/ltdl3-client');
            });
        });
        describe('SearchBuilderFilterPhrase', function () {
            var SearchBuilderFilterPhrase = require('../../app/scripts/SearchBuilderFilterPhrase.jsx');

            it('should render 3 choices if showExcludes is not requested', function () {
                var restrictor = ReactTestUtils.renderIntoDocument(
                    <SearchBuilderFilterPhrase/>
                );
                expect(restrictor.getDOMNode().querySelectorAll('.dropdown-menu li').length).toBe(3);
            });

            it('should render 5 choices if showExcludes is requested', function() {
                var restrictor = ReactTestUtils.renderIntoDocument(
                    <SearchBuilderFilterPhrase showExcludes="true"/>
                );
                expect(restrictor.getDOMNode().querySelectorAll('.dropdown-menu li').length).toBe(5);
            });
        })
    });

})();
