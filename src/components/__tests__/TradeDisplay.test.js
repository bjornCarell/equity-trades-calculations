describe('TradeDisplay', () => {
  it('displays added trades', () => {
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
  });
});
