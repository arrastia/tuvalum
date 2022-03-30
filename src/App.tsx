import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from 'GlobalStyles';

import { routes } from 'configuration/routes';

import { Layout } from 'ui/_components/Layout';

import { ProductsList } from 'ui/ProductsList';

import { themeState } from 'ui/_tools/Stores/UserStore';

import { themes } from 'ui/_styles/themes';

export function App() {
  const selectedTheme = useRecoilValue(themeState);

  return (
    <ThemeProvider theme={{ ...themes[selectedTheme] }}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />} path={routes.HOME}>
            <Route element={<ProductsList />} index={true} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
