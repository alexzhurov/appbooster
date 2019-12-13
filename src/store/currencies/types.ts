export interface ICurrenciesState {
  [key: string]: string
}

export const GET_CURRENCIES = 'GET_CURRENCIES';

interface GetCurrenciesAction {
  type: typeof GET_CURRENCIES
  payload: ICurrenciesState
}

export type CurrenciesActionTypes = GetCurrenciesAction;
