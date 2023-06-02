import { CareerItemProps } from '@/types/Career';
import { getDifferenceBetweenMonths, getFormattedDate } from '@/utils/date';

export function CareerItem({
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
      <h3 className='my-1 font-bold text-lg lg:text-xl'>{title}</h3>
      <p className='lg:text-lg'>{text}</p>
      <footer className='my-1 text-sm lg:text-base'>
        <p>
          <b>Stack:</b> {stack.join(', ')}.
        </p>
        <span>{dates}</span>
      </footer>
    </article>
  );
}
