import { GET_CURRENCIES, CurrenciesActionTypes, CurrenciesResponse } from './types';

export function getCurrencies(response: CurrenciesResponse): CurrenciesActionTypes {
  return {
    type: GET_CURRENCIES,
    payload: response
  };
}
