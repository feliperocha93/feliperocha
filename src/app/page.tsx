/**
 * colors (figma => blue)
 */
/** Deploy */
// TODO: Install react-intl and use messages instead text
// TODO: Create portuguese Version

import { Career } from '@/containers/Home/Career';
import { Summary } from '@/containers/Home/Summary';
import { Title } from '@/containers/Home/Title';

export default function Home() {
  return (
    <main
      className='bg-slate-100 dark:bg-gray-600
      text-gray-700 dark:text-white'
    >
      <div className='container mx-auto px-8 sm:px-0 py-12 max-w-2xl'>
        <Title />
        <Summary />
        <Career />
      </div>
    </main>
  );
}
