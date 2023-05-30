// TODO: Create a componet named Footer Link (copy Renan UI)
// TODO: Fix desktop layout

import {
  WindowSidebar,
  Github,
  Instagram,
  Linkedin,
} from 'react-bootstrap-icons';

export function Footer() {
  return (
    <footer
      className='container px-8 py-5
      bg-slate-200 dark:bg-gray-700
      text-gray-700 dark:text-white'
    >
      <h2 className='font-bold text-2xl leading-snug text-center'>
        Social Media
      </h2>

      <ul className='container my-8 flex justify-between items-center'>
        <li className='flex items-center gap-x-1'>
          <WindowSidebar />
          <span className='text-xs'>Email</span>
        </li>
        <li className='flex items-center gap-x-1'>
          <Github />
          <span className='text-xs'>Github</span>
        </li>
        <li className='flex items-center gap-x-1'>
          <Instagram />
          <span className='text-xs'>Instagram</span>
        </li>
        <li className='flex items-center gap-x-1'>
          <Linkedin />
          <span className='text-xs'>Linkedin</span>
        </li>
      </ul>
    </footer>
  );
}
