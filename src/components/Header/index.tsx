// TODO: install button do change locale
// TODO: install logic do change locale
'use client';

import { Toggle } from '@/components/Toggle/index';
import { useTheme } from '@/hooks/useTheme';
import { Theme } from '@/types/Theme';
import { Moon, Sun } from 'react-bootstrap-icons';

interface HeaderProps {
  hasDarkModeCookie?: boolean;
}

export function Header({ hasDarkModeCookie = false }: HeaderProps) {
  const { changeTheme, isDarkTheme } = useTheme({ hasDarkModeCookie });

  return (
    <header
      className='bg-slate-200 dark:bg-gray-700 
      text-gray-700 dark:text-white'
    >
      <div
        className='container mx-auto px-5 py-5
        flex justify-between items-center'
      >
        <div className='font-bold text-2xl lg:text-3xl'>
          <span className='hidden sm:inline-block'>Felipe Rocha</span>
          <span className='sm:hidden'>F</span>.
        </div>

        <nav className='text-sm lg:text-lg'>
          <ul className='flex'>
            <li>
              <button className='hover:underline'>en-US 🇺🇸</button>
            </li>
          </ul>
        </nav>

        <Toggle
          onToggle={(checked) =>
            changeTheme(checked ? Theme.DARK : Theme.LIGHT)
          }
          checked={isDarkTheme}
          textOnLeft={<Sun className='w-4 h-4 lg:w-5 lg:h-5' />}
          textOnRight={<Moon className='w-4 h-4 lg:w-5 lg:h-5' />}
        />
      </div>
    </header>
  );
}
