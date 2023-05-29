import { Theme } from '@/types/Theme';

import { useState } from 'react';

interface UseThemeProps {
  hasDarkModeCookie: boolean;
}

export function useTheme({ hasDarkModeCookie }: UseThemeProps) {
  const [theme, setTheme] = useState<Theme>(
    hasDarkModeCookie ? Theme.DARK : Theme.LIGHT
  );

  function activeDarkTheme() {
    setTheme(Theme.DARK);
    document.documentElement.classList.add(Theme.DARK);
  }

  function activeLightTheme() {
    setTheme(Theme.LIGHT);
    document.documentElement.classList.remove(Theme.DARK);
  }

  function changeTheme(theme: Theme) {
    theme === Theme.LIGHT ? activeLightTheme() : activeDarkTheme();
    document.cookie = `theme=${theme}`;
  }

  return {
    changeTheme,
    isDarkTheme: theme === Theme.DARK,
  };
}
