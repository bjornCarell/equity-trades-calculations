export const total = (prop = '') => (data = 0) => {
  return data.reduce((acc, item) => acc + Number(item[prop]), 0);
};
