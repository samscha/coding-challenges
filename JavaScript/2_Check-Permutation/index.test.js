const assert = require('assert');

const t = require('./');
const s = require('./solution');
const f = t() !== undefined ? t : s;

const long_s1 = new Array(4967295).fill('a').join('');
const long_s2 = new Array(4967294).fill('a').join('');

describe(`QUESTION 2: Check Permutation`, function() {
    describe(`Tests`, function() {

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

        it(`should return false for strings of different lengths WITHOUT traversing string`, function(done) {
            this.timeout(10);
            assert.equal(f(long_s1, long_s2), false);

            done();
        });
    });
});
