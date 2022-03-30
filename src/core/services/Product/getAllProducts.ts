import { ProductRepository } from 'core/repositories/Product';

import { Product } from 'core/entities/Product';

import type { IProduct } from 'core/entities/Product';

export const getAllProducts = async (): Promise<IProduct[]> => {
  const response = await ProductRepository.getProducts();

  return response.map(product => new Product(product));
};
