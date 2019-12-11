import {
  CurrenciesState,
  CurrenciesActionTypes,
  GET_CURRENCIES,
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
    default:
      return state;
  }
}

