import styled from 'styled-components';

import { Row } from 'ui/_styles/components/Row';

const Container = styled('section')`
  width: 100%;
  overflow: auto;
`;

const CardsWrapper = styled(Row)`
  width: 100%;
  gap: 1rem;
  padding: 1rem;
  flex-wrap: wrap;
`;

export const Styles = { Container, CardsWrapper };
