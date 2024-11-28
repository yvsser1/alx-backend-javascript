const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('should round and sum two whole numbers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should round up the second number', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should round up both numbers', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should round 1.5 up', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should handle negative numbers', () => {
    assert.strictEqual(calculateNumber(-1.4, 1.3), 0);
  });

  it('should round down numbers less than .5', () => {
    assert.strictEqual(calculateNumber(1.2, 2.1), 3);
  });

  it('should handle zero inputs', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });
});