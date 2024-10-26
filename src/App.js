// /src/App.js
import React from 'react';
import { RuleProvider } from './context/RuleContext';
import RuleEngine from './pages/RuleEngine';

const App = () => {
  return (
    <RuleProvider>
      <RuleEngine />
    </RuleProvider>
  );
};

export default App;
