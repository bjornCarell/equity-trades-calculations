import React, {useReducer} from 'react';
import {TradesScreen} from './components/TradesScreen';
import {EquitiesProvider} from './context/equities';
import {initialState, reducer} from './context/reducer';

const App = () => {
  const {equities, dispatch} = useReducer(reducer, initialState);
  return (
    <EquitiesProvider value={{equities, dispatch}}>
      <TradesScreen />
    </EquitiesProvider>
  );
};
export default App;
