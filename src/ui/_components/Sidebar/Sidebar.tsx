import { useNavigate } from 'react-router';

import { IoMenu } from 'react-icons/io5';

import { Styles } from './Sidebar.styles';

import { routes } from 'configuration/routes';

import { Button } from 'ui/_components/Button';
import { ThemeButton } from 'ui/_components/ThemeButton';

export const Sidebar = () => {
  const navigate = useNavigate();

  const onRedirect = (to: string) => navigate(to);

  return (
    <Styles.Sidebar>
      <Styles.ThemeTools>
        <ThemeButton />
        <Button icon={<IoMenu />} onClick={() => onRedirect(routes.HOME)} />
      </Styles.ThemeTools>
    </Styles.Sidebar>
  );
};
