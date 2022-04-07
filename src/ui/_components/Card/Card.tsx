import { Styles } from './Card.styles';

import { bicycle } from 'assets/images';

import { Button } from 'ui/_components/Button';
import { LikeButton } from 'ui/_components/LikeButton';

import type { SyntheticEvent } from 'react';
import type { CardProps } from './@types/Card.types';
import { useRecoilCallback } from 'recoil';
import { cartProductsIdsState } from 'ui/_tools/Stores/CartStore';

export const Card = ({ id, image, price, quantity, title, year }: CardProps) => {
  const onAddToCart = useRecoilCallback(
    ({ set }) =>
      async (id: number) => {
        set(cartProductsIdsState, prevState => [...prevState, id]);
      },
    []
  );

  const loadDefaultImage = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = bicycle;
  };

  return (
    <Styles.Card>
      <Styles.FavoriteButton>
        <LikeButton id={id} />
      </Styles.FavoriteButton>

      <Styles.CardImage alt="" onError={loadDefaultImage} src={image} />
      {quantity}
      {title}
      {year}
      {price}
      <Button label="Añadir al carrito" onClick={() => onAddToCart(id)} />
    </Styles.Card>
  );
};
