import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      accent: string;
      background: string;
      divider: string;
      error: string;
      glass: string;
      primary: string;
      secondary: string;
      text: string;
      transparent: string;
    };
    breakpoints: {
      large_desktop: string;
      phone: string;
      small_desktop: string;
      tablet: string;
    };
  }
}
