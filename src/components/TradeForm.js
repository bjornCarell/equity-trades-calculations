import React from 'react';

export const TradeForm = () => {
  return (
    <form>
      <input data-testid="nameInput" />
      <input data-testid="quantityInput" />
      <input data-testid="amountInput" />
      <button data-testid="submit">Lägg till</button>
    </form>
  );
};
