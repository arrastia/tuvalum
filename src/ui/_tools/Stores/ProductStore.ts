import { selector } from 'recoil';

import { ProductService } from 'core/services/Product';

export const productsState = selector({
  key: 'productsState',
  get: async () => await ProductService.getAllProducts()
});
