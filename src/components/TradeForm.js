import React, {useContext, useState} from 'react';
import {EquitiesContext} from '../context/equities';
import {addTrade} from '../context/actions';

export const TradeForm = () => {
  const {equities, dispatch} = useContext(EquitiesContext);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [amount, setAmount] = useState('');

  const setter = set => e => {
    const {value} = e.target;
    set(value);
  };

  const submit = e => {
    e.preventDefault();
    dispatch(addTrade({name, quantity, amount, tradeId: 'tradeId'}));
    setQuantity('');
    setAmount('');
  };
  return (
    <form>
      <input data-testid="nameInput" onChange={setter(setName)} value={name} />
      <input
        data-testid="quantityInput"
        onChange={setter(setQuantity)}
        value={quantity}
      />
      <input
        data-testid="amountInput"
        onChange={setter(setAmount)}
        value={amount}
      />
      <button data-testid="submit" onClick={submit}>
        Lägg till
      </button>
    </form>
  );
};
