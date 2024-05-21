import React from 'react';

interface LayoutAreaProps {
  iFrameCode: string;
}

const LayoutArea: React.FC<LayoutAreaProps> = ({ iFrameCode }) => {
  return (
    <div className='flex flex-col h-full w-full'>
      <iframe 
        title="Bento Grid Layout iframe" 
        className='h-full w-full' 
        srcDoc={iFrameCode}
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </div>
  );
};

export default LayoutArea;
