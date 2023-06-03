import { generateKey } from '@/utils/key';
import { CareerItem } from './CarrerItem';
import { useCarrerData } from './useCareerData';
import { useTranslations } from 'next-intl';

export function Career() {
  const t = useTranslations('home.career');
  const { careerData } = useCarrerData();

  return (
    <section className='my-8'>
      <h2 className='font-bold text-4xl leading-snug lg:text-5xl lg:leading-tight'>
        {t('title')}
      </h2>
      {careerData.map(({ id, title, text, stack, period }) => (
        <CareerItem
          id={id}
          title={title}
          text={text}
          stack={stack}
          period={period}
          key={generateKey(title)}
        />
      ))}
    </section>
  );
}
