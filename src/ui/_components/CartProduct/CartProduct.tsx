import { bicycle } from 'assets/images';
import { SyntheticEvent } from 'react';
import { IoAdd, IoRemove } from 'react-icons/io5';
import { useRecoilState, useRecoilValue } from 'recoil';

import { cartProductState } from 'ui/_tools/Stores/CartStore';
import { Button } from '../Button';
import { Styles } from './CartProduct.styles';

export const CartProduct = ({ id }: { id: number }) => {
  const cartProduct = useRecoilValue(cartProductState(id));

  // const increase = () => {
  //   setCartProduct(prev => ({ ...prev, quantity: (prev.quantity || 1) + 1 }));
  // };

  // const decrease = () => {
  //   setCartProduct(prev => ({ ...prev, quantity: (prev.quantity || 1) - 1 }));
  // };

  // if (cartProduct === null) {
  //   return null;
  // }

  const loadDefaultImage = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = bicycle;
  };

  return (
    <Styles.Product>
      <Styles.ProductImage src={cartProduct?.image} alt="" onError={loadDefaultImage} />
      <Styles.Content>
        {cartProduct?.title}
        {cartProduct?.quantity}

        <div style={{ display: 'flex', gap: '1rem' }}>
          <Button icon={<IoAdd />} />
          <Button icon={<IoRemove />} />
        </div>
      </Styles.Content>
    </Styles.Product>
  );
};
