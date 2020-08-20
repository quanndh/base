/// <reference types="next" />
/// <reference types="next/types/global" />
import 'styled-components';
import type { Theme } from 'styled-system';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    borderRadius: string;
    primary: string;
    fontFamily: string;
  }
}
