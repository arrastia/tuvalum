import { IProduct } from 'core/entities/Product';
import { atom, selectorFamily } from 'recoil';

import { productsState } from './ProductStore';

export const isCartVisibleState = atom({
  key: 'isCartVisibleState',
  default: true
});

export const cartProductsIdsState = atom<number[]>({
  key: 'cartProductsIdsState',
  default: []
});

export const cartProductState = selectorFamily({
  key: 'cartProductState',
  get:
    (id: number) =>
    async ({ get }) =>
      get(productsState).find(p => p.id === id)
});
