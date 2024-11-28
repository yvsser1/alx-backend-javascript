const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  describe('type == "SUM"', () => {
    it('should round and add two numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
      assert.strictEqual(calculateNumber('SUM', -1.5, 1.5), 1);
    });
  });

  describe('type == "SUBTRACT"', () => {
    it('should round and subtract two numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
      assert.strictEqual(calculateNumber('SUBTRACT', 4.2, 1.5), 3);
      assert.strictEqual(calculateNumber('SUBTRACT', -1.5, 1.5), -3);
    });
  });

  describe('type == "DIVIDE"', () => {
    it('should round and divide two numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
      assert.strictEqual(calculateNumber('DIVIDE', 4.2, 1.5), 3);
      assert.strictEqual(calculateNumber('DIVIDE', -8.4, 2.5), -3);
    });

    it('should return "Error" when dividing by zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 5.5, 0), 'Error');
    });
  });

  describe('Invalid type', () => {
    it('should throw an error for invalid operation type', () => {
      assert.throws(() => {
        calculateNumber('MULTIPLY', 1.4, 4.5);
      }, Error);
    });
  });
});