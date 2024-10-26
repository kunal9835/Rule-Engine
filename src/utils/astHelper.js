// /src/utils/astHelper.js

export const createAST = (ruleString) => {
    // This function would parse a rule string and convert it into an AST
    const ruleParts = ruleString.split(' ');
    return {
      type: 'operand',
      left: { type: 'operand', value: ruleParts[0] },
      value: ruleParts[1],
      right: { type: 'operand', value: ruleParts[2] }
    };
  };
  
  export const evaluateAST = (ast, userData) => {
    // This function evaluates an AST against a user's data
    const { left, right, value } = ast;
    const leftValue = userData[left.value];
    const rightValue = parseFloat(right.value);
  
    switch (value) {
      case '>':
        return leftValue > rightValue;
      case '<':
        return leftValue < rightValue;
      case '==':
        return leftValue === rightValue;
      case '!=':
        return leftValue !== rightValue;
      default:
        return false;
    }
  };
  