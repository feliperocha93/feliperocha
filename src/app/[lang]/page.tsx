//TODO: Docker
/**
 * Create a docker image and push it to docker hub;
 * Trying run the application locally in a container;
 * Trying create a pipeline;
 */
//TODO: i18n
/**
 * Create a en-US version;
 */

import { Career } from '@/containers/Home/Career';
import { Summary } from '@/containers/Home/Summary';
import { Title } from '@/containers/Home/Title';

export default function Home() {
  return (
    <main
      className='bg-white-100 dark:bg-black-500
      text-black-500 dark:text-white-100'
    >
      <div className='container mx-auto px-8 sm:px-0 py-12 max-w-2xl'>
        <Title />
        <Summary />
        <Career />
      </div>
    </main>
  );
}
