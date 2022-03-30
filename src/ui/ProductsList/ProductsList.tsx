import { useRecoilValue } from 'recoil';

import { IoFilter } from 'react-icons/io5';

import { Styles } from './ProductsList.styles';

import { Button } from 'ui/_components/Button';
import { Card } from 'ui/_components/Card';

import { productsState } from 'ui/_tools/Stores/ProductStore';

export const ProductsList = () => {
  const products = useRecoilValue(productsState);

  return (
    <Styles.Container>
      <Styles.TitleWrapper>
        <Styles.Title>Products</Styles.Title>
        <Button icon={<IoFilter />} />
      </Styles.TitleWrapper>
      {products.map(product => (
        <Card image={product.image} key={product.id} price={product.price} title={product.title} year={product.year} />
      ))}
    </Styles.Container>
  );
};
