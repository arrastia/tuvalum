import styled from 'styled-components';

import { Row } from 'ui/_styles/components/Row';

const Container = styled('section')`
  width: 100%;
  overflow: auto;
`;

const CardsWrapper = styled(Row)`
  width: 100%;
  gap: 2rem;
  padding: 1rem;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
  }
`;

export const Styles = { Container, CardsWrapper };
