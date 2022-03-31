import { bicycle } from 'assets/images';
import { SyntheticEvent } from 'react';
import { Button } from '../Button';
import { LikeButton } from '../LikeButton';
import type { CardProps } from './@types/Card.types';
import { Styles } from './Card.styles';

export const Card = ({ id, image, onButtonClick, price, title, year }: CardProps) => {
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
      {title}
      {year}
      {price}
      <Button label="Añadir al carrito" onClick={() => onButtonClick(id)} />
    </Styles.Card>
  );
};
