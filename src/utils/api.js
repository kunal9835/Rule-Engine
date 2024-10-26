// /src/utils/api.js

export const createRuleAPI = async (ruleString) => {
    const response = await fetch('/api/create-rule', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ rule: ruleString }),
    });
    const data = await response.json();
    return data.ast;
  };
  
  export const evaluateRuleAPI = async (ast, userData) => {
    const response = await fetch('/api/evaluate-rule', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ast, userData }),
    });
    const data = await response.json();
    return data.result;
  };
  