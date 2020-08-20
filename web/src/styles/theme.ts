// @ts-nocheck Fontsize
import { DefaultTheme } from 'styled-components';

const space: DefaultTheme['space'] = [0, 4, 8, 16, 32, 64, 128, 256, 512];
const breakpoints: DefaultTheme['breakpoints'] = ['576px', '768px', '992px', '1200px', '1500px', '1800px'];
const fontSizes: DefaultTheme['fontSizes'] = [12, 14, 16, 20, 24, 32, 48];
fontSizes.base = fontSizes[2];

breakpoints.xs = breakpoints[0];
breakpoints.sm = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];
breakpoints.xl = breakpoints[4];
breakpoints.xxl = breakpoints[5];

export const theme: DefaultTheme = {
  primary: '#141ED2',
  colors: {
    primary: '#141ED2',
    secondary: '#DD0071',
    black: '#000e1a',
    white: '#fff',
    blue: '#007ce0',
    navy: '#004175',
  },
  fontFamily: `'Source Sans Pro', sans-serif`,
  breakpoints,
  space,
  fontSizes,
};
export const device = {
  extraSmall: `(min-width: ${breakpoints.xs})`,
  small: `(min-width: ${breakpoints.sm})`,
  medium: `(min-width: ${breakpoints.md})`,
  large: `(min-width: ${breakpoints.lg})`,
  extraDesktop: `(min-width: ${breakpoints.xl})`,
  extraLarge: `(min-width: ${breakpoints.xxl})`,
};
export const maxDevice = {
  extraSmall: `(max-width: ${breakpoints.xs})`,
  small: `(max-width: ${breakpoints.sm})`,
  medium: `(max-width: ${breakpoints.md})`,
  large: `(max-width: ${breakpoints.lg})`,
  extraDesktop: `(max-width: ${breakpoints.xl})`,
  extraLarge: `(max-width: ${breakpoints.xxl})`,
};

export const rangDevice = {
  mobile: `(max-width: ${breakpoints.sm})`,
  laptop: `(min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl})`,
};
