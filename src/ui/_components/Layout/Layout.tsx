import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Styles } from './Layout.styles';

import { Header } from 'ui/_components/Header';
import { Spinner } from 'ui/_components/Spinner';
import { Sidebar } from 'ui/_components/Sidebar';

export const Layout = () => (
  <Styles.Layout>
    <Header />
    <Styles.Main>
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
      <Sidebar />
    </Styles.Main>
  </Styles.Layout>
);
