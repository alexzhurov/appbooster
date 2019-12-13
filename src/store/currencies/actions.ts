import {
  GET_CURRENCIES,
  CurrenciesActionTypes,
  ICurrenciesState
} from './types';

export function getCurrencies(response: ICurrenciesState): CurrenciesActionTypes {
  return {
    type: GET_CURRENCIES,
    payload: response
  };
}
