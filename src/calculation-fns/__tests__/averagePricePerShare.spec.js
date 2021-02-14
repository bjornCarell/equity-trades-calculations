import {averagePricePerShare} from '../averagePricePerShare';
import {total} from '../total';

describe('averagePricePerShare', () => {
  const data = {
    name: 'Telia',
    parentId: 'uuid',
    trades: [
      {name: 'Telia', quantity: '150', amount: '5220', id: 1},
      {name: 'Telia', quantity: '50', amount: '2751.5', id: 2},
    ],
  };

  const totalQuantity = total('quantity');
  const totalAmount = total('amount');
  const {trades} = data;

  it('calcualtes average price per share with two decimals', () => {
    const expected = Number(
      (totalAmount(trades) / totalQuantity(trades)).toFixed(2),
    );
    const actual = averagePricePerShare(
      totalAmount(trades),
      totalQuantity(trades),
    );

    expect(actual).toEqual(expected);
  });

  it('returns a number', () => {
    const expectedType = 'number';
    const actual = averagePricePerShare(
      totalAmount(trades),
      totalQuantity(trades),
    );

    expect(typeof actual).toEqual(expectedType);
  });
});
