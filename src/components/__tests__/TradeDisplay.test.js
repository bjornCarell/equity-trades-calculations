import React from 'react';
import {render} from '@testing-library/react';
import {EquitiesProvider} from '../../context/equities';
import {TradeDisplay} from '../TradeDisplay';
import {total} from '../../calculation-fns/total';
import {averagePricePerShare} from '../../calculation-fns/averagePricePerShare';

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

  let context;

  beforeEach(() => {
    context = render(
      <EquitiesProvider value={{equities}}>
        <TradeDisplay />
      </EquitiesProvider>,
    );
  });

  it('renders all names correctly', () => {
    const {queryByText} = context;
    expect(queryByText('Telia')).not.toBeNull();
    expect(queryByText('Ericsson')).not.toBeNull();
  });

  it('renders all quantity fields correctly', () => {
    const {queryAllByTestId} = context;
    const totalQuantity = total('quantity');
    const quantityFields = queryAllByTestId('quantity');

    expect(quantityFields[0]).toHaveTextContent(
      totalQuantity(equities[0].trades),
    );
    expect(quantityFields[1]).toHaveTextContent(
      totalQuantity(equities[1].trades),
    );
  });

  it('renders all amount fields correctly', () => {
    const {queryAllByTestId} = context;
    const totalAmount = total('amount');
    const amountFields = queryAllByTestId('amount');

    expect(amountFields[0]).toHaveTextContent(totalAmount(equities[0].trades));
    expect(amountFields[1]).toHaveTextContent(totalAmount(equities[1].trades));
  });

  it('renders all average price fields correctly', () => {
    const {queryAllByTestId} = context;
    const totalAmount = total('amount');
    const totalQuantity = total('quantity');
    const averagePrices = queryAllByTestId('average-price');

    expect(averagePrices[0]).toHaveTextContent(
      averagePricePerShare(
        totalAmount(equities[0].trades),
        totalQuantity(equities[0].trades),
      ),
    );
    expect(averagePrices[1]).toHaveTextContent(
      averagePricePerShare(
        totalAmount(equities[1].trades),
        totalQuantity(equities[1].trades),
      ),
    );
  });
});
