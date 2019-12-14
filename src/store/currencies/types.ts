export interface ICurrenciesState {
  list: ICurrenciesList
  favs: string[]
}

export interface ICurrenciesList {
  [key: string]: string
}

export const GET_CURRENCIES = 'GET_CURRENCIES';
export const SET_FAV_CURRENCY = 'SET_FAV_CURRENCY';

interface GetCurrenciesAction {
  type: typeof GET_CURRENCIES
  payload: ICurrenciesList
}

interface SetFavAction {
  type: typeof SET_FAV_CURRENCY
  payload: string
}

export type CurrenciesActionTypes = GetCurrenciesAction | SetFavAction;
