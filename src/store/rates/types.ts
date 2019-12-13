export interface IRatesState {
  timestamp: number
  base: string,
  rates: {
    [key: string]: number
  }
}

export const GET_RATES = 'GET_RATES';

interface GetRatesAction {
  type: typeof GET_RATES
  payload: IRatesState
}

export type RatesActionTypes = GetRatesAction;
