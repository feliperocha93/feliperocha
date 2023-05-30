// TODO: Fix desktop layout
/** Deploy */
// TODO: install button do change locale
// TODO: install logic do change locale
'use client';

import { Toggle } from '@/components/Toggle/index';
import { useTheme } from '@/hooks/useTheme';
import { Moon, Sun } from 'react-bootstrap-icons';

import { Theme } from '@/types/Theme';

interface HeaderProps {
  hasDarkModeCookie?: boolean;
}

export function Header({ hasDarkModeCookie = false }: HeaderProps) {
  const { changeTheme, isDarkTheme } = useTheme({ hasDarkModeCookie });

  return (
    <header
      className='container p-5 flex justify-between items-center
      bg-slate-200 dark:bg-gray-700 
      text-gray-700 dark:text-white'
    >
      <div className='font-bold text-xl'>
        <span className='hidden sm:inline-block'>Felipe Rocha</span>
        <span className='sm:hidden'>F</span>.
      </div>

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
        textOnLeft={<Sun className='w-4 h-4' />}
        textOnRight={<Moon className='w-4 h-4' />}
      />
    </header>
  );
}
