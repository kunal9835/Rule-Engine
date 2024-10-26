// /src/components/RuleForm.jsx
import React, { useState } from 'react';  // Make sure useState is imported here

const RuleForm = ({ onCreateRule }) => {
  const [attribute, setAttribute] = useState('');
  const [operator, setOperator] = useState('>');
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const rule = `${attribute} ${operator} ${value}`;
    onCreateRule(rule);
    setAttribute('');
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Attribute (e.g., age)"
        value={attribute}
        onChange={(e) => setAttribute(e.target.value)}
      />
      <select value={operator} onChange={(e) => setOperator(e.target.value)}>
        <option value=">">></option>
        <option value="<">{"<"}</option>
        <option value="==">==</option>
        <option value="!=">!=</option>
      </select>
      <input
        type="number"
        placeholder="Value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Add Rule</button>
    </form>
  );
};

export default RuleForm;
