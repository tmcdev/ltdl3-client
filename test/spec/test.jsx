/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react/addons');
var ReactTestUtils = React.addons.TestUtils;

var query = require('../../app/scripts/query.js');

var GithubRibbon = require('../../app/scripts/GithubRibbon.jsx');
var SearchBuilder = require('../../app/scripts/SearchBuilder.jsx');
var SearchBuilderComponent = require('../../app/scripts/SearchBuilderComponent.jsx');
var SearchBuilderFilterType = require('../../app/scripts/SearchBuilderFilterType.jsx');
var SearchBuilderFilterPhrase = require('../../app/scripts/SearchBuilderFilterPhrase.jsx');
var SearchBuilderTextBox = require('../../app/scripts/SearchBuilderTextBox.jsx');
var SearchBuilderAdd = require('../../app/scripts/SearchBuilderAdd.jsx');

(function () {
    describe('query', function () {
        beforeEach(function() {
            query.resetQuery();
        });

        it('should expose getQueryString', function () {
            expect(query.getQueryString).toEqual(jasmine.any(Function));
        });
        it('should expose setQueryExpression', function () {
            expect(query.setQueryExpression).toEqual(jasmine.any(Function));
        });
        it('should expose enumGlueTypes', function () {
            expect(query.enumGlueTypes).toEqual(jasmine.any(Object));
        });
        it('should expose resetQuery', function () {
            expect(query.resetQuery).toEqual(jasmine.any(Function));
        });

        describe('getQueryString()', function () {
            it('should return an empty string initially', function () {
                expect(query.getQueryString()).toBe('');
            });

            it('should handle settings that are not defaults', function () {
                var settings = {term: 'foo bar', field: 'ti', glueType: query.enumGlueTypes.phrase};
                query.setQueryExpression(4, settings);
                expect(query.getQueryString()).toBe('(ti:"foo bar")');
            });
        });

        describe('setQueryExpression()', function () {
            it('should insert a query expression', function () {
                query.setQueryExpression(1, {term: 'foo', field: 'er'});
                expect(query.getQueryString()).toBe('(er:foo)');
            });

            it('should use OR by default', function () {
                query.setQueryExpression(1, {term: 'foo bar', field: 'er'});
                expect(query.getQueryString()).toBe('(er:foo OR er:bar)');
            });

            it('should use OR if specified', function () {
                query.setQueryExpression(1, {term: 'foo bar', field: 'er', glueType: query.enumGlueTypes.or});
                expect(query.getQueryString()).toBe('(er:foo OR er:bar)');
            });

            it('should use AND if specified', function () {
                query.setQueryExpression(1, {term: 'foo bar', field: 'er', glueType: query.enumGlueTypes.and});
                expect(query.getQueryString()).toBe('(er:foo AND er:bar)');
            });

            it('should use phrase if specified', function () {
                query.setQueryExpression(1, {term: 'foo bar', field: 'er', glueType: query.enumGlueTypes.phrase});
                expect(query.getQueryString()).toBe('(er:"foo bar")');
            });

            it('should use NOT if specified', function () {
                query.setQueryExpression(1, {term: 'foo bar', field: 'er', glueType: query.enumGlueTypes.not});
                expect(query.getQueryString()).toBe('(!er:foo AND !er:bar)');
            })

            it('should use NOT phrase if specified', function () {
                query.setQueryExpression(1, {term: 'foo bar', field: 'er', glueType: query.enumGlueTypes.notPhrase});
                expect(query.getQueryString()).toBe('(!er:"foo bar")');
            })

            it('should be able to change the code without changing the term', function () {
                query.setQueryExpression(1, {term: 'foo', field: 'er'});
                query.setQueryExpression(1, {field: 'ti'});
                expect(query.getQueryString()).toBe('(ti:foo)');
            });

            it('should create a query expression with wildcard term if term not provided', function () {
                query.resetQuery();
                query.setQueryExpression(1, {field: 'ti'});
                expect(query.getQueryString()).toBe('(ti:*)');
            })
        });
    });

    describe('React.addons', function () {
        it('should include TestUtils', function () {
            expect(ReactTestUtils).toEqual(jasmine.any(Object));
        });
    });

    describe('LTDL3', function () {
        describe('GithubRibbon', function () {

            it('should render a link to the GitHub repo', function () {
                var ribbon = ReactTestUtils.renderIntoDocument(
                    <GithubRibbon/>
                );
                expect(ribbon.getDOMNode().getAttribute('href')).toBe('https://github.com/Trott/ltdl3-client');
            });
        });

        describe('SearchBuilder', function () {

            it('should contain a SearchBuilderFilterType', function () {

                var builder = ReactTestUtils.renderIntoDocument(
                    <SearchBuilder/>
                );
                expect(ReactTestUtils.findRenderedComponentWithType(builder, SearchBuilderFilterType)).toBeTruthy();
            });
        });

        describe('SearchBuilderComponent', function () {

            it('should render expected subcomponents', function () {
                var component = ReactTestUtils.renderIntoDocument(
                    <SearchBuilderComponent/>
                );
                expect(ReactTestUtils.findRenderedComponentWithType(component, SearchBuilderFilterType)).toBeTruthy();
                expect(ReactTestUtils.findRenderedComponentWithType(component, SearchBuilderFilterPhrase)).toBeTruthy();
                expect(ReactTestUtils.findRenderedComponentWithType(component, SearchBuilderTextBox)).toBeTruthy();
                expect(ReactTestUtils.findRenderedComponentWithType(component, SearchBuilderAdd)).toBeTruthy();
            });

            it('should have a setTextBoxValue() function that works with no passed parameters', function () {
                var component = ReactTestUtils.renderIntoDocument(
                    <SearchBuilderComponent
                        value=""
                        key="comp0"
                        index={0}
                        showExcludes={false}
                        add={this.add}
                        remove={this.remove}
                        setQueryExpression={query.setQueryExpression}
                    />

                );
                expect(function(){component.setTextBoxValue();}).not.toThrow();
            });

            it('should ')
        });

        describe('SearchBuilderFilterPhrase', function () {

            it('should render 3 choices if showExcludes is not requested', function () {
                var restrictor = ReactTestUtils.renderIntoDocument(
                    <SearchBuilderFilterPhrase showExcludes={false}/>
                );
                expect(restrictor.getDOMNode().querySelectorAll('.dropdown-menu li').length).toBe(3);
            });

            it('should render 5 choices if showExcludes is requested', function () {
                var restrictor = ReactTestUtils.renderIntoDocument(
                    <SearchBuilderFilterPhrase showExcludes={true}/>
                );
                expect(restrictor.getDOMNode().querySelectorAll('.dropdown-menu li').length).toBe(5);
            });
        });
    });

})();
