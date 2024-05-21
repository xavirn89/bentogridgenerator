'use client';
import React, { useEffect, useState, useMemo, useCallback } from 'react';
import useGlobalStore from '@/stores/globalStore';
import { ItemValues, GridItem } from '@/types/global';
import { lightColors } from '@/constants/colors';
import { createIframeHtml, createHTML, createHTMLTailwind } from '@/utils/parsers';

import GridSettings from '@/sections/GridSettings';
import ItemsSettings from '@/sections/ItemsSettings';
import TitleSection from '@/sections/TitleSection';
import CodeArea from '@/sections/CodeArea';
import LayoutArea from '@/sections/LayoutArea';
import FooterSection from '@/sections/FooterSection';

const Home: React.FC = () => {
  const {
    grid,
    items,
    decorated,
    rounded,
    isTailwind,
    cssCode,
    setCssCode,
    tailwindCode,
    setTailwindCode,
    copied
  } = useGlobalStore();

  const colors = useMemo(() => lightColors.items as ItemValues[], []);

  const [iFrameCode, setIFrameCode] = useState<string>('');

  const codeHtmlArea = useMemo(() => (isTailwind ? tailwindCode : cssCode), [isTailwind, tailwindCode, cssCode]);

  const generateGridItemHTML = useCallback((item: GridItem, index: number) => {
    const bgColor = decorated ? colors[index].backgroundColor : 'lightGray';
    const text = decorated ? `<p>${colors[index].text}</p>` : `${index + 1}`;
    const borders = rounded ? 'border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25), 0 1px 2px rgba(0, 0, 0, 0.1);' : '';
    return `
      <div 
        style="font-family: 'M PLUS 2 Variable', sans-serif; grid-column: span ${item.value.colSpan}; grid-row: span ${item.value.rowSpan}; background-color: ${bgColor}; ${borders} display: flex; align-items: center; justify-content: center;"
      >
        ${text}
      </div>
    `;
  }, [decorated, rounded, colors]);

  const generateGridItemTailwind = useCallback((item: GridItem, index: number) => {
    const bgColor = decorated ? colors[index].tailwindBackgroundColor : 'bg-gray-200';
    const text = decorated ? `<p>${colors[index].text}</p>` : `${index + 1}`;
    const borders = rounded ? 'rounded-lg shadow-md' : '';
    return `
      <div 
        className="col-span-${item.value.colSpan} row-span-${item.value.rowSpan} ${bgColor} ${borders} flex items-center justify-center"
      >
        ${text}
      </div>
    `;
  }, [decorated, rounded, colors]);

  useEffect(() => {
    const iFrameHtml = items.map((item, index) => generateGridItemHTML(item, index)).join('');
    const IFrameCode = createIframeHtml(grid, iFrameHtml);
    setIFrameCode(IFrameCode);

    const css = items.map((item, index) => generateGridItemHTML(item, index)).join('');
    const newCssCode = createHTML(grid, css);
    setCssCode(newCssCode);

    const tailwind = items.map((item, index) => generateGridItemTailwind(item, index)).join('');
    const newTailwindCode = createHTMLTailwind(grid, tailwind);
    setTailwindCode(newTailwindCode);

  }, [grid, items, decorated, rounded, colors, setCssCode, setTailwindCode, generateGridItemHTML, generateGridItemTailwind]);

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
          <LayoutArea iFrameCode={iFrameCode} />
        </div>
        <div className="flex h-1/2">
          <CodeArea htmlCode={codeHtmlArea} />
        </div>
      </div>

      <div className={`toast toast-end transition-all ease-in-out duration-300 ${copied ? '' : 'hidden'}`}>
        <div className="alert alert-info">
          <span className="text-white">Code copied to clipboard!</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
