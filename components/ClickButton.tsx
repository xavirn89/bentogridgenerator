'use client'

import { Direction } from '@/types/global'
import React, { useState } from 'react'

interface Props {
  icon: React.ReactNode,
  color: string,
  onClick?: () => void
  url?: string
  tooltipDirection?: Direction
  tooltipText?: string
}

const ClickButton = ({ icon, color, onClick = () => {}, url, tooltipDirection, tooltipText = "" }: Props) => {

  const [isHovered, setIsHovered] = useState(false)

  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className={`flex flex-col border border-gray-200 shadow-sm shadow-slate-600 rounded-lg items-center w-fit h-fit p-2
      hover:scale-105 hover:border-info transition-all ease-in-out duration-300
      ${color}
      ${tooltipDirection ? 'tooltip tooltip-'+tooltipDirection : '' }
      ${tooltipDirection && isHovered ? 'tooltip-active' : '' }
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...(tooltipText && { 'data-tip': tooltipText })}
      aria-label="Clickable Button"
      >
        {icon}
      </a>
    )
  }

  return (
    <button className={`flex flex-col border border-gray-200 shadow-sm shadow-slate-600 rounded-lg items-center w-fit h-fit p-2
    hover:scale-105 hover:border-info transition-all ease-in-out duration-300
    ${color}
    ${tooltipDirection ? 'tooltip tooltip-'+tooltipDirection : '' }
    ${tooltipDirection && isHovered ? 'tooltip-active' : '' }
    `} 
    onClick={() => onClick()}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    {...(tooltipText && { 'data-tip': tooltipText })}
    aria-label="Clickable Button"
    >
      {icon}
    </button>
  )
}

export default ClickButton