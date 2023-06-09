import { ReactNode } from 'react';
import './styles.css';

interface ToggleProps {
  checked: boolean;
  onToggle: (checked: boolean) => void;
  textOnLeft?: string | ReactNode;
  textOnRight?: string | ReactNode;
}
export function Toggle({
  checked,
  onToggle,
  textOnLeft,
  textOnRight,
}: ToggleProps) {
  return (
    <label htmlFor='toogle' className='flex items-center cursor-pointer'>
      {textOnLeft && <span className='mr-2 text-xs'>{textOnLeft}</span>}

      <div className='relative'>
        <input
          id='toogle'
          type='checkbox'
          className='sr-only'
          checked={checked}
          onChange={(e) => onToggle(e.target.checked)}
        />

        <div className='w-10 h-4 bg-white-100 dark:bg-white-500 rounded-full shadow-inner'></div>

        <div className='dot absolute w-6 h-6 bg-white-100 rounded-full shadow -left-1 -top-1 transition'></div>
      </div>

      {textOnRight && <span className='ml-2 text-xs'>{textOnRight}</span>}
    </label>
  );
}
