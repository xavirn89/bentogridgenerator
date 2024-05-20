'use client'
import useGlobalStore from '@/stores/globalStore'
import React, { useEffect, useState } from 'react'
import { GridItem, GridValue, GridItemValueType } from '@/types/global'
import { lightColors } from '@/constants/global'
import { createHtml } from '@/utils/parsers'

import GridSettings from '@/sections/GridSettings'

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

  const handleChangeItemValue = (id: number, type: GridItemValueType, value: any) => {
    const item = items.find((item) => item.id === id)
    if (item) {
      const newItem = {
        ...item,
        value: {
          ...item.value,
          [type]: value
        }
      }
      updateItem(newItem.id, newItem)
    }
  }

  const handleChangeGridValue = (type: GridItemValueType, value: any) => {
    const newGrid = {
      ...grid,
      [type]: value
    }
    updateGrid(newGrid)
  }

  const handleAddGridItem = () => {
    const newItem: GridItem = {
      id: items.length + 1,
      text: '',
      bgColor: '',
      value: {
        colSpan: 1,
        rowSpan: 1
      }
    }
    addItem(newItem)
  }

  const handleRemoveGridItem = () => {
    if (items.length > 0) {
      deleteItem(items[items.length - 1].id)
    }
  }

  return (
    <div className='flex h-screen w-full  text-black font-mplus'>
      <div className='flex flex-col w-2/6 h-full'>
        <div className='flex flex-col flex-grow border-b border-gray-400 p-2 gap-4'>
          
          <GridSettings grid={grid} handleChangeGridValue={handleChangeGridValue} />
          <div className='flex justify-end gap-2'>
            <button 
              onClick={handleAddGridItem} 
              className='bg-blue-500 text-white px-4 py-1 rounded-lg font-medium text-xs'
            >
              Add Item
            </button>
            {/* add remove button */}
            <button
              onClick={handleRemoveGridItem}
              className='bg-red-500 text-white px-4 py-1 rounded-lg font-medium text-xs'
            >
              Remove Item
            </button>
          </div>
          <div className='flex flex-wrap gap-4'>
            {items.map((item, index) => (
              <div 
                key={index} 
                className='flex border-2 border-gray-400/50 rounded p-2 items-center' 
                style={{ backgroundColor: item.bgColor ? item.bgColor : colors[item.id - 1].backgroundColor}}
              >
                <p className='text-xs font-medium text-gray-700 mb-2'>{item.text}</p>
                <div className='flex space-x-2'>
                  <label className='flex items-center text-xs font-medium text-gray-700'>
                    C
                    <input 
                      type="number" 
                      value={item.value.colSpan} 
                      onChange={(e) => handleChangeItemValue(item.id, GridItemValueType.COLSPAN, parseInt(e.target.value))}
                      className='ml-1 w-12 px-1 py-0.5 bg-white border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-xs'
                    />
                  </label>
                  <label className='flex items-center text-xs font-medium text-gray-700'>
                    R
                    <input 
                      type="number" 
                      value={item.value.rowSpan} 
                      onChange={(e) => handleChangeItemValue(item.id, GridItemValueType.ROWSPAN, parseInt(e.target.value))}
                      className='ml-1 w-12 px-1 py-0.5 bg-white border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-xs'
                    />
                  </label>
                </div>
              </div>
            ))}
            
          </div>
          <input 
            type="range" 
            min={0} 
            max="100" 
            value={rangeValue} 
            onChange={handleRangeChange}
            className="range accent-blue-500"
            step="25" 
          />
          <div className="w-full flex justify-between text-xs px-2">
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
          </div>

        </div>


        <div className='flex flex-grow'>
          <textarea id="html" ></textarea>
        </div>
      </div>

      <div className='flex flex-col w-4/6 h-full border-l border-gray-400'>
        <iframe className='h-full w-full' srcDoc={htmlCode}></iframe>
      </div>
    </div>
  )
}

export default Home