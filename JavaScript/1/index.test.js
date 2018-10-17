const assert = require('assert');

const t = require('./');
const s = require('./solution');
const f = t() !== undefined ? t : s;

describe(`QUESTION 1: Is Unique`, function() {
    it(`should return true for simple strings`, function(done) {
        assert.equal(f('asdf'), true);

        done();
    });

    it(`should return false for simple strings`, function(done) {
        assert.equal(f('asdfa'), false);

        done();
    });

    it(`should return true for complex strings`, function(done) {
        const strs =
        [
            'qwertyuiopasdfghjklzxcvbnm',
            `asdfghjkl;'qwertyuiop[]\zxcvbnm,./`
        ];

        strs.forEach(s => assert.equal(f(s), true));

        done();
    });

    it(`should return false for complex strings`, function(done) {
        const strs =
        [
            'qwertyuiopasdfghjklzxcvbnma',
            `asdfghjkl;''qwertyuiop[]\zxcvbnm,./`
        ];

        strs.forEach(s => assert.equal(f(s), false));

        done();
    });

    it(`should throw an Error for empty strings`, function(done) {
        assert.throws(_ => f(''), Error, '');

        done();
    });

    it(`should return true for a string with one char`, function(done) {
        assert.equal(f('a'), true);

        done();
    });

    it(`should throw an Error for a string with all whitespace`, function(done) {
        const strs =
        [
            ` `,
            `  `,
            `   `,
        ];


        strs.forEach(s => assert.throws(_ => f(s), Error, ''));

        done();
    });

    it(`should return true for a unique string with whitespace`, function(done) {
        const strs =
        [
            ' abc',
            ' a b c ',
        ];

        strs.forEach(s => assert.equal(f(s), true));

        done();
    });

    it(`should return false for a non-unique string with whitespace`, function(done) {
        const strs =
        [
            ' abc a',
            ' a b c a',
        ];

        strs.forEach(s => assert.equal(f(s), false));

        done();
    });

});
