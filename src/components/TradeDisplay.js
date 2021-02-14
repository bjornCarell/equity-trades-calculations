import React, {useContext} from 'react';
import {EquitiesContext} from '../context/equities';
import {total} from '../calculation-fns/total';
import {averagePricePerShare} from '../calculation-fns/averagePricePerShare';

export const TradeDisplay = () => {
  const {equities} = useContext(EquitiesContext);
  const totalQuantity = total('quantity');
  const totalAmount = total('amount');

  return (
    <>
      <div>Trades</div>
      <table>
        <tbody>
          <tr>
            <th>Aktie</th>
            <th>Antal</th>
            <th>Omkostnadsbelopp</th>
            <th>GAV</th>
          </tr>
          {equities &&
            equities.map(equity => (
              <tr key={equity.name}>
                <td>{equity.name}</td>
                <td data-testid="quantity">{totalQuantity(equity.trades)}</td>
                <td data-testid="amount">{totalAmount(equity.trades)}</td>
                <td data-testid="average-price">
                  {averagePricePerShare(
                    totalAmount(equity.trades),
                    totalQuantity(equity.trades),
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};
