const assert = require('assert');

const t = require('./');
const s1 = require('./solution');
const f1 = t() !== undefined ? t : s1;

const s2 = require('./solution2');
const f2 = t() !== undefined ? t : s2;

const long_s1 = new Array(4967295).fill('a').join('');
const long_s2 = new Array(4967294).fill('a').join('');

let f;

describe(`QUESTION 2: Check Permutation`, function() {
    describe(`Without sorting`, function() {

        before(function() {
            f = f1;
        });

        after(function() {
            f = undefined;
        });

        it(`should return true for simple permutations`, function(done) {
            assert.equal(f(`asdf`, `sadf`), true);

            done();
        });

        it(`should return false for simple strings`, function(done) {
            assert.equal(f(`asdf`, `asdg`), false);

            done();
        });

        it(`should return true for complex permutations`, function(done) {
            const s1 = `asdfghjklpoiuytrewq`;
            const s2 = `qwertyuioplkjhgfdsa`;

            assert.equal(f(s1, s2), true);

            done();
        });

        it(`should return false for complex strings`, function(done) {
            const s1 = `asdfghjklpoiuytrewq`;
            const s2 = `qbertyuioplkjhgfdsa`;

            assert.equal(f(s1, s2), false);

            done();
        });

        it(`should return false for strings of different lengths WITHOUT traversing strings`, function(done) {
            this.timeout(10);
            assert.equal(f(long_s1, long_s2), false);

            done();
        });
    });

    describe(`With sorting`, function() {

        before(function() {
            f = f2;
        });

        after(function() {
            f = undefined;
        });

        it(`should return true for simple permutations`, function(done) {
            assert.equal(f(`asdf`, `sadf`), true);

            done();
        });

        it(`should return false for simple strings`, function(done) {
            assert.equal(f(`asdf`, `asdg`), false);

            done();
        });

        it(`should return true for complex permutations`, function(done) {
            const s1 = `asdfghjklpoiuytrewq`;
            const s2 = `qwertyuioplkjhgfdsa`;

            assert.equal(f(s1, s2), true);

            done();
        });

        it(`should return false for complex strings`, function(done) {
            const s1 = `asdfghjklpoiuytrewq`;
            const s2 = `qbertyuioplkjhgfdsa`;

            assert.equal(f(s1, s2), false);

            done();
        });

        it(`should return false for strings of different lengths WITHOUT traversing strings`, function(done) {
            this.timeout(10);
            assert.equal(f(long_s1, long_s2), false);

            done();
        });
    });
});
