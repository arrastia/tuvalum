import styled from 'styled-components';
import { Column } from 'ui/_styles/components/Column';
import { Row } from 'ui/_styles/components/Row';

const Title = styled('h1')`
  margin: 0;
`;

const TitleWrapper = styled(Row)`
  justify-content: space-between;
`;

const ListTitle = styled(Column)`
  backdrop-filter: blur(10px);
  background: ${({ theme }) => theme.colors.glass};
  padding: 1rem;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1;
`;

export const Styles = { ListTitle, Title, TitleWrapper };
