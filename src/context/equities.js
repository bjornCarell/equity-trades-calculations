import {createContext} from 'react';

export const EquitiesContext = createContext({});
export const DispatchContext = createContext();

export const EquitiesProvider = EquitiesContext.Provider;
export const DispatchProvider = DispatchContext.Provider;
