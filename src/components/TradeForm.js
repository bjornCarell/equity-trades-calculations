import React, {useState} from 'react';

export const TradeForm = () => {
  const [nameInput, setName] = useState('');
  const [quantityInput, setQuantity] = useState('');
  const [amountInput, setAmount] = useState('');

  const setter = set => e => {
    const {value} = e.target;
    set(value);
  };

  const submit = e => {
    e.preventDefault();
    setQuantity('');
    setAmount('');
  };
  return (
    <form>
      <input
        data-testid="nameInput"
        onChange={setter(setName)}
        value={nameInput}
      />
      <input
        data-testid="quantityInput"
        onChange={setter(setQuantity)}
        value={quantityInput}
      />
      <input
        data-testid="amountInput"
        onChange={setter(setAmount)}
        value={amountInput}
      />
      <button data-testid="submit" onClick={submit}>
        Lägg till
      </button>
    </form>
  );
};
