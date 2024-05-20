import React, { useEffect, useState } from 'react'
import { GridValue, GridItemValueType, GridItem } from '@/types/global'
import useGlobalStore from '@/stores/globalStore'
import ToggleButton from '@/components/ToggleButton'
import ClickButton from '@/components/ClickButton'

interface Props {
}

const GridSettings = ({ }: Props) => {

  const {grid, updateGrid} = useGlobalStore()
  const [decorated, setDecorated] = useState(false);
  const [isCss, setIsCss] = useState(true);
  const [isTailwind, setIsTailwind] = useState(false);

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

  const toggleCheckbox = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
    setter((prev) => !prev);
  }

  const iconFood = <svg width="32px" height="32px" viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M774.8 327.8c-50.6-4.8-97.3 4.3-131 22.7 15.9 20.3 26.1 52.1 26.1 87.9 0 29.2-6.8 55.7-17.9 75.5 28.3 16.9 64.5 28.8 104.6 32.6 96.7 9.2 179.2-32.4 184.2-92.8s-69.3-116.7-166-125.9z" fill="#FFB89A"></path><path d="M67.2 494l1 31c2.2 67.7 26.2 133.6 69.6 190.4 41.6 54.5 99.6 99.2 167.9 129.3 15.2 6.7 32.9-0.2 39.5-15.4 6.7-15.2-0.2-32.9-15.4-39.5-59-26-108.9-64.3-144.4-110.8-29-38-47.5-80.7-54.4-125h762.6c-7 44.8-25.8 87.9-55.4 126.3-36.1 46.8-86.8 85.2-146.8 110.9-15.2 6.5-22.2 24.2-15.7 39.4 4.9 11.4 15.9 18.2 27.6 18.2 4 0 8-0.8 11.8-2.4 144.5-62.2 237-185.3 241.3-321.4l1-31H67.2z" fill="#45484C"></path><path d="M591.9 800.1h-159c-35.2 0-64.1 28.8-64.1 64.1s28.8 64.1 64.1 64.1h159c35.2 0 64.1-28.8 64.1-64.1s-28.9-64.1-64.1-64.1z m0 68.1h-159c-2.1 0-4.1-2-4.1-4.1s2-4.1 4.1-4.1h159c2.1 0 4.1 2 4.1 4.1s-2 4.1-4.1 4.1z" fill="#45484C"></path><path d="M498.1 373.5c-9.6-13.5-28.4-16.6-41.9-6.9-13.5 9.6-16.6 28.4-6.9 41.9 10.8 15.1 16.6 33 16.6 51.7 0 16.6 13.4 30 30 30s30-13.4 30-30c0-31.4-9.6-61.4-27.8-86.7zM432.4 321.8c-17.7-7.1-36.3-10.7-55.5-10.7-82.2 0-149 66.8-149 149 0 16.6 13.4 30 30 30s30-13.4 30-30c0-49.1 39.9-89 89-89 11.5 0 22.6 2.1 33.1 6.4 15.4 6.2 32.8-1.3 39-16.7 6.2-15.4-1.2-32.9-16.6-39z" fill="#33CC99"></path><path d="M549.4 274.7c-46.7-45.6-107.7-70.8-171.8-70.8-64.1 0-125.1 25.1-171.8 70.8-46.1 45.1-74 106-78.6 171.4-1.2 16.5 11.3 30.9 27.8 32 16.5 1.1 30.9-11.3 32-27.8 3.5-50.8 25.1-97.9 60.7-132.7 35.4-34.6 81.5-53.7 129.9-53.7 48.3 0 94.5 19.1 129.9 53.7 35.6 34.8 57.1 81.9 60.7 132.7 1.1 15.8 14.3 27.9 29.9 27.9 0.7 0 1.4 0 2.1-0.1 16.5-1.2 29-15.5 27.8-32-4.6-65.4-32.5-126.3-78.6-171.4zM895.1 385.9c-11.5-19.4-27.7-36.6-48.1-51.2l53.9-58.3c11.2-12.2 10.5-31.2-1.7-42.4s-31.2-10.5-42.4 1.7l-65 70.4c-5-1.8-10.1-3.5-15.3-5l82.4-159.2c7.6-14.7 1.9-32.8-12.9-40.4-14.7-7.6-32.8-1.9-40.4 12.9l-91.2 176.3c-5.5-0.3-11.1-0.5-16.7-0.5-21.9 0-43.5 2.4-64.3 7.2-16.1 3.7-26.2 19.8-22.5 36 3.7 16.1 19.8 26.2 36 22.5 16.3-3.8 33.4-5.7 50.7-5.7 43.6 0 84.2 11.8 114.3 33.3 27.1 19.3 42 44 42 69.5 0 16.6 13.4 30 30 30s30-13.4 30-30c0-23.5-6.3-46.1-18.8-67.1z" fill="#45484C"></path></g></svg>
  const iconCoffe = <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Environment / Coffe_To_Go"> <path id="Vector" d="M6.68604 15H17.3146M6.51465 13H17.4861M7.74316 7H16.2571M7.74316 7C7.13829 7 6.8358 7 6.61279 7.12093C6.41686 7.22718 6.26205 7.3963 6.17292 7.60059C6.07151 7.83303 6.0973 8.13407 6.14893 8.73633L6.94921 18.073C7.0377 19.1053 7.08203 19.6225 7.31149 20.0132C7.51358 20.3572 7.81426 20.6327 8.17432 20.8047C8.58318 21 9.10126 21 10.1377 21H13.8628C14.8992 21 15.4174 21 15.8263 20.8047C16.1864 20.6327 16.4869 20.3572 16.689 20.0132C16.9185 19.6225 16.9628 19.1056 17.0513 18.073L17.8517 8.73471C17.9033 8.13312 17.929 7.8329 17.8276 7.60059C17.7385 7.3963 17.5838 7.22718 17.3878 7.12093C17.1648 7 16.862 7 16.2571 7M7.74316 7H6.7499C5.85031 7 5.40023 7 5.13867 6.81152C4.90778 6.64515 4.75884 6.38816 4.72894 6.10515C4.69504 5.78431 4.91871 5.3929 5.36568 4.6107L5.36621 4.60977C5.70039 4.02496 5.86748 3.73255 6.10197 3.51953C6.31161 3.32909 6.55925 3.18544 6.82861 3.09791C7.12991 3 7.46658 3 8.14014 3H15.8604C16.5339 3 16.8707 3 17.172 3.09791C17.4413 3.18544 17.6888 3.32909 17.8984 3.51953C18.1329 3.73255 18.3 4.02496 18.6342 4.60977C19.0813 5.39224 19.3053 5.78425 19.2714 6.10515C19.2415 6.38816 19.0925 6.64515 18.8616 6.81152C18.6001 7 18.1497 7 17.2501 7H16.2571" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
  const iconCopy = <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.9983 10C20.9862 7.82497 20.8897 6.64706 20.1213 5.87868C19.2426 5 17.8284 5 15 5H12C9.17157 5 7.75736 5 6.87868 5.87868C6 6.75736 6 8.17157 6 11V16C6 18.8284 6 20.2426 6.87868 21.1213C7.75736 22 9.17157 22 12 22H15C17.8284 22 19.2426 22 20.1213 21.1213C21 20.2426 21 18.8284 21 16V15" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M3 10V16C3 17.6569 4.34315 19 6 19M18 5C18 3.34315 16.6569 2 15 2H11C7.22876 2 5.34315 2 4.17157 3.17157C3.51839 3.82475 3.22937 4.69989 3.10149 6" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
  const iconCss = <svg width="32px" height="32px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8"></path> <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"></path> <path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white"></path> </g></svg>
  const iconTailwind = <svg width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>file_type_tailwind</title><path d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z" style={{fill:"#44a8b3"}}></path></g></svg>
  return (
    <div className='flex flex-wrap gap-4 justify-between'>

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


      <div className='flex flex-wrap w-72 gap-1'>
        <ToggleButton 
          flag={decorated}
          icon={iconFood}
          colorOn='bg-green-200'
          colorOff='bg-red-300'
          onToggle={() => toggleCheckbox(setDecorated)}
        />
        <ToggleButton 
          flag={!isTailwind}
          icon={iconCss}
          colorOn='bg-green-200'
          colorOff='bg-red-300'
          onToggle={() => toggleCheckbox(setIsTailwind)}
          disabledOnToggled
        />
        <ToggleButton 
          flag={isTailwind}
          icon={iconTailwind}
          colorOn='bg-green-200'
          colorOff='bg-red-300'
          onToggle={() => toggleCheckbox(setIsTailwind)}
          disabledOnToggled
        />
      </div>

      <div className='flex flex-grow gap-2'>
        <ClickButton
          icon={iconCoffe}
          color='bg-white'
          onClick={() => {}}
        />

        <ClickButton
          icon={iconCopy}
          color='bg-white'
          url={"https://buymeacoffee.com/xavirn"}
        />
      </div>      
      
    </div>
  )
}

export default GridSettings