import React from 'react';
import {render} from '@testing-library/react';
import {EquitiesProvider} from '../../context/equities';
import {TradeDisplay} from '../TradeDisplay';

describe('TradeDisplay', () => {
  it('renders trades on first load', () => {
    const equities = [
      {
        name: 'Telia',
        parentId: 'uuid',
        trades: [
          {name: 'Telia', quantity: '150', amount: '5220', id: 1},
          {name: 'Telia', quantity: '50', amount: '2750', id: 2},
        ],
      },
      {
        name: 'Ericsson',
        parentId: 'uuid',
        trades: [
          {name: 'Telia', quantity: '150', amount: '5220', id: 3},
          {name: 'Telia', quantity: '50', amount: '2750', id: 5},
        ],
      },
    ];

    const {queryByText} = render(
      <EquitiesProvider value={{equities}}>
        <TradeDisplay />
      </EquitiesProvider>,
    );

    expect(queryByText('Telia')).not.toBeNull();
  });
});
