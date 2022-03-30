import { Styles } from './Logo.styles';

import { logo } from 'assets/images';

import { useFountain } from 'ui/_tools/Hooks/useFountain';

import type { LogoProps } from './@types/Logo.types';

export const Logo = ({ onClick }: LogoProps) => {
  useFountain();

  return <Styles.Icon id="fountain-animated-view" onClick={onClick} src={logo} />;
};
