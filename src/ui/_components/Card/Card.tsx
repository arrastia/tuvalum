import type { CardProps } from './@types/Card.types';
import { Styles } from './Card.styles';

export const Card = ({ image, price, title, year }: CardProps) => {
  return (
    <Styles.Card>
      <Styles.CardImage alt="" src={image} />
      {title}
      {year}
      {price}
    </Styles.Card>
  );
};
