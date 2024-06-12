'use client'
import React, { useEffect, useState } from 'react'
import useGlobalStore from '@/stores/globalStore'
import { GridItem } from '@/types/global'
import { createIframeHtml } from '@/utils/parsers'
import { lightColors } from '@/constants/colors'

const LayoutArea: React.FC = () => {
  const { grid, items, decorated, rounded, isTailwind } = useGlobalStore()
  const [iFrameCode, setIFrameCode] = useState<string>('')

  const colors = lightColors.items

  const generateGridItemHTML = (item: GridItem, index: number) => {
    const bgColor = decorated ? colors[index].backgroundColor : 'lightGray'
    const text = decorated ? `<p>${colors[index].text}</p>` : `${index + 1}`
    const borders = rounded ? 'border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25), 0 1px 2px rgba(0, 0, 0, 0.1);' : ''
    return `
      <div 
        style="font-family: 'M PLUS 2 Variable', sans-serif; grid-column: span ${item.value.colSpan}; grid-row: span ${item.value.rowSpan}; background-color: ${bgColor}; ${borders} display: flex; align-items: center; justify-content: center;"
      >
        ${text}
      </div>
    `
  }

  useEffect(() => {
    const iFrameHtml = items.map((item, index) => generateGridItemHTML(item, index)).join('')
    const newIFrameCode = createIframeHtml(grid, iFrameHtml)
    setIFrameCode(newIFrameCode)
  }, [grid, items, decorated, rounded, isTailwind])

  return (
    <div className='flex flex-col h-full w-full'>
      <iframe 
        title="Bento Grid Layout iframe" 
        className='h-full w-full' 
        srcDoc={iFrameCode}
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </div>
  )
}

export default LayoutArea
