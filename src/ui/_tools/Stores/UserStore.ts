import { atom } from 'recoil';

export const themeState = atom<'light' | 'dark'>({
  key: 'themeState',
  default: 'light'
});

export const likedProductsState = atom<number[]>({
  key: 'likedProductsState',
  default: []
});
