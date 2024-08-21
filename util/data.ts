type getFormattedDateProps = {
  date: Date;
};

export function getFormattedDate({ date }: getFormattedDateProps): string {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}
