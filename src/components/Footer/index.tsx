// TODO: Fix desktop layout

import { FooterLinks } from './FooterLink';
import { footerLinks } from './data';

export function Footer() {
  return (
    <footer
      className='px-8 py-5
      bg-slate-200 dark:bg-gray-700
      text-gray-700 dark:text-white'
    >
      <h2 className='font-bold text-2xl leading-snug text-center'>
        Social Media
      </h2>

      <FooterLinks links={footerLinks} />

      <h4 className='text-center text-xs'>
        <span className='mr-1'>✉️</span> fee.rocha@hotmail.com
      </h4>
    </footer>
  );
}
