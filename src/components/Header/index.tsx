'use client';

import { Toggle } from '@/components/Toggle/index';
import { useTheme } from '@/hooks/useTheme';
import { Theme } from '@/types/Theme';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { Moon, Sun } from 'react-bootstrap-icons';

interface HeaderProps {
  hasDarkModeCookie?: boolean;
}

export function Header({ hasDarkModeCookie = false }: HeaderProps) {
  const locale = useLocale();
  const { changeTheme, isDarkTheme } = useTheme({ hasDarkModeCookie });

  return (
    <header
      className='bg-white-200 dark:bg-black-500
      dark:border-b-2 border-solid border-white-500
      text-black-500 dark:text-white-100'
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
          <ul className='flex gap-x-2'>
            <li>
              <Link
                href='/en'
                locale={false}
                className={locale === 'en' ? 'underline' : 'hover:underline'}
              >
                en-US 🇺🇸
              </Link>
            </li>
            |
            <li>
              <Link
                href='/pt'
                locale={false}
                className={locale === 'pt' ? 'underline' : 'hover:underline'}
              >
                pt-BR 🇧🇷
              </Link>
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
