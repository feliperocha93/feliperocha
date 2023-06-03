import { useTranslations } from 'next-intl';

export function Title() {
  const t = useTranslations('home');

  return (
    <h1 className='font-bold text-5xl leading-snug lg:text-7xl  lg:leading-tight'>
      {t('title')}
    </h1>
  );
}
