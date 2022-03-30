import styled from 'styled-components';

const Icon = styled('img')`
  cursor: pointer;
  transition: transform 0.1s ease-in;
  user-select: none;
  width: 25vmin;

  &:active {
    transform: scale(0.9);
    transition: transform 0.1s ease-in;
  }
`;

export const Styles = { Icon };
