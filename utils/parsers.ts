import { GridValue } from "@/types/global";

export const createIframeHtml = (grid: GridValue, items = "") => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Grid Layout</title>
      <style>
        body, html {
          height: 100%;
          width: 100%;
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .container {
          display: flex;
          height: 95%;
          width: 95%;
          align-items: center;
          justify-content: center;
        }

        .grid {
          display: grid;
          height: 100%;
          width: 100%;
          grid-template-columns: repeat(${grid.colSpan}, 1fr);
          grid-template-rows: repeat(${grid.rowSpan}, 1fr);
          gap: 16px;
          background-color: #eee;
          padding: 8px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25), 0 1px 2px rgba(0, 0, 0, 0.1);
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="grid">
        ${items}
        </div>
      </div>
    </body>
  </html>
  `
}

export const createHTML = (grid: GridValue, items = "") => {
  return `
  <div class="container" style="display: flex; height: 100%; width: 100%; align-items: center; justify-content: center;">
    <div class="grid" style="display: grid; height: 100%; width: 100%; grid-template-columns: repeat(${grid.colSpan}, 1fr); grid-template-rows: repeat(${grid.rowSpan}, 1fr); gap: 16px; background-color: #eee; padding: 8px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25), 0 1px 2px rgba(0, 0, 0, 0.1);">
    ${items}
    </div>
  </div>
  `
}

export const createHTMLTailwind = (grid: GridValue, items = "") => {
  return `
  <div className="flex h-full w-full items-center justify-center">
    <div className="grid h-full w-full gap-4 bg-gray-200 p-2 rounded-lg shadow-md grid-cols-${grid.colSpan} grid-rows-${grid.rowSpan}">
    ${items}
    </div>
  </div>
  `
}