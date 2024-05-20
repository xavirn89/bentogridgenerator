import React, { useState } from 'react'
import { Direction } from '@/types/global'

interface Props {
  flag: boolean,
  icon: React.ReactNode,
  colorOn: string,
  colorOff: string,
  onToggle: () => void,
  disabledOnToggled?: boolean
  tooltipDirection?: Direction
  tooltipText?: string
}

const ToggleButton = ({ flag, icon, colorOn, colorOff, onToggle, disabledOnToggled, tooltipDirection, tooltipText = "" }: Props) => {

  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    if (!(disabledOnToggled && flag)) {
      onToggle();
    }
  };

  return (
    <button className={`flex items-start p-2 h-fit rounded-lg border border-gray-400 shadow-slate-800 text-white font-bold cursor-pointer
      transition-all ease-in-out duration-300
      ${flag ? "shadow-sm "+colorOn : "shadow-inner "+colorOff} ${flag ? 'active' : ''}
      ${tooltipDirection ? 'tooltip tooltip-'+tooltipDirection : '' }
      ${tooltipDirection && isHovered ? 'tooltip-active' : '' }
      `}  
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...(tooltipText && { 'data-tip': tooltipText })}
      >
      {icon}
    </button>
  )
}

export default ToggleButton