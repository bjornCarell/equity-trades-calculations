import React, {useState} from 'react';

export const TradeForm = () => {
  const [nameInput, setName] = useState('');
  const [quantityInput, setQuantity] = useState('');
  const [amountInput, setAmount] = useState('');

  const submit = e => {
    e.preventDefault();
    setQuantity('');
    setAmount('');
  };
  return (
    <form>
      <input
        data-testid="nameInput"
        onChange={e => setName(e.target.value)}
        value={nameInput}
      />
      <input
        data-testid="quantityInput"
        onChange={e => setQuantity(e.target.value)}
        value={quantityInput}
      />
      <input
        data-testid="amountInput"
        onChange={e => setAmount(e.target.value)}
        value={amountInput}
      />
      <button data-testid="submit" onClick={e => submit(e)}>
        Lägg till
      </button>
    </form>
  );
};
