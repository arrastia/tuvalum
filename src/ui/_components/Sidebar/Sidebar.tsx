import { useNavigate } from 'react-router';

import { IoMenu } from 'react-icons/io5';

import { Styles } from './Sidebar.styles';

import { routes } from 'configuration/routes';

import { Button } from 'ui/_components/Button';
import { ThemeButton } from 'ui/_components/ThemeButton';
import { useRecoilValue } from 'recoil';
import { cartProductsIdsState, isCartVisibleState } from 'ui/_tools/Stores/CartStore';
import { CartProduct } from '../CartProduct';
import { TotalPrice } from '../TotalPrice';
import { Suspense } from 'react';

export const Sidebar = () => {
  const navigate = useNavigate();

  const cardProducts = useRecoilValue(cartProductsIdsState);
  const isCartVisible = useRecoilValue(isCartVisibleState);

  const onRedirect = (to: string) => navigate(to);

  return (
    <Styles.Sidebar isVisible={isCartVisible}>
      {cardProducts.map(item => (
        <Suspense fallback={<div>loading...</div>} key={item}>
          <CartProduct id={item} key={item} />
        </Suspense>
      ))}

      <TotalPrice />
    </Styles.Sidebar>
  );
};
