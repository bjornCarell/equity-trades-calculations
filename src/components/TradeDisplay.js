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
            {equities &&
              Object.values(equities).forEach(entry => <td>{entry[0]}</td>)}
          </tr>
        </tbody>
      </table>
    </>
  );
};
