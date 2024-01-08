export type Direction = 'up' | 'down';

export interface Item {
  id: number;
  title: string;
}

export const mockItems: Item[] = [
  { id: 1, title: 'First element' },
  { id: 2, title: 'Second element' },
  { id: 3, title: 'Third element' },
  { id: 4, title: 'Fourth element' },
  { id: 5, title: 'Fifth element' },
];
