import { useNavigate } from 'react-router';

import { IoCart } from 'react-icons/io5';

import { Styles } from './Header.styles';

import { routes } from 'configuration/routes';

import { Button } from 'ui/_components/Button';
import { Logo } from 'ui/_components/Logo';
import { ThemeButton } from '../ThemeButton';
import { useSetRecoilState } from 'recoil';
import { isCartVisibleState } from 'ui/_tools/Stores/CartStore';

export const Header = () => {
  const navigate = useNavigate();

  const setCartVisibility = useSetRecoilState(isCartVisibleState);

  const toggleVisibility = () => setCartVisibility(prevState => !prevState);

  return (
    <Styles.Header>
      <Logo onClick={() => navigate(routes.HOME)} />
      <Styles.ActionButtons>
        <ThemeButton />
        <Button icon={<IoCart />} label="Carrito" onClick={toggleVisibility} />
      </Styles.ActionButtons>
    </Styles.Header>
  );
};
