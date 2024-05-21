import React from 'react';
import GridSettings from '@/sections/GridSettings';
import ItemsSettings from '@/sections/ItemsSettings';
import TitleSection from '@/sections/TitleSection';
import CodeArea from '@/sections/CodeArea';
import LayoutArea from '@/sections/LayoutArea';
import FooterSection from '@/sections/FooterSection';
import ToastArea from '@/sections/ToastArea';

const Home: React.FC = () => {
  

  return (
    <div className="flex flex-col md:flex-row h-screen w-full text-black font-mplus p-12">
      <div className="flex flex-col h-full w-full md:w-1/2 gap-6">
        <TitleSection />
        <GridSettings />
        <ItemsSettings />
        <FooterSection />
      </div>

      <div className="flex flex-col h-full w-full md:w-1/2 gap-4 pb-10 md:pb-0">
        <div className="flex flex-col h-1/2">
          <LayoutArea />
        </div>
        <div className="flex h-1/2">
          <CodeArea />
        </div>
      </div>

      <ToastArea />
    </div>
  );
};

export default Home;
