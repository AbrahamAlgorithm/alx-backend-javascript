const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('all testing for cal 1', () => {
  describe('test sum by adding numbers', () => {
    it('adding 2 and 3 to give 5', () => {
      assert.equal(calculateNumber('SUM', 2, 3), 5);
    });
    it('adding 1 and 3.7 to give 5', () => {
      assert.equal(calculateNumber('SUM', 1, 3.7), 5);
    });
    it('adding 1.2 and 3.7 to give 5', () => {
      assert.equal(calculateNumber('SUM', 1.2, 3.7), 5);
    });
    it('adding 1.5 and 3.7 to give 6', () => {
      assert.equal(calculateNumber('SUM', 1.5, 3.7), 6);
    });
    it('adding 0 and 0 to give 0', () => {
      assert.equal(calculateNumber('SUM', 0, 0), 0);
    });
  });

  describe('test subtract by subtracting numbers', () => {
    it('subtracting 2 and 3 to give -1', () => {
      assert.equal(calculateNumber('SUBTRACT', 2, 3), -1);
    });
    it('subtracting 1 and 3.7 to give -3', () => {
      assert.equal(calculateNumber('SUBTRACT', 1, 3.7), -3);
    });
    it('subtracting 1.2 and 3.7 to give -3', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
    });
    it('subtracting 1.5 and 3.7 to give -2', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
    });
    it('subtracting 0 and 0 to give 0', () => {
      assert.equal(calculateNumber('SUBTRACT', 0, 0), 0);
    });
  });

  describe('test divide by dividing numbers', () => {
    it('dividing 3 and 2 to give 1.5', () => {
      assert.equal(calculateNumber('DIVIDE', 3, 2), 1.5);
    });
    it('dividing 3 and 3.0 to give 1', () => {
      assert.equal(calculateNumber('DIVIDE', 3, 3.0), 1);
    });
    it('dividing 4.0 and 1 to give 4', () => {
      assert.equal(calculateNumber('DIVIDE', 4.0, 1), 4);
    });
    it('dividing 2 and 4 to give 0.5', () => {
      assert.equal(calculateNumber('DIVIDE', 2, 4), 0.5);
    });
    it('dividing 10 and 0.3 to give ERROR', () => {
      assert.equal(calculateNumber('DIVIDE', 10, 0.3), 'Error');
    });
  });
});
