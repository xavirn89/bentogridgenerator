import React from 'react'

interface Props {
  flag: boolean,
  icon: React.ReactNode,
  colorOn: string,
  colorOff: string,
  onToggle: () => void,
  disabledOnToggled?: boolean
}

const ToggleButton = ({ flag, icon, colorOn, colorOff, onToggle, disabledOnToggled}: Props) => {
  const handleClick = () => {
    if (!(disabledOnToggled && flag)) {
      onToggle();
    }
  };

  return (
    <button className={`flex items-start p-2 h-fit rounded-lg border border-gray-400 shadow-slate-800 text-white font-bold cursor-pointer
      transition-all ease-in-out duration-300
      ${flag ? "shadow-sm "+colorOn : "shadow-inner "+colorOff} ${flag ? 'active' : ''}`}  
      onClick={handleClick}>
      {icon}
    </button>
  )
}

export default ToggleButton