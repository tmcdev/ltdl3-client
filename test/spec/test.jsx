/*global describe, it, expect, jasmine */
'use strict';

var React = require('react/addons');

(function () {
    describe('React.addons', function () {
        it('should include TestUtils', function () {
            expect(React.addons.TestUtils).toEqual(jasmine.any(Object));
        });
    });
})();
