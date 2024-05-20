'use client'
import useGlobalStore from '@/stores/globalStore'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import React, { useEffect, useState } from 'react'
import { GridItem, GridValue, GridItemValueType } from '@/types/global'
import { lightColors } from '@/constants/global'
import { createIframeHtml, createHTML, createHTMLTailwind } from '@/utils/parsers'

import GridSettings from '@/sections/GridSettings'
import ItemsSettings from '@/sections/ItemsSettings'

const Home = () => {
  const {grid, updateGrid, items, updateItem, addItem, deleteItem} = useGlobalStore()
  const colors: any = lightColors.items
  const [iFrameCode, setIFrameCode] = useState<string>('')
  const [htmlCode, setHtmlCode] = useState<string>('')
  const [tailwindCode, setTailwindCode] = useState<string>('')

  useEffect(() => {
    const iFrameHtml: string = items.map((item) => {
      const stringIndex = (item.id - 1).toString()
      const bgColor = item.bgColor ? item.bgColor : colors[stringIndex].backgroundColor
      const text = item.text ? item.text : colors[stringIndex].text
      return `
        <div 
          style="font-family: 'M PLUS 2 Variable', sans-serif;grid-column: span ${item.value.colSpan}; grid-row: span ${item.value.rowSpan}; background-color: ${bgColor};  border-radius: 8px; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25), 0 1px 2px rgba(0, 0, 0, 0.1);"
        >
          <p>${text}</p>
        </div>
      `
    }).join('')

    const IFrameCode = createIframeHtml(grid, iFrameHtml)
    setIFrameCode(IFrameCode)

    const html: string = items.map((item) => {
      const stringIndex = (item.id - 1).toString()
      const bgColor = item.bgColor ? item.bgColor : colors[stringIndex].backgroundColor
      const text = item.text ? item.text : colors[stringIndex].text
      return `
        <div 
          style="grid-column: span ${item.value.colSpan}; grid-row: span ${item.value.rowSpan}; background-color: ${bgColor}; border-radius: 8px; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25), 0 1px 2px rgba(0, 0, 0, 0.1);"
        >
          <p>${text}</p>
        </div>
      `
    }).join('')

    const htmlCode = createHTML(grid, html)
    setHtmlCode(htmlCode)

    const tailwind: string = items.map((item) => {
      const stringIndex = (item.id - 1).toString()
      const bgColor = item.bgColor ? item.bgColor : colors[stringIndex].backgroundColor
      const text = item.text ? item.text : colors[stringIndex].text
      return `
        <div 
          class="col-span-${item.value.colSpan} row-span-${item.value.rowSpan} bg-${bgColor} rounded-lg flex items-center justify-center shadow-md"
        >
          <p>${text}</p>
        </div>
      `
    }).join('')

    const tailwindCode = createHTMLTailwind(grid, tailwind)
    setTailwindCode(tailwindCode)


    
  }, [grid, items])

  

  
  return (
    <div className='flex flex-col h-screen w-full text-black font-mplus'>

      <div>
        Hi
      </div>








      <div className='flex flex-col w-5/12 h-full'>
        <div className='flex flex-col h-2/3 gap-4'>
          
          <GridSettings />
          
          <ItemsSettings />

        </div>


        <div className='flex h-1/3 px-8 py-4'>
          <div id="html" className='bg-neutral-600 w-full h-full rounded-lg shadow-lg shadow-neutral-800 border border-neutral-900 overflow-auto text-xs'>
            <SyntaxHighlighter language="javascript" style={docco}>
              {htmlCode}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>

      <div className='flex flex-col w-7/12 h-full'>
        <div className='flex h-2/3'><iframe className='h-full w-full' srcDoc={iFrameCode}></iframe></div>
        <div className='flex h-1/3'></div>
      </div>
    </div>
  )
}

export default Home