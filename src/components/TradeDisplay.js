import React, {useContext} from 'react';
import {EquitiesContext} from '../context/equities';

export const TradeDisplay = () => {
  const {equities} = useContext(EquitiesContext);
  return (
    <>
      <div>Trades</div>
      <table>
        <tbody>
          <tr>
            {equities && equities.map(equity => <td>{equity.trades.name}</td>)}
          </tr>
        </tbody>
      </table>
    </>
  );
};
