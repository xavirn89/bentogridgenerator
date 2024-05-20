import React, { useState } from 'react'
import { GridValue, GridItemValueType, GridItem } from '@/types/global'
import useGlobalStore from '@/stores/globalStore'

interface Props {
}

const GridSettings = ({ }: Props) => {

  const {grid, updateGrid, items, addItem, deleteItem} = useGlobalStore()

  const handleChangeGridValue = (type: GridItemValueType, value: any) => {
    console.log('type', type)
    console.log('value', value)
    const newGrid = {
      ...grid,
      [type]: value
    }
    updateGrid(newGrid)
  }

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>, gridItemType: GridItemValueType) => {
    console.log('Range changed:', event.target.value);
    handleChangeGridValue(gridItemType, parseInt(event.target.value));
    console.log('Grid item type:', gridItemType);
  };

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
    <div className='flex justify-between px-8 py-4'>

      <div className='flex border border-gray-400 gap-4 rounded-lg w-fit p-3 bg-blue-100 shadow-sm shadow-slate-600'>
        <div className='flex flex-col gap-2'>
          <div className='text-center'><h2 className='font-bold text-lg'>Grid</h2></div>
          <div className='flex'>
            <p className='bg-white w-10 px-2 py-1 rounded-l-lg border-y border-l border-gray-400 shadow-sm shadow-slate-600 text-center'>{grid.colSpan}</p>
            <p className='bg-white w-10 px-2 py-1 rounded-r-lg border-y border border-gray-400 shadow-sm shadow-slate-600 text-center'>{grid.rowSpan}</p>
          </div>
        </div>

        <div className='flex flex-col gap-2 items-center justify-center'>
          <input 
            className="range range-xs range-info" 
            type="range" 
            value={grid.colSpan} 
            min="1" 
            max="10" 
            onChange={(e) => handleRangeChange(e, GridItemValueType.COLSPAN)} 
          />
          <input 
            className="range range-xs range-success" 
            type="range" 
            value={grid.rowSpan} 
            min="1" 
            max="10" 
            onChange={(e) => handleRangeChange(e, GridItemValueType.ROWSPAN)} 
          />
        </div>
      </div>

      <div className='flex flex-col justify-end gap-2'>
        <button 
          onClick={handleAddGridItem} 
          className='bg-green-300 text-black px-4 py-1 rounded-lg font-medium text-xs border border-gray-400 shadow-sm shadow-slate-600'
        >
          Add Item
        </button>
        {/* add remove button */}
        <button
          onClick={handleRemoveGridItem}
          className='bg-red-300 text-black px-4 py-1 rounded-lg font-medium text-xs border border-gray-400 shadow-sm shadow-slate-600'
        >
          Remove Item
        </button>
      </div>
      
    </div>
  )
}

export default GridSettings