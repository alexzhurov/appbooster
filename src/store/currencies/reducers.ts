import {
  ICurrenciesState,
  CurrenciesActionTypes,
  GET_CURRENCIES
} from './types';

const initialState: ICurrenciesState = {};

export function currenciesReducer(
  state = initialState,
  action: CurrenciesActionTypes
): ICurrenciesState {
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

