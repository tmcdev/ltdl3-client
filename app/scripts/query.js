(function () {
    'use strict';
    var queryExpressions = [];

    module.exports.setQueryExpression = function (term, field, index) {
        queryExpressions[index] = {
            term: term,
            field: field
        };
    };

    module.exports.getQueryString = function () {
        return queryExpressions.reduce(function(prev, cur) {
            var rv = prev;
            if (cur) {
                var joiner = prev.length ? ' ' : '';
                rv += joiner + cur.field + ':' + cur.term;
            }
            return rv;
        }, '');
    };

    module.exports.setField = function (field, index) {
        queryExpressions[index].field = field;
    };
}());
