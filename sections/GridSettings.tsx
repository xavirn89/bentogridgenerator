import React from 'react'
import { GridValue, GridItemValueType } from '@/types/global'

interface Props {
  grid: GridValue
  handleChangeGridValue: (type: GridItemValueType, value: any) => void
}

const GridSettings = ({ grid, handleChangeGridValue }: Props) => {
  return (
    <div className='flex justify-end'>
      <div className='flex border border-gray-400 gap-4 rounded-lg w-fit p-3 bg-blue-100'>
        <h2 className='font-bold text-lg'>Grid</h2>
        <div className='items-center'>
          X
          <input 
            type="number" 
            value={grid.colSpan} 
            onChange={(e) => handleChangeGridValue(GridItemValueType.COLSPAN, parseInt(e.target.value))} 
            className='ml-2 px-2 py-1 bg-white border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-xs w-20'
          />
        </div>
        <div className='items-center'>
          Y
          <input 
            type="number" 
            value={grid.rowSpan} 
            onChange={(e) => handleChangeGridValue(GridItemValueType.ROWSPAN, parseInt(e.target.value))} 
            className='ml-2 px-2 py-1 bg-white border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-xs w-20'
          />
        </div>
      </div>
    </div>
  )
}

export default GridSettings