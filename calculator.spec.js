const calculator = require('./calculator.js');

describe('add', function() {
  test('adds two numbers', function() {
    expect(calculator.add(2,3)).toEqual(5);
  });
  test('add two negative numbers', function() {
    expect(calculator.add(-5,-3)).toEqual(-8);
  });
});
describe('divide', function() {
    test('divides two numbers', function() {
      expect(calculator.divide(21,3)).toEqual(7);
    });
    test('division results in float', function() {
      expect(calculator.divide(9,4)).toEqual(2.25);
    });
    test('numerator smaller than denominator', function() {
        expect(calculator.divide(2,4)).toEqual(0.5);
      });
    test('division by zero', function() {
        expect(calculator.divide(3,0)).toEqual("ERROR: Calculator bursts into flames");
      });
  });