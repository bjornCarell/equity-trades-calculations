import {total} from '../total';

describe('total', () => {
  const data = {
    name: 'Telia',
    parentId: 'uuid',
    trades: [
      {name: 'Telia', quantity: '150', amount: '5220', id: 1},
      {name: 'Telia', quantity: '50', amount: '2750', id: 2},
    ],
  };

  it('calculates the total of a given prop', () => {
    const totalQuantity = total('quantity');

    const expected = 200;
    const actual = totalQuantity(data.trades);

    expect(actual).toEqual(expected);
  });

  it('returns a number value', () => {
    const totalAmount = total('amount');

    const expected = 'number';
    const actual = totalAmount(data.trades);

    expect(typeof actual).toEqual(expected);
  });
});
