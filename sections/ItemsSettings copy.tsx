import React from 'react'
import { GridValue, GridItemValueType, GridItem } from '@/types/global'
import { lightColors } from '@/constants/global'
import useGlobalStore from '@/stores/globalStore'


interface Props {
}

const ItemsSettings = ({ }: Props) => {
  const {items, updateItem} = useGlobalStore()
  const colors: any = lightColors.items

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

  return (
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
  )
}

export default ItemsSettings