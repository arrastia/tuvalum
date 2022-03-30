import { useNavigate } from 'react-router';

import { IoMenu } from 'react-icons/io5';

import { Styles } from './Header.styles';

import { routes } from 'configuration/routes';

import { Button } from 'ui/_components/Button';
import { Logo } from 'ui/_components/Logo';
import { ThemeButton } from '../ThemeButton';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <Styles.Header>
      <Logo onClick={() => navigate(routes.HOME)} />
      <Styles.ActionButtons>
        <ThemeButton />
        <Button icon={<IoMenu />} type="transparent" />
      </Styles.ActionButtons>
    </Styles.Header>
  );
};
