const assert = require('assert');
const calculateResult = require('../src/mathUtil.js');

describe('calculateResult', () => {
  it('should return the result of the operation provides 2 operands and 1 operator', () => {
    const stack = ['10', '-', '8'];
    const expectedOutput = calculateResult(stack);
    let actual = 2;
    assert.equal(actual, expectedOutput);
  });

  it('should return the result of the operation provides more than 2 operands and 1 operators', () => {
    const stack = ['100', '-', '8', '*', '5'];
    const expectedOutput = calculateResult(stack);
    let actual = 60;
    assert.equal(actual, expectedOutput);
  });

  it('should return the result of the operation when the result is negetive', () => {
    const stack = ['100', '-', '8', '*', '5', '*', '10'];
    const expectedOutput = calculateResult(stack);
    let actual = -300;
    assert.equal(actual, expectedOutput);
  });
});
