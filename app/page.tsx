import React from 'react';
import dynamic from 'next/dynamic'

// Dynamic imports for client-side components with SSR disabled
const GridSettings = dynamic(() => import('@/sections/GridSettings'), { ssr: false })
const ItemsSettings = dynamic(() => import('@/sections/ItemsSettings'), { ssr: false })
const TitleSection = dynamic(() => import('@/sections/TitleSection'), { ssr: false })
const CodeArea = dynamic(() => import('@/sections/CodeArea'), { ssr: false })
const LayoutArea = dynamic(() => import('@/sections/LayoutArea'), { ssr: false })
const ToastArea = dynamic(() => import('@/sections/ToastArea'), { ssr: false })

// Static import for server-side component
import FooterSection from '@/sections/FooterSection'

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
