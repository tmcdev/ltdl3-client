(function () {
    'use strict';
    var queryExpressions = [];

    var regexTerm = /([\w:]+)/g;
    var regexNonTerm = /[^\w:]+/g;

    var enumGlueTypes = {
        or: 1,
        and: 2,
        phrase: 3,
        not: 4,
        notPhrase: 5
    };

    module.exports.enumGlueTypes = enumGlueTypes;

    var glue = function (term, type, field) {
        var rv;
        switch (type) {
        case enumGlueTypes.or:
            rv = term.replace(regexTerm, field + ':$1');
            rv = rv.replace(regexNonTerm, ' OR ');
            break;
        case enumGlueTypes.and:
            rv = term.replace(regexTerm, field + ':$1');
            rv = rv.replace(regexNonTerm, ' AND ');
            break;
        case enumGlueTypes.phrase:
            rv = field + ':"' + term + '"';
            break;
        case enumGlueTypes.not:
            break;
        case enumGlueTypes.notPhrase:
            break;
        }

        return rv;
    };

    module.exports.setQueryExpression = function (term, field, index, options) {
        options = options || {};
        options.glueType = options.glueType || this.enumGlueTypes.or;
        queryExpressions[index] = {
            term: term,
            field: field,
            glueType: options.glueType
        };
    };

    module.exports.getQueryString = function () {
        return queryExpressions.reduce(function(prev, cur) {
            var rv = prev;
            if (cur) {
                var gluedTerm = glue(cur.term, cur.glueType, cur.field);
                var joiner = prev.length ? ' ' : '';
                rv += joiner + gluedTerm;
            }
            return '(' + rv + ')';
        }, '');
    };

    module.exports.setField = function (field, index) {
        queryExpressions[index].field = field;
    };
}());
