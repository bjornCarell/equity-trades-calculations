import React, {useReducer} from 'react';
import {TradesScreen} from './components/TradesScreen';
import {DispatchProvider, EquitiesProvider} from './context/equities';
import {initialState, reducer} from './context/reducer';

const App = () => {
  const [equities, dispatch] = useReducer(reducer, initialState);
  return (
    <EquitiesProvider value={{equities}}>
      <DispatchProvider value={{dispatch}}>
        <TradesScreen />
      </DispatchProvider>
    </EquitiesProvider>
  );
};
export default App;
