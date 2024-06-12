'use client'
import React, { useEffect } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierLakesideLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import useGlobalStore from '@/stores/globalStore'
import { lightColors } from '@/constants/colors'
import { GridItem } from '@/types/global'
import { createHTML, createHTMLTailwind } from '@/utils/parsers'

const CodeArea: React.FC = () => {
  const {
    grid,
    items,
    decorated,
    rounded,
    isTailwind,
    cssCode,
    setCssCode,
    tailwindCode,
    setTailwindCode,
  } = useGlobalStore()

  const colors = lightColors.items

  const codeHtmlArea = isTailwind ? tailwindCode : cssCode

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

  const generateGridItemTailwind = (item: GridItem, index: number) => {
    const bgColor = decorated ? colors[index].tailwindBackgroundColor : 'bg-gray-200'
    const text = decorated ? `<p>${colors[index].text}</p>` : `${index + 1}`
    const borders = rounded ? 'rounded-lg shadow-md' : ''
    return `
      <div 
        className="col-span-${item.value.colSpan} row-span-${item.value.rowSpan} ${bgColor} ${borders} flex items-center justify-center"
      >
        ${text}
      </div>
    `
  }

  useEffect(() => {
    const css = items.map((item, index) => generateGridItemHTML(item, index)).join('')
    const newCssCode = createHTML(grid, css, decorated, rounded)
    setCssCode(newCssCode)

    const tailwind = items.map((item, index) => generateGridItemTailwind(item, index)).join('')
    const newTailwindCode = createHTMLTailwind(grid, tailwind, decorated, rounded)
    setTailwindCode(newTailwindCode)

  }, [grid, items, decorated, rounded, setCssCode, setTailwindCode])

  return (
    <div id="html" className="w-[95%] h-full rounded-lg shadow-lg shadow-neutral-600 border border-neutral-400 overflow-auto text-xs mx-auto">
      <SyntaxHighlighter language="html" style={atelierLakesideLight}>
        {codeHtmlArea}
      </SyntaxHighlighter>
    </div>
  )
}

export default CodeArea
