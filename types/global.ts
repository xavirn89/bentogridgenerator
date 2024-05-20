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
