import { useRecoilCallback, useRecoilValue } from 'recoil';

import { Styles } from './ProductsList.styles';

import { Card } from 'ui/_components/Card';
import { ListTitle } from './_components/ListTitle';

import { productsState } from 'ui/_tools/Stores/ProductStore';

import { cartProductsIdsState } from 'ui/_tools/Stores/CartStore';

export const ProductsList = () => {
  const products = useRecoilValue(productsState);

  return (
    <Styles.Container>
      <ListTitle />
      <Styles.CardsWrapper>
        {products.map(product => (
          <Card
            id={product.id}
            image={product.image}
            key={product.id}
            price={product.price}
            quantity={product.quantity}
            title={product.title}
            year={product.year}
          />
        ))}
      </Styles.CardsWrapper>
    </Styles.Container>
  );
};
