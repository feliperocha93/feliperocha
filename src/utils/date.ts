const MONTH_MILISECONDS = 1000 * 60 * 60 * 24 * 30;

export function getDifferenceBetweenMonths(olderDate: Date, newerDate: Date) {
  const differenceInMilliseconds = Math.abs(
    newerDate.getTime() - olderDate.getTime()
  );

  return Math.floor(differenceInMilliseconds / MONTH_MILISECONDS);
}

export function getFormattedDate(year?: number, month?: number) {
  const date =
    typeof year === 'number' && typeof month === 'number'
      ? new Date(year, month)
      : new Date();

  return date.toLocaleString('en-US', {
    month: 'short',
    year: 'numeric',
  });
}
