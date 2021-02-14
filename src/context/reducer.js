import {ADD_TRADE} from './actions';

export const initialState = [];

export const reducer = (state, action) => {
  const {type} = action;
  switch (type) {
    case ADD_TRADE: {
      const {name, tradeId, amount, quantity} = action.trade;
      const equityExist = state.find(equity => equity.name === name);
      const newState = state.filter(equites => equites.name !== name);

      if (equityExist) {
        return [
          ...newState,
          {
            ...equityExist,
            trades: [
              ...equityExist.trades,
              {
                id: tradeId,
                amount: amount,
                quantity: quantity,
              },
            ],
          },
        ];
      } else {
        const {name, tradeId, amount, quantity} = action.trade;
        return [
          ...state,
          {
            name: name,
            id: Math.round(Math.random() * 10),
            trades: [
              {
                name: name,
                amount: amount,
                quantity: quantity,
                id: tradeId,
              },
            ],
          },
        ];
      }
    }
    default:
      return state;
  }
};
