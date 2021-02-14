import React, {useContext} from 'react';
import {EquitiesContext} from '../context/equities';
import {total} from '../calculation-fns/total';

export const TradeDisplay = () => {
  const {equities} = useContext(EquitiesContext);
  const totalQuantity = total('quantity');

  return (
    <>
      <div>Trades</div>
      <table>
        <tbody>
          <tr>
            <th>Aktie</th>
            <th>Antal</th>
            <th>Belopp</th>
            <th>GAV</th>
          </tr>
          {equities &&
            equities.map(equity => (
              <tr key={equity.name}>
                <td>{equity.name}</td>
                <td data-testid="quantity">{totalQuantity(equity.trades)}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};
