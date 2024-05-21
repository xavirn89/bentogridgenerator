'use client'

import React, { useCallback } from 'react';
import { GridItemValueType, Direction } from '@/types/global';
import useGlobalStore from '@/stores/globalStore';
import ToggleButton from '@/components/ToggleButton';
import { iconFood, iconCss, iconTailwind, iconRounded } from '@/constants/icons';

interface GridSettingsProps {}

const GridSettings: React.FC<GridSettingsProps> = () => {
  const { grid, updateGrid, decorated, toggleDecorated, rounded, toggleRounded, isTailwind, toggleIsTailwind } = useGlobalStore();

  const handleChangeGridValue = useCallback(
    (type: GridItemValueType, value: number) => {
      const newGrid = {
        ...grid,
        [type]: value,
      };
      updateGrid(newGrid);
    },
    [grid, updateGrid]
  );

  const handleRangeChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, gridItemType: GridItemValueType) => {
      handleChangeGridValue(gridItemType, parseInt(event.target.value));
    },
    [handleChangeGridValue]
  );

  return (
    <div className='flex flex-wrap gap-4 justify-between'>
      <div className='flex border border-gray-400 gap-4 rounded-lg w-fit p-3 bg-blue-100 shadow-sm shadow-slate-600'>
        <div className='flex flex-col gap-2'>
          <div className='text-center'>
            <h2 className='font-bold text-lg'>Grid</h2>
          </div>
          <div className='flex'>
            <p className='bg-white w-10 px-2 py-1 rounded-l-lg border-y border-l border-gray-400 shadow-sm shadow-slate-600 text-center'>
              {grid.colSpan}
            </p>
            <p className='bg-white w-10 px-2 py-1 rounded-r-lg border-y border border-gray-400 shadow-sm shadow-slate-600 text-center'>
              {grid.rowSpan}
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-2 items-center justify-center'>
          <input
            className='range range-xs range-info'
            type='range'
            value={grid.colSpan}
            min='1'
            max='10'
            onChange={(e) => handleRangeChange(e, GridItemValueType.COLSPAN)}
            aria-label='colSpan range input'
          />
          <input
            className='range range-xs range-success'
            type='range'
            value={grid.rowSpan}
            min='1'
            max='10'
            onChange={(e) => handleRangeChange(e, GridItemValueType.ROWSPAN)}
            aria-label='rowSpan range input'
          />
        </div>
      </div>

      <div className='flex flex-wrap gap-1'>
        <ToggleButton
          flag={!isTailwind}
          icon={iconCss}
          colorOn='bg-green-200'
          colorOff='bg-red-300'
          onToggle={toggleIsTailwind}
          disabledOnToggled
          tooltipDirection={Direction.TOP}
          tooltipText='CSS'
        />
        <ToggleButton
          flag={isTailwind}
          icon={iconTailwind}
          colorOn='bg-green-200'
          colorOff='bg-red-300'
          onToggle={toggleIsTailwind}
          disabledOnToggled
          tooltipDirection={Direction.TOP}
          tooltipText='Tailwind'
        />
        <ToggleButton
          flag={decorated}
          icon={iconFood}
          colorOn='bg-green-200'
          colorOff='bg-red-300'
          onToggle={toggleDecorated}
          tooltipDirection={Direction.TOP}
          tooltipText='Food'
        />
        <ToggleButton
          flag={rounded}
          icon={iconRounded}
          colorOn='bg-green-200'
          colorOff='bg-red-300'
          onToggle={toggleRounded}
          tooltipDirection={Direction.TOP}
          tooltipText='Borders'
        />
      </div>
    </div>
  );
};

export default GridSettings;
