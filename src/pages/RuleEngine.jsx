// /src/pages/RuleEngine.jsx
import React, { useContext } from 'react';
import RuleForm from '../components/RuleForm';
import ASTVisualizer from '../components/ASTVisualizer';
import EvaluateRule from '../components/EvaluateRule';
import { RuleContext } from '../context/RuleContext';
import { createAST, evaluateAST } from '../utils/astHelper';

const RuleEngine = () => {
  const { state, dispatch } = useContext(RuleContext);

  const handleCreateRule = (ruleString) => {
    const ast = createAST(ruleString);
    dispatch({ type: 'ADD_RULE', payload: ruleString });
    dispatch({ type: 'SET_AST', payload: ast });
  };

  return (
    <div>
      <h1>Rule Engine</h1>
      <RuleForm onCreateRule={handleCreateRule} />
      <ASTVisualizer ast={state.ast} />
      <EvaluateRule ast={state.ast} evaluateAST={evaluateAST} />
    </div>
  );
};

export default RuleEngine;
