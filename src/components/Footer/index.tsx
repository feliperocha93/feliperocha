import { FooterLinks } from './FooterLinks';
import { footerLinks } from './data';

export function Footer() {
  return (
    <footer
      className='bg-slate-200 dark:bg-gray-700
      text-gray-700 dark:text-white'
    >
      <div className='container mx-auto max-w-5xl px-8 sm:px0 py-5'>
        <h2 className='font-bold text-center text-3xl leading-snug lg:text-4xl lg:leading-tight'>
          Social Media
        </h2>

        <FooterLinks links={footerLinks} />

        <h4 className='text-center lg:text-lg'>
          <span className='mr-1'>✉️</span> fee.rocha@hotmail.com
        </h4>
      </div>
    </footer>
  );
}
