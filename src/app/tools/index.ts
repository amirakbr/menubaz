export function thousandSeparator(value: string | number) {
  if (value) {
    return String(value)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  } else {
    return '0';
  }
}
