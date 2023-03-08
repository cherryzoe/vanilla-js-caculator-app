const result = document.getElementById('result');
const buttons = document.querySelectorAll('button');
console.log(result);

let expression = '';
let lastAction = '';

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('value');
    const action = button.getAttribute('action');
    console.log(value, action);
    handleButton(value, action);
  });
});

const handleButton = (value, action) => {
  switch (action) {
    case 'number':
      handleNumber(value);
      break;
    case 'operator':
      handleOperator(value);
      break;
    case 'evaluate':
      handleEval();
      break;
    case 'clear':
      handleClear();
      break;
  }
};

const handleNumber = (num) => {
  expression += num;
  updateResult(expression);
  lastAction = 'number';
};

const handleOperator = (operator) => {
  // don't allow continous operation
  if (lastAction === 'number') {
    expression += operator;
    updateResult(expression);
    lastAction = 'operator';
  }
};

const handleClear = () => {
  expression = '';
  lastAction = '';
  updateResult(expression);
};

const updateResult = (expression) => {
  result.innerHTML = expression;
};

const handleEval = () => {
  const resultVal = eval(expression);
  updateResult(resultVal);
  expression = resultVal.toString();
  lastAction = 'evaluate';
};
