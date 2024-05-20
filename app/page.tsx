'use client'
import useGlobalStore from '@/stores/globalStore'
import React, { useEffect, useState } from 'react'
import { GridItem, GridValue, GridItemValueType } from '@/types/global'
import { lightColors } from '@/constants/global'
import { createHtml } from '@/utils/parsers'

import GridSettings from '@/sections/GridSettings'
import ItemsSettings from '@/sections/ItemsSettings'

const Home = () => {
  const {grid, updateGrid, items, updateItem, addItem, deleteItem} = useGlobalStore()
  const [rounded, setRounded] = useState<boolean>(true)
  const colors: any = lightColors.items

  const [rangeValue, setRangeValue] = useState<number>(25)
  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.round(parseInt(e.target.value) / 25) * 25
    setRangeValue(value)
  }

  useEffect(() => {
    const itemsHTML: string = items.map((item) => {
      const stringIndex = (item.id - 1).toString()
      const bgColor = item.bgColor ? item.bgColor : colors[stringIndex].backgroundColor
      const text = item.text ? item.text : colors[stringIndex].text
      return `
        <div 
          style="font-family: 'M PLUS 2 Variable', sans-serif;grid-column: span ${item.value.colSpan}; grid-row: span ${item.value.rowSpan}; background-color: ${bgColor} ${rounded ? '; border-radius: 8px' : ''}; display: flex; align-items: center; justify-content: center;"
        >
          <p>${text}</p>
        </div>
      `
    }).join('')

    const html = createHtml(grid, itemsHTML)
    setHtmlCode(html)
  }, [grid, items])

  const [htmlCode, setHtmlCode] = useState<string>('')

  
  return (
    <div className='flex h-screen w-full text-black font-mplus'>
      <div className='flex flex-col w-5/12 h-full'>
        <div className='flex flex-col h-2/3 gap-4'>
          
          <GridSettings />
          
          <ItemsSettings />

        </div>


        <div className='flex h-1/3 px-8 py-4'>
          <textarea id="html" className='bg-neutral-600 w-full h-full rounded-lg shadow-lg shadow-neutral-800 border border-neutral-900'></textarea>
        </div>
      </div>

      <div className='flex flex-col w-7/12 h-full'>
        <iframe className='h-full w-full' srcDoc={htmlCode}></iframe>
      </div>
    </div>
  )
}

export default Home