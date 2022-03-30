import { useRecoilState } from 'recoil';

import { Styles } from './ThemeButton.styles';

import { themeState } from 'ui/_tools/Stores/UserStore';

export const ThemeButton = () => {
  const [theme, setTheme] = useRecoilState(themeState);

  const onToggleTheme = () => setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));

  return (
    <Styles.ThemeButton onClick={onToggleTheme}>
      <div className={`item-1 ${theme === 'dark' ? 'sun' : 'moon'}_item-1`} />
      <div className={`item-2 ${theme === 'dark' ? 'sun' : 'moon'}_item-2`} />
    </Styles.ThemeButton>
  );
};
