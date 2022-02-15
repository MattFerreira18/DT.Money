import { useEffect, useState } from "react";

import { useLocalStorage } from './useLocalStorage';

const defaultTheme = 'light';

export function useTheme() {
  const [themeStoraged, updateThemeStoraged] = useLocalStorage<'light' | 'dark'>('dt-money.theme', defaultTheme);
  const [theme, setTheme] = useState<'light' | 'dark'>(themeStoraged ?? defaultTheme);
  
  useEffect(() => {
    updateThemeStoraged(theme);
  }, [theme]);

  return {theme, setTheme};
}
