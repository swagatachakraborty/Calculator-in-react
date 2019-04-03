const performAction = function(secondValue, operator, firstValue) {
  const operand1 = parseInt(firstValue);
  const operand2 = parseInt(secondValue);

  switch (operator) {
    case '+':
      return operand1 + operand2;

    case '-':
      return operand1 - operand2;

    case '*':
      return operand1 * operand2;

    case '/':
      return operand1 / operand2;

    case '%':
      return (operand1 * operand2) / 100;

    default:
      return operand1;
  }
};

const calculateResult = function(actionStack) {
  if (actionStack.length < 3) {
    return;
  }

  const numberStack = actionStack.slice();

  if (numberStack.length === 3) {
    return performAction(
      numberStack.pop(),
      numberStack.pop(),
      numberStack.pop()
    );
  }

  const result = performAction(
    numberStack.pop(),
    numberStack.pop(),
    numberStack.pop()
  );
  numberStack.push(result);

  return calculateResult(numberStack);
};

export default calculateResult;
//module.exports = calculateResult;
