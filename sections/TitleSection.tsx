'use client'
import React from 'react';
import useGlobalStore from '@/stores/globalStore';
import ClickButton from '@/components/ClickButton';
import { Direction } from '@/types/global';
import { iconCopy } from '@/constants/icons';

const TitleSection: React.FC = () => {
  const { isTailwind, cssCode, tailwindCode, copied, toggleCopied } = useGlobalStore();

  const handleCopy = async () => {
    const codeToCopy = isTailwind ? tailwindCode : cssCode;
    try {
      await navigator.clipboard.writeText(codeToCopy);
      console.log('Copying to clipboard was successful!');
      if (!copied) {
        toggleCopied();
        setTimeout(() => {
          toggleCopied();
        }, 2000);
      }
    } catch (err) {
      console.error('Could not copy text: ', err);
    }
  };

  return (
    <div className='flex'>
      <div className='flex flex-col gap-1'>
        <h1 className='text-4xl font-bold'>Bento Grid Generator 🍱</h1>
        <p className='text-sm md:text-md'>Create custom bento grids easily and export them as HTML+CSS or HTML+Tailwind.</p>
      </div>
      <div className='flex flex-grow gap-2 justify-end'>
        <ClickButton
          icon={iconCopy}
          color='bg-white'
          onClick={handleCopy}
          tooltipDirection={Direction.TOP}
          tooltipText='Copy'
        />
      </div>     
    </div>
  );
};

export default TitleSection;
