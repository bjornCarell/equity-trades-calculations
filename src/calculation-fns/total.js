export const total = prop => data =>
  data.reduce((acc, item) => acc + Number(item[prop]), 0);
