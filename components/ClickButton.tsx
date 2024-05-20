import React from 'react'

interface Props {
  icon: React.ReactNode,
  color: string,
  onClick?: () => void
  url?: string
}

const ClickButton = ({ icon, color, onClick = () => {}, url }: Props) => {
  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className={`flex flex-col border border-gray-200 shadow-sm shadow-slate-600 rounded-lg items-center w-fit h-fit p-2
      hover:scale-105 hover:border-info transition-all ease-in-out duration-300
      ${color}`}>
        {icon}
      </a>
    )
  }

  return (
    <button className={`flex flex-col border border-gray-200 shadow-sm shadow-slate-600 rounded-lg items-center w-fit h-fit p-2
    hover:scale-105 hover:border-info transition-all ease-in-out duration-300
    ${color}`} onClick={() => onClick()}>
      {icon}
    </button>
  )
}

export default ClickButton