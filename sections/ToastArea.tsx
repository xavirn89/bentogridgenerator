'use client'
import useGlobalStore from '@/stores/globalStore';
import React from 'react'

const ToastArea = () => {
  const { copied } = useGlobalStore();
  
  return (
    <div className={`toast toast-end transition-all ease-in-out duration-300 ${copied ? '' : 'hidden'}`}>
      <div className="alert alert-info">
        <span className="text-white">Code copied to clipboard!</span>
      </div>
    </div>
  )
}

export default ToastArea