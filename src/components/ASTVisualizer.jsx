// /src/components/ASTVisualizer.jsx
import React from 'react';

const ASTVisualizer = ({ ast }) => {
  if (!ast) return <div>No rule created yet.</div>;

  const renderNode = (node) => {
    if (node.type === 'operand') {
      return <span>{node.value}</span>;
    } else {
      return (
        <span>
          ( {renderNode(node.left)} {node.value} {renderNode(node.right)} )
        </span>
      );
    }
  };

  return (
    <div>
      <h3>AST:</h3>
      <div>{renderNode(ast)}</div>
    </div>
  );
};

export default ASTVisualizer;
