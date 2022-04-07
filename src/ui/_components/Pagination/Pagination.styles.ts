import styled from 'styled-components';
import { Button } from 'ui/_styles/components/Button';
import { Row } from 'ui/_styles/components/Row';

const Pagination = styled(Row)`
  justify-content: space-between;
`;

const Page = styled(Button)<{ isActive: boolean }>`
  background-color: ${({ theme, isActive }) => (isActive ? theme.colors.primary : 'transparent')};
  padding: 0.5rem;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  color: ${({ theme, isActive }) => (isActive ? theme.colors.text : theme.colors.primary)};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Styles = { Pagination, Page };
