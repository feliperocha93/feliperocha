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
    <header className='p-5 flex justify-between bg-slate-100 dark:bg-slate-700'>
      <span className='font-bold text-black dark:text-white'>
        Felipe Rocha.
      </span>

      <nav>
        <ul className='flex'>
          <li>
            <button onClick={() => alert('Olá')}>PT-BR</button>
          </li>
          <span className='mx-2'>|</span>
          <li>
            <button>EN-US</button>
          </li>
        </ul>
      </nav>

      <Toggle
        onToggle={(checked) => changeTheme(checked ? Theme.DARK : Theme.LIGHT)}
        checked={isDarkTheme}
      />
    </header>
  );
}
