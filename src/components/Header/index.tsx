'use client';

import { Toggle } from '@/components/Toggle/index';
import { useTheme } from '@/hooks/useTheme';
import { Theme } from '@/types/Theme';

interface HeaderProps {
  hasDarkModeCookie?: boolean;
}

export function Header({ hasDarkModeCookie = false }: HeaderProps) {
  const { changeTheme, isDarkTheme } = useTheme({ hasDarkModeCookie });

  return (
    <header
      className='p-5 flex justify-between items-center
      bg-slate-100 dark:bg-slate-700 
      text-gray-700 dark:text-white'
    >
      <span className='font-bold text-black dark:text-white'>
        Felipe Rocha.
      </span>

      <nav className='text-xs'>
        <ul className='flex'>
          <li>
            <button>en-US 🇺🇸</button>
          </li>
        </ul>
      </nav>

      <Toggle
        onToggle={(checked) => changeTheme(checked ? Theme.DARK : Theme.LIGHT)}
        checked={isDarkTheme}
        textOnLeft={Theme.LIGHT}
        textOnRight={Theme.DARK}
      />
    </header>
  );
}
