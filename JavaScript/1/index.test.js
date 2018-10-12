const assert = require('assert');

const t = require('./');
const s = require('./solution');

describe(`QUESTION 1: Is Unique`, _ => {
    it(`should return true for simple strings`, _ => {
        assert.equal(t('asdf'), s('asdf'));
    });
});
