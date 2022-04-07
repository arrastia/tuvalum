import { IProduct } from 'core/entities/Product';
import { atom, atomFamily, selectorFamily } from 'recoil';

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
    async ({ get }) => {
      const product = get(productsState).find(p => p.id === id);
      const quantity = get(productQuantityState(id));

      return { ...product, quantity };
    }
});

export const productQuantityState = atomFamily({
  key: 'productQuantityState',
  default: 1
});
