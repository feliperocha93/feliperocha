import { LinkProps } from '@/types/Footer';

export function Link({ src, icon, text }: LinkProps) {
  return (
    <li>
      <a
        className='flex items-center gap-x-1'
        href={src}
        target='_blank'
        rel='noopener noreferrer'
      >
        {icon}
        {text && <span className='text-xs'>{text}</span>}
      </a>
    </li>
  );
}
