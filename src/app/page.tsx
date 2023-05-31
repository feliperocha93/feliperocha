// TODO: Fix desktop layout
/** Deploy */
// TODO: Install react-intl and use messages instead text
// TODO: Create portuguese Version

import { Career } from '@/containers/Home/Career';
import { Summary } from '@/containers/Home/Summary';
import { Title } from '@/containers/Home/Title';

export default function Home() {
  return (
    <main
      className='px-8 py-12
      bg-slate-100 dark:bg-gray-600
      text-gray-700 dark:text-white'
    >
      <Title />
      <Summary />
      <Career />
    </main>
  );
}
