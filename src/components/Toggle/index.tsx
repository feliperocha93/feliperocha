import './styles.css';

interface ToggleProps {
  checked: boolean;
  onToggle: (checked: boolean) => void;
  text?: string;
}
export function Toggle({ checked, onToggle, text }: ToggleProps) {
  return (
    <label htmlFor='toogle' className='flex items-center cursor-pointer'>
      <div className='relative'>
        <input
          id='toogle'
          type='checkbox'
          className='sr-only'
          checked={checked}
          onChange={(e) => onToggle(e.target.checked)}
        />

        <div className='w-10 h-4 bg-gray-400 rounded-full shadow-inner'></div>

        <div className='dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition'></div>
      </div>

      {text && <div className='ml-3 text-gray-700 font-medium'>{text}</div>}
    </label>
  );
}
