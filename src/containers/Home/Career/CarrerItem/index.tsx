import { CareerItemProps } from '@/types/Career';

export function CareerItem({ title, text, stack, period }: CareerItemProps) {
  return (
    <article className='my-4'>
      <h3 className='my-1 font-bold text-lg lg:text-xl'>{title}</h3>
      <p className='lg:text-lg'>{text}</p>
      <footer className='my-1 text-sm lg:text-base'>
        <p>
          <b>Stack:</b> {stack.join(', ')}.
        </p>
        <span>{period}</span>
      </footer>
    </article>
  );
}
