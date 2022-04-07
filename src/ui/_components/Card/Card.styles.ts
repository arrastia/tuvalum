import styled from 'styled-components';

import { Column } from 'ui/_styles/components/Column';

const Card = styled(Column)`
  background-color: ${({ theme: { colors } }) => colors.glass};
  border-radius: 5px;
  cursor: pointer;
  gap: 0.5rem;
  max-width: 15rem;
  padding: 0.75rem;
  transition: all 100ms ease-in;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 0;

  &:hover {
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.01);
    transition: all 100ms ease-in;
  }
`;

const CardImage = styled('img')`
  height: 187px;
  object-fit: cover;
  width: 225px;
`;

const FavoriteButton = styled('div')`
  position: absolute;
  right: 0.5rem;
`;

export const Styles = { Card, CardImage, FavoriteButton };
