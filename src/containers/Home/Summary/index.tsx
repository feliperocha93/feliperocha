import { generateKey } from '@/utils/key';
import { useTranslations } from 'next-intl';

export function Summary() {
  const t = useTranslations('home.summary');
  const paragraphs = ['p1'];

  return (
    <section className='my-8'>
      {paragraphs.map((p) => (
        <p key={p} className='my-4 text-xl lg:text-2xl'>
          {t(p)}
        </p>
      ))}
    </section>
  );
}
