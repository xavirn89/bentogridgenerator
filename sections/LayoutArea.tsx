import React from 'react'

interface Props {
  iFrameCode: string
}

const LayoutArea = ({iFrameCode}: Props) => {
  return (
    <div className='flex flex-col h-full w-full'>
      <iframe title="Bento Grid Layour iframe" className='h-full w-full' srcDoc={iFrameCode}></iframe>
    </div>
  )
}

export default LayoutArea