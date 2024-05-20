import { GridValue } from "@/types/global";

export const createHtml = (grid: GridValue, itemsHTML = "") => {
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
          height: 90%;
          width: 90%;
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
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="grid">
        ${itemsHTML}
        </div>
      </div>
    </body>
  </html>
  `
}