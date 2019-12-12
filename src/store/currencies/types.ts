export interface CurrenciesResponse extends CurrenciesState {
  disclaimer?: string
  license?: string
}

export interface CurrenciesState {
  base: string
  timestamp: number
  rates: {
    [key: string]: number
  }
}

export const GET_CURRENCIES = 'GET_CURRENCIES';
export const SET_CURRENCIES = 'SET_CURRENCIES';

interface GetCurrenciesAction {
  type: typeof GET_CURRENCIES
  payload: CurrenciesState
}

interface SetCurrenciesAction {
  type: typeof SET_CURRENCIES
  payload: CurrenciesState
}

export type CurrenciesActionTypes = GetCurrenciesAction | SetCurrenciesAction;
