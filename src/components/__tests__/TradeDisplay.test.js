import React from 'react';
import {render, screen} from '@testing-library/react';
import {EquitiesProvider} from '../../context/equities';
import {TradeDisplay} from '../TradeDisplay';
import {total} from '../../calculation-fns/total';

describe('TradeDisplay', () => {
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
        {name: 'Ericsson', quantity: '50', amount: '2220', id: 3},
        {name: 'Ericsson', quantity: '50', amount: '2750', id: 5},
      ],
    },
  ];

  it('renders all names correctly', () => {
    const {queryByText} = render(
      <EquitiesProvider value={{equities}}>
        <TradeDisplay />
      </EquitiesProvider>,
    );
    expect(queryByText('Telia')).not.toBeNull();
    expect(queryByText('Ericsson')).not.toBeNull();
  });

  it('renders all quantity fields correctly', () => {
    render(
      <EquitiesProvider value={{equities}}>
        <TradeDisplay />
      </EquitiesProvider>,
    );

    const totalQuantity = total('quantity');

    expect(screen.queryAllByTestId('quantity')[0]).toHaveTextContent(
      totalQuantity(equities[0].trades),
    );
    expect(screen.queryAllByTestId('quantity')[1]).toHaveTextContent(
      totalQuantity(equities[1].trades),
    );
  });
});
