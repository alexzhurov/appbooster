import { GET_RATES, IRatesState, RatesActionTypes } from './types';

const initialState: IRatesState = {
  timestamp: Number(new Date()),
  base: "USD",
  rates: {
    AED: 3.672538,
    AFN: 66.809999,
    ALL: 125.716501,
    AMD: 484.902502,
    ANG: 1.788575,
    AOA: 135.295998,
    ARS: 9.750101,
    AUD: 1.390866
  }
};

export function ratesReducer(
  state = initialState,
  action: RatesActionTypes
): IRatesState {
  switch (action.type) {
    case GET_RATES:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}

