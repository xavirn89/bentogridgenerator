import React, { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark, atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface Props {
  htmlCode: string
  tailwindCode: string
}

const CodeArea = ({htmlCode, tailwindCode}: Props) => {

  
  
  return (<>
    <div id="html" className='bg-neutral-600 w-full h-full rounded-lg shadow-lg shadow-neutral-600 border border-neutral-400 overflow-auto text-xs'>
      <SyntaxHighlighter language="javascript" style={atomOneLight}>
        {htmlCode}
      </SyntaxHighlighter>
    </div>
  </>)
}

export default CodeArea