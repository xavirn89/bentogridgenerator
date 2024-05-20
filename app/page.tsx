'use client'
import useGlobalStore from '@/stores/globalStore'
import React, { useEffect, useState } from 'react'
import { GridItem, GridValue, GridItemValueType } from '@/types/global'
import { lightColors } from '@/constants/global'
import { createIframeHtml, createHTML, createHTMLTailwind } from '@/utils/parsers'

import GridSettings from '@/sections/GridSettings'
import ItemsSettings from '@/sections/ItemsSettings'
import TitleSection from '@/sections/TitleSection';
import CodeArea from '@/sections/CodeArea';
import LayoutArea from '@/sections/LayoutArea';
import FooterSection from '@/sections/FooterSection'

const Home = () => {
  const {grid, items, decorated, rounded, isTailwind, cssCode, setCssCode, tailwindCode, setTailwindCode, copied} = useGlobalStore()
  const colors: any = lightColors.items
  const [iFrameCode, setIFrameCode] = useState<string>('')
  const codeHtmlArea = isTailwind ? tailwindCode : cssCode

  useEffect(() => {
    const iFrameHtml: string = items.map((item) => {
      const stringIndex = (item.id - 1).toString()
      const bgColor = decorated ? colors[stringIndex].backgroundColor+";" : "lightGray;"
      const text = decorated ? `<p>${colors[stringIndex].text}</p>` : ""
      const borders = rounded ? "border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25), 0 1px 2px rgba(0, 0, 0, 0.1);" : ""
      return `
        <div 
          style="font-family: 'M PLUS 2 Variable', sans-serif;grid-column: span ${item.value.colSpan}; grid-row: span ${item.value.rowSpan}; background-color: ${bgColor} ${borders} display: flex; align-items: center; justify-content: center;"
        >
          ${text}
        </div>
      `
    }).join('')

    const IFrameCode = createIframeHtml(grid, iFrameHtml)
    setIFrameCode(IFrameCode)

    const css: string = items.map((item) => {
      const stringIndex = (item.id - 1).toString()
      const bgColor = decorated ? colors[stringIndex].backgroundColor+";" : "lightGray;"
      const text = decorated ? `<p>${colors[stringIndex].text}</p>` : ""
      const borders = rounded ? "border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25), 0 1px 2px rgba(0, 0, 0, 0.1);" : ""

      return `
        <div 
          style="grid-column: span ${item.value.colSpan}; grid-row: span ${item.value.rowSpan}; background-color: ${bgColor} ${borders} display: flex; align-items: center; justify-content: center;"
        >
          ${text}
        </div>
      `
    }).join('')

    const cssCode = createHTML(grid, css)
    setCssCode(cssCode)

    const tailwind: string = items.map((item) => {
      const stringIndex = (item.id - 1).toString()
      const bgColor = decorated ? colors[stringIndex].backgroundColor : "bg-gray-200"
      const text = decorated ? `<p>${colors[stringIndex].text}</p>` : ""
      const borders = rounded ? "rounded-lg shadow-md" : ""
      return `
        <div 
          class="col-span-${item.value.colSpan} row-span-${item.value.rowSpan} bg-${bgColor} ${borders} flex items-center justify-center"
        >
          ${text}
        </div>
      `
    }).join('')

    const tailwindCode = createHTMLTailwind(grid, tailwind)
    setTailwindCode(tailwindCode)


    
  }, [grid, items, decorated, rounded, isTailwind, colors, setCssCode, setTailwindCode])

  return (
    <div className='flex flex-col md:flex-row h-screen w-full text-black font-mplus p-12'>
      <div className='flex flex-col h-full w-full md:w-1/2 gap-6'>
          <TitleSection />
          <GridSettings />
          <ItemsSettings />
          <FooterSection />
      </div>

      <div className='flex flex-col h-full w-full md:w-1/2 gap-4 pb-10 md:pb-0'>
        <div className='flex flex-col h-1/2'>
          <LayoutArea iFrameCode={iFrameCode} />
        </div>
        <div className='flex h-1/2 px-4'>
          <CodeArea htmlCode={codeHtmlArea}/>
        </div>
      </div>

      <div className={`toast toast-end transition-all ease-in-out duration-300 ${copied ? '' : 'hidden'}`}>
        <div className="alert alert-info">
          <span className='text-white'>Code copied to clipboard!</span>
        </div>
      </div>
    </div>
  )
}

export default Home