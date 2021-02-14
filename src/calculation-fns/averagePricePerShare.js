export const averagePricePerShare = (amount = 0, quantity = 0) =>
  Number((amount / quantity).toFixed(2));
