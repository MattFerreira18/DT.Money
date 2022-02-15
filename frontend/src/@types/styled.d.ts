import 'styled-components';

import { lightTheme } from '../ui/styles/theme';

export type Theme = typeof lightTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
