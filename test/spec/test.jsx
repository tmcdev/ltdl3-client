/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react/addons');
var ReactTestUtils = React.addons.TestUtils;

(function () {
    describe('query', function () {
        var query = require('../../app/scripts/query');
        it('should expose getQueryString', function () {
            expect(query.getQueryString).toEqual(jasmine.any(Function));
        });
        it('should expose setQueryExpression', function () {
            expect(query.setQueryExpression).toEqual(jasmine.any(Function));
        });
        it('should expose setField', function () {
            expect(query.setField).toEqual(jasmine.any(Function));
        });
        it('should expose enumGlueTypes', function () {
            expect(query.enumGlueTypes).toEqual(jasmine.any(Object));
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
                expect(query.getQueryString()).toBe('(er:foo)');
            });

            it('should use OR by default', function () {
                var query = require('../../app/scripts/query');
                query.setQueryExpression('foo bar', 'er', 1);
                expect(query.getQueryString()).toBe('(er:foo OR er:bar)');
            });

            it('should use OR if specified', function () {
                var query = require('../../app/scripts/query');
                query.setQueryExpression('foo bar', 'er', 1,{glueType: query.enumGlueTypes.or});
                expect(query.getQueryString()).toBe('(er:foo OR er:bar)');
            });

            it('should use AND if specified', function () {
                var query = require('../../app/scripts/query');
                query.setQueryExpression('foo bar', 'er', 1, {glueType: query.enumGlueTypes.and});
                expect(query.getQueryString()).toBe('(er:foo AND er:bar)');
            });

            it('should use phrase if specified', function () {
                var query = require('../../app/scripts/query');
                query.setQueryExpression('foo bar', 'er', 1, {glueType: query.enumGlueTypes.phrase});
                expect(query.getQueryString()).toBe('(er:"foo bar")');
            });

            it('should use NOT if specified', function () {
                var query = require('../../app/scripts/query');
                query.setQueryExpression('foo bar', 'er', 1, {glueType: query.enumGlueTypes.not});
                expect(query.getQueryString()).toBe('(!er:foo AND !er:bar)');
            })

            it('should use NOT phrase if specified', function () {
                var query = require('../../app/scripts/query');
                query.setQueryExpression('foo bar', 'ti', 1, {glueType: query.enumGlueTypes.notPhrase});
                expect(query.getQueryString()).toBe('(!ti:"foo bar")');
            })
        });

        describe('setField()', function () {
            it('should change the code without changing the term', function () {
                var query = require('../../app/scripts/query');
                query.setQueryExpression('foo','er',1);
                query.setField('ti',1);
                expect(query.getQueryString()).toBe('(ti:foo)');
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
