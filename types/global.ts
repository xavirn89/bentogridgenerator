export type GridValue = {
  colSpan: number;
  rowSpan: number;
}

export type GridItem = {
  id: number;
  text: string;
  bgColor: string;
  value: GridValue;
}

export enum GridItemValueType {
  COLSPAN = 'colSpan',
  ROWSPAN = 'rowSpan',
  BGCOLOR = 'bgColor',
  TEXT = 'text'
}

export enum Direction {
  TOP = 'top',
  BOTTOM = 'bottom',
  LEFT = 'left',
  RIGHT = 'right'
}

export type ItemValues = {
  id: number;
  text: string;
  backgroundColor: string;
  tailwindBackgroundColor: string;
}