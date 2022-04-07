import { useRecoilState, useRecoilValue } from 'recoil';

import { IoAdd, IoRemove } from 'react-icons/io5';

import { Styles } from './CartProduct.styles';

import { bicycle } from 'assets/images';

import { Button } from 'ui/_components/Button';

import { cartProductState, productQuantityState } from 'ui/_tools/Stores/CartStore';

import type { SyntheticEvent } from 'react';

export const CartProduct = ({ id }: { id: number }) => {
  const { image, title } = useRecoilValue(cartProductState(id));

  const [quantity, setQuantity] = useRecoilState(productQuantityState(id));

  const loadDefaultImage = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = bicycle;
  };

  return (
    <Styles.Product>
      <Styles.ProductImage alt="" onError={loadDefaultImage} src={image} />
      <Styles.Content>
        {title}
        <input onChange={event => setQuantity(parseInt(event.target.value))} type="number" value={quantity} />

        <div style={{ display: 'flex', gap: '1rem' }}>
          <Button icon={<IoAdd />} />
          <Button icon={<IoRemove />} />
        </div>
      </Styles.Content>
    </Styles.Product>
  );
};
