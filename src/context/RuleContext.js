// /src/context/RuleContext.js
import React, { createContext, useReducer } from 'react';

const initialState = {
  rules: [],
  ast: null,
};

const ruleReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_RULE':
      return {
        ...state,
        rules: [...state.rules, action.payload],
      };
    case 'SET_AST':
      return {
        ...state,
        ast: action.payload,
      };
    default:
      return state;
  }
};

export const RuleContext = createContext();

export const RuleProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ruleReducer, initialState);

  return (
    <RuleContext.Provider value={{ state, dispatch }}>
      {children}
    </RuleContext.Provider>
  );
};
