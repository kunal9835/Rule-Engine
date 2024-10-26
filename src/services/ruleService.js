// /src/services/ruleService.js

import { createRuleAPI, evaluateRuleAPI } from '../utils/api';

export const createRule = async (ruleString) => {
  const ast = await createRuleAPI(ruleString);
  return ast;
};

export const evaluateRule = async (ast, userData) => {
  const result = await evaluateRuleAPI(ast, userData);
  return result;
};
