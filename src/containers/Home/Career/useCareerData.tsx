import { CareerItemProps } from '@/types/Career';
import { buildPeriodData } from '@/utils/date';
import { useLocale, useTranslations } from 'next-intl';

export function useCarrerData() {
  const t = useTranslations('home.career');
  const locale = useLocale();

  const localizedMonth = t('months');

  const careerData: CareerItemProps[] = [
    {
      id: 'quintoandar',
      title: t('quintoandar.title'),
      text: t('quintoandar.text'),
      stack: [
        'javascript',
        'typescript',
        'react',
        'next',
        'cypresss',
        'jest',
        'python',
      ],
      period: buildPeriodData(locale, { startedIn: [2022, 1], localizedMonth }),
    },
    {
      id: 'iteris',
      title: t('iteris.title'),
      text: t('iteris.text'),
      stack: ['javascript', 'typescript', 'vue', 'testing-library'],
      period: buildPeriodData(locale, {
        startedIn: [2019, 11],
        endedIn: [2022, 0],
        localizedMonth,
      }),
    },
    {
      id: 'foster',
      title: t('foster.title'),
      text: t('foster.text'),
      stack: ['html', 'css'],
      period: buildPeriodData(locale, {
        startedIn: [2019, 4],
        endedIn: [2019, 10],
        localizedMonth,
      }),
    },
  ];

  return {
    careerData,
  };
}
