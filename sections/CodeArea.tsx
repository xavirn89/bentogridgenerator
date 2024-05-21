import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierLakesideLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface CodeAreaProps {
  htmlCode: string;
}

const CodeArea: React.FC<CodeAreaProps> = ({ htmlCode }) => {
  return (
    <div id="html" className="w-[95%] h-full rounded-lg shadow-lg shadow-neutral-600 border border-neutral-400 overflow-auto text-xs mx-auto">
      <SyntaxHighlighter language="html" style={atelierLakesideLight}>
        {htmlCode}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeArea;
