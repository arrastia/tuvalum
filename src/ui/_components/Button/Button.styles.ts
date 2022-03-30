import styled from 'styled-components';

import { Button } from 'ui/_styles/components/Button';

const ButtonWrapper = styled(Button)`
  padding: 0.5rem;

  &.primary {
    background: ${({ theme: { colors } }) => colors.primary};
    color: ${({ theme: { colors } }) => colors.text};
  }
  &.secondary {
    background-color: ${({ theme: { colors } }) => colors.secondary};
  }
  &.accent {
    background-color: ${({ theme: { colors } }) => colors.accent};
  }
  &.delete {
    background-color: ${({ theme: { colors } }) => colors.error};
  }
  &.transparent {
    background-color: ${({ theme: { colors } }) => colors.transparent};
  }
  &.disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

const Icon = styled('span')`
  align-items: center;
  display: flex;
  font-size: x-large;
`;

const Text = styled('span')`
  font-size: large;
  line-height: normal;
  font-size: 12px;
`;

export const Styles = { ButtonWrapper, Icon, Text };
