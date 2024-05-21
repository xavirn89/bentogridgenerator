import React from 'react';
import ClickButton from '@/components/ClickButton';
import { Direction } from '@/types/global';
import { iconGithub, iconCoffee } from '@/constants/icons';

interface FooterSectionProps {}

const FooterSection: React.FC<FooterSectionProps> = () => {
  return (
    <div className='flex h-16 items-start mb-2 md:mb-0 md:items-end'>
      <div className='flex flex-grow gap-2 justify-start'>
        <ClickButton
          icon={iconGithub}
          color='bg-white'
          url='https://github.com/xavirn89'
          tooltipDirection={Direction.TOP}
          tooltipText='Github Profile'
        />
        <ClickButton
          icon={iconCoffee}
          color='bg-white'
          url='https://buymeacoffee.com/xavirn'
          tooltipDirection={Direction.TOP}
          tooltipText='Buy me a coffee!'
        />
      </div> 
    </div>
  );
};

export default FooterSection;
