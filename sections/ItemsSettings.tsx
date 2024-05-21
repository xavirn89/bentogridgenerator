import React from 'react'
import { GridValue, GridItemValueType, GridItem } from '@/types/global'
import { lightColors } from '@/constants/global'
import useGlobalStore from '@/stores/globalStore'


interface Props {
}

const ItemsSettings = ({ }: Props) => {
  const {items, updateItem, addItem, deleteItem, grid} = useGlobalStore()
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
    <div className='flex flex-col flex-grow gap-6'>
      <div className='flex justify-start gap-2'>
        
        <button
          onClick={handleRemoveGridItem}
          className='bg-red-300 text-black px-4 py-1 rounded-lg font-medium text-xs border border-gray-400 shadow-sm shadow-slate-600'
        >
          Remove Item
        </button>

        <button 
          onClick={handleAddGridItem} 
          className='bg-green-300 text-black px-4 py-1 rounded-lg font-medium text-xs border border-gray-400 shadow-sm shadow-slate-600'
        >
          Add Item
        </button>
      </div>
      <div className='flex flex-wrap gap-4 justify-stretch w-full h-fit'>
        {items.map((item, index) => {
          const text = item.text ? item.text : colors[item.id - 1].text
          return (
            <div 
              key={index} 
              className='flex flex-col rounded p-2 items-center border border-gray-400 shadow-sm shadow-slate-600 gap-2' 
              style={{ backgroundColor: item.bgColor ? item.bgColor : colors[item.id - 1].backgroundColor}}
            >
              <div className='flex items-center px-1 gap-1'>
                <h3 className='text-xs'>{text}</h3>
                <div className='flex'>
                  <p className='bg-white text-sm w-8 rounded-l-lg border-y border-l border-gray-400 shadow-sm shadow-slate-600 text-center'>{item.value.colSpan}</p>
                  <p className='bg-white text-sm w-8 rounded-r-lg border-y border border-gray-400 shadow-sm shadow-slate-600 text-center'>{item.value.rowSpan}</p>
                </div>
              </div>

              <div className='flex flex-col gap-1 items-center'>
                <input 
                  type='range'
                  className='range range-xs range-info'
                  min={1} 
                  max={grid.colSpan} 
                  value={item.value.colSpan} 
                  onChange={(e) => handleChangeItemValue(item.id, GridItemValueType.COLSPAN, parseInt(e.target.value))}
                  aria-label="colSpan range input"
                />
                <input 
                  type='range'
                  className='range range-xs range-success'
                  min={1} 
                  max={grid.rowSpan} 
                  value={item.value.rowSpan} 
                  onChange={(e) => handleChangeItemValue(item.id, GridItemValueType.ROWSPAN, parseInt(e.target.value))}
                  aria-label="rowSpan range input"
                />
              </div>
            </div>
          )
        })}

        
      </div>
    </div>
    )
}

export default ItemsSettings