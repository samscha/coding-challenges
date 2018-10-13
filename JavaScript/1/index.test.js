const assert = require('assert');

const t = require('./');
const s = require('./solution');
const f = t() !== undefined ? t : s;

describe(`QUESTION 1: Is Unique`, function() {
    it(`should return true for simple strings`, function(done) {
        assert.equal(f('asdf'), true);

        done();
    });
});
