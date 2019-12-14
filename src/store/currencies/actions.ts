import { CurrenciesActionTypes, GET_CURRENCIES, ICurrenciesList, SET_FAV_CURRENCY } from './types';

export function getCurrencies(list: ICurrenciesList): CurrenciesActionTypes {
  return {
    type: GET_CURRENCIES,
    payload: list
  };
}

export function setFavCurrency(favs: string): CurrenciesActionTypes {
  return {
    type: SET_FAV_CURRENCY,
    payload: favs
  };
}
