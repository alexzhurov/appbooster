export interface CurrenciesResponse extends CurrenciesState {
  disclaimer?: string
  license?: string
}

export interface CurrenciesState {
  timestamp: number
  base: string
  rates: {
    [key: string]: number
  }
}

export const GET_CURRENCIES = 'GET_CURRENCIES';

interface GetCurrenciesAction {
  type: typeof GET_CURRENCIES
  payload: CurrenciesState
}

export type CurrenciesActionTypes = GetCurrenciesAction;
