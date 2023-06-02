import { CareerItem } from './CarrerItem';
import { jobs } from './data';

export function Career() {
  return (
    <section className='my-8'>
      <h2 className='font-bold text-4xl leading-snug lg:text-5xl lg:leading-tight'>
        Career
      </h2>
      {jobs.map(({ title, text, stack, startedIn, endedIn }) => (
        <CareerItem
          title={title}
          text={text}
          stack={stack}
          startedIn={startedIn}
          endedIn={endedIn}
          key={title}
        />
      ))}
    </section>
  );
}
