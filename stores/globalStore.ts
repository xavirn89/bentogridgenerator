import { create } from 'zustand';
import { GridValue, GridItem } from '@/types/global';

interface GlobalStore {
  grid: GridValue;
  changeGridRows: (rows: number) => void;
  changeGridColumns: (columns: number) => void;
  updateGrid: (grid: GridValue) => void;
  items: GridItem[];
  addItem: (item: GridItem) => void;
  updateItem: (id: number, item: GridItem) => void;
  deleteItem: (id: number) => void;
  updateItems: (items: GridItem[]) => void;
  decorated: boolean;
  toggleDecorated: () => void;
  rounded: boolean;
  toggleRounded: () => void;
  isTailwind: boolean;
  toggleIsTailwind: () => void;
}

const useGlobalStore = create<GlobalStore>((set, get) => ({
  grid: { colSpan: 4, rowSpan: 4 },
  changeGridRows: (rows: number) => set((state) => ({ grid: { ...state.grid, rowSpan: rows } })),
  changeGridColumns: (columns: number) => set((state) => ({ grid: { ...state.grid, colSpan: columns } })),
  updateGrid: (grid: GridValue) => set({ grid }),
  items: [
    { id: 1, text: '', bgColor: '', value: { colSpan: 2, rowSpan: 1 } },
    { id: 2, text: '', bgColor: '', value: { colSpan: 2, rowSpan: 1 } },
    { id: 3, text: '', bgColor: '', value: { colSpan: 1, rowSpan: 4 } },
    { id: 4, text: '', bgColor: '', value: { colSpan: 2, rowSpan: 2 } },
    { id: 5, text: '', bgColor: '', value: { colSpan: 1, rowSpan: 2 } },
    { id: 6, text: '', bgColor: '', value: { colSpan: 3, rowSpan: 2 } },
  ],
  addItem: (item: GridItem) => set((state) => ({ items: [...state.items, item] })),
  updateItem: (id: number, item: GridItem) => set((state) => ({ items: state.items.map((i) => (i.id === id ? item : i)) })),
  deleteItem: (id: number) => set((state) => ({ items: state.items.filter((i) => i.id !== id) })),
  updateItems: (items: GridItem[]) => set({ items }),
  decorated: true,
  toggleDecorated: () => set((state) => ({ decorated: !state.decorated })),
  rounded: true,
  toggleRounded: () => set((state) => ({ rounded: !state.rounded })),
  isTailwind: false,
  toggleIsTailwind: () => set((state) => ({ isTailwind: !state.isTailwind })),
}));

export default useGlobalStore;
