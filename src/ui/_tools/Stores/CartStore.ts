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
    async ({ get }) => {
      const product = get(productsState).find(p => p.id === id);
      return { ...product, quantity: 1 };
    },
  set:
    (id: number) =>
    ({ get, set }, iProduct: any) => {
      // const product = get(productsState).find(p => p.id === id);

      // if (!product) {
      //   return null;
      // }

      // set(cartProductState(id), prevState => ({ ...prevState, quantity: prevState.quantity + 1 }));
      set(cartProductState(id), iProduct);
      // return { ...product, quantity: (product.quantity || 1) + 1 };
    }
});
