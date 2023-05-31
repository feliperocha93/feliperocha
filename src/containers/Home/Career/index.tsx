import { getDifferenceBetweenMonths, getFormattedDate } from '@/utils/date';

interface CareerItemProps {
  title: string;
  text: string;
  stack: string[];
  startedIn: [number, number]; //(yyyy, MM - 1)
  endedIn?: [number, number];
}

const jobs: CareerItemProps[] = [
  {
    title: 'Software Engineer at QuintoAndar',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam ipsam iure temporibus recusandae quos fugit possimus nesciunt suntasperiores, cumque, necessitatibus error eos soluta id adipisci unde placeat harum beatae!',
    stack: ['React', 'Vue', 'Js'],
    startedIn: [2022, 1],
  },
  {
    title: 'Software Developer at Iteris',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam ipsam iure temporibus recusandae quos fugit possimus nesciunt suntasperiores, cumque, necessitatibus error eos soluta id adipisci unde placeat harum beatae!',
    stack: ['React', 'Vue', 'Js'],
    startedIn: [2019, 11],
    endedIn: [2022, 0],
  },
];

function CareerItem({
  title,
  text,
  stack,
  startedIn,
  endedIn,
}: CareerItemProps) {
  const startDate = getFormattedDate(...startedIn);
  const endDate = endedIn ? getFormattedDate(...endedIn) : getFormattedDate();
  const period = getDifferenceBetweenMonths(
    new Date(...startedIn),
    endedIn ? new Date(...endedIn) : new Date()
  );
  const dates = `${startDate} - ${endDate} (${period} months)`;

  return (
    <article className='my-4'>
      <h3 className='my-1 font-bold text-lg'>{title}</h3>
      <p className='text-sm'>{text}</p>
      <footer className='my-1 text-xs'>
        <p>
          <b>Stack:</b> {stack.map((i) => i)}
        </p>
        <span>{dates}</span>
      </footer>
    </article>
  );
}

export function Career() {
  return (
    <section className='my-8'>
      <h2 className='font-bold text-3xl leading-snug'>Career</h2>
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
