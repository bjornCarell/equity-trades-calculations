import React from 'react';
import {render} from '@testing-library/react';
import {TradeDisplay} from '../TradeDisplay';

describe('TradeDisplay', () => {
  it('renders trades on first load', () => {
    const equities = {
      telia: {
        trades: [
          {name: 'Telia', quantity: '150', amount: '5220'},
          {name: 'Telia', quantity: '50', amount: '2750'},
        ],
      },
      ericsson: {
        trades: [{name: 'Ericsson', quatity: '320', amount: '144000'}],
      },
    };

    render(<TradeDisplay />);

    const {queryByText} = render(<TradeDisplay />);

    expect(queryByText('Telia')).not.toBeNull();
  });
});
