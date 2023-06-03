const MONTH_MILISECONDS = 1000 * 60 * 60 * 24 * 30;

function getDifferenceBetweenMonths(olderDate: Date, newerDate: Date) {
  const differenceInMilliseconds = Math.abs(
    newerDate.getTime() - olderDate.getTime()
  );

  return Math.floor(differenceInMilliseconds / MONTH_MILISECONDS);
}
/**
 * @description Returns today's date if no given parameters
 */
function buildFormattedDate(locale: string, year?: number, month?: number) {
  const date =
    typeof year === 'number' && typeof month === 'number'
      ? new Date(year, month)
      : new Date();

  return date.toLocaleString(locale, {
    month: 'short',
    year: 'numeric',
  });
}

/**
 *
 * @param startedIn [yyyy, MM - 1]
 * @param endedIn [yyyy, MM - 1]
 * @returns
 */
export function buildPeriodData(
  locale: string,
  {
    startedIn,
    endedIn,
    localizedMonth,
  }: {
    startedIn: [number, number];
    endedIn?: [number, number];
    localizedMonth: string;
  }
) {
  const startDate = buildFormattedDate(locale, ...startedIn);
  const endDate = endedIn
    ? buildFormattedDate(locale, ...endedIn)
    : buildFormattedDate(locale);
  const period = getDifferenceBetweenMonths(
    new Date(...startedIn),
    endedIn ? new Date(...endedIn) : new Date()
  );
  return `${startDate} - ${endDate} (${period} ${localizedMonth})`;
}
