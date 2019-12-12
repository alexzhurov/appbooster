import {
  CurrenciesState,
  CurrenciesActionTypes,
  GET_CURRENCIES,
  SET_CURRENCIES
} from './types';

const initialState: CurrenciesState = {
  base: 'USD',
  timestamp: Number(new Date()),
  rates: {}
};

export function currenciesReducer(
  state = initialState,
  action: CurrenciesActionTypes
): CurrenciesState {
  switch (action.type) {
    case GET_CURRENCIES:
      return {
        ...state,
        ...action.payload
      };
    case SET_CURRENCIES:
      return state;
    default:
      return state;
  }
}

