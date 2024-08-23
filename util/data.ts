type getFormattedDateProps = {
  date: Date;
};

export function getFormattedDate({ date }: getFormattedDateProps): string {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

export function getDateMinusDays(date: Date, days: number): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
