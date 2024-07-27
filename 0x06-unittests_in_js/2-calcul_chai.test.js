const assert = require('assert');
const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

describe('all testing for cal 1', () => {
  describe('test sum by adding numbers', () => {
    it('adding 2 and 3 to give 5', () => {
      expect(calculateNumber('SUM', 2, 3)).to.equal(5);
      // assert.equal(calculateNumber('SUM', 2, 3), 5);
    });
    it('adding 1 and 3.7 to give 5', () => {
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    });
    it('adding 1.2 and 3.7 to give 5', () => {
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    });
    it('adding 1.5 and 3.7 to give 6', () => {
      expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
    });
    it('adding 0 and 0 to give 0', () => {
      expect(calculateNumber('SUM', 0, 0)).to.equal(0);
    });
  });

  describe('test subtract by subtracting numbers', () => {
    it('subtracting 2 and 3 to give -1', () => {
      expect(calculateNumber('SUBTRACT', 2, 3)).to.equal(-1);
    });
    it('subtracting 1 and 3.7 to give -3', () => {
      expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
    });
    it('subtracting 1.2 and 3.7 to give -3', () => {
      expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
    });
    it('subtracting 1.5 and 3.7 to give -2', () => {
      expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
    });
    it('subtracting 0 and 0 to give 0', () => {
      expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
    });
  });

  describe('test divide by dividing numbers', () => {
    it('dividing 3 and 2 to give 1.5', () => {
      expect(calculateNumber('DIVIDE', 3, 2)).to.equal(1.5);
    });
    it('dividing 3 and 3.0 to give 1', () => {
      expect(calculateNumber('DIVIDE', 3, 3.0)).to.equal(1);
    });
    it('dividing 4.0 and 1 to give 4', () => {
      expect(calculateNumber('DIVIDE', 4.0, 1)).to.equal(4);
    });
    it('dividing 2 and 4 to give 0.5', () => {
      expect(calculateNumber('DIVIDE', 2, 4)).to.equal(0.5);
    });
    it('dividing 10 and 0.3 to give ERROR', () => {
      expect(calculateNumber('DIVIDE', 10, 0.3)).to.equal('Error');
    });
  });
});
