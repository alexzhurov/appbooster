import { GET_RATES, IRatesState, RatesActionTypes } from './types';

export function getRates(response: IRatesState): RatesActionTypes {
  return {
    type: GET_RATES,
    payload: response
  };
}
