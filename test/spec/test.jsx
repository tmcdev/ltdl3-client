/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react/addons');
var ReactTestUtils = React.addons.TestUtils;

(function () {
    describe('query', function () {
        it('should expose getQueryString', function () {
            var query = require('../../app/scripts/query');
            expect(query.getQueryString).toEqual(jasmine.any(Function));
        });
        it('should expose setQueryExpression', function () {
            var query = require('../../app/scripts/query');
            expect(query.setQueryExpression).toEqual(jasmine.any(Function));
        });

        describe('getQueryString()', function () {
            it('should return an empty string initially', function () {
                var query = require('../../app/scripts/query');
                expect(query.getQueryString()).toBe('');
            })
        });

        describe('setQueryExpression()', function () {
            it('should insert a query expression', function () {
                var query = require('../../app/scripts/query');
                query.setQueryExpression('foo','er',1);
                expect(query.getQueryString()).toBe('er:foo');
            });
        });
    });

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

        describe('SearchBuilder', function () {
            var SearchBuilder = require('../../app/scripts/SearchBuilder.jsx');

            it('should contain a SearchBuilderFilterType', function () {
                var SearchBuilderFilterType = require('../../app/scripts/SearchBuilderFilterType.jsx');

                var builder = ReactTestUtils.renderIntoDocument(
                    <SearchBuilder/>
                );
                expect(ReactTestUtils.findRenderedComponentWithType(builder, SearchBuilderFilterType)).toBeTruthy();
            });
        })

        describe('SearchBuilderFilterPhrase', function () {
            var SearchBuilderFilterPhrase = require('../../app/scripts/SearchBuilderFilterPhrase.jsx');

            it('should render 3 choices if showExcludes is not requested', function () {
                var restrictor = ReactTestUtils.renderIntoDocument(
                    <SearchBuilderFilterPhrase showExcludes={false}/>
                );
                expect(restrictor.getDOMNode().querySelectorAll('.dropdown-menu li').length).toBe(3);
            });

            it('should render 5 choices if showExcludes is requested', function() {
                var restrictor = ReactTestUtils.renderIntoDocument(
                    <SearchBuilderFilterPhrase showExcludes={true}/>
                );
                expect(restrictor.getDOMNode().querySelectorAll('.dropdown-menu li').length).toBe(5);
            });
        })
    });

})();
