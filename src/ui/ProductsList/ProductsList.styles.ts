import styled from 'styled-components';
import { Row } from 'ui/_styles/components/Row';

const Container = styled('section')`
  width: 100%;
  overflow: auto;
`;

const Title = styled('h1')`
  margin: 0;
`;

const TitleWrapper = styled(Row)`
  background: ${({ theme }) => theme.colors.glass};
  justify-content: space-between;
  padding: 1rem;
  position: sticky;
  backdrop-filter: blur(10px);
  top: 0;
  width: 100%;
`;

export const Styles = { Container, Title, TitleWrapper };
