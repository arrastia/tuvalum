import { productWebConfig } from 'configuration/www/Product';
import { HTTPUtils } from 'core/_tools/Utils/HTTPUtils';
import { URLUtils } from 'core/_tools/Utils/URLUtils';

import type { IProduct } from 'core/entities/Product';

const { get } = HTTPUtils;
const { parseURL } = URLUtils;

const getProducts = async (): Promise<IProduct[]> => {
  const { data } = await get({ url: parseURL({ url: productWebConfig.all }) });

  return data;
};

export const ProductRepository = { getProducts };
