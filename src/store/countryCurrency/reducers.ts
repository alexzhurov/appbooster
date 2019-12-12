import { countryCurrencyActionTypes, countryCurrencyState, GET_COUNTRY_CURRENCY } from './types';

let initialState: countryCurrencyState = {
  code: null,
  name: null,
  currency: {
    currencyName: null,
    currencySymbol: null,
    currencyCode: 'USD'
  },
  geo: {
    latitude: 0,
    longitude: 0
  },
  capital: null,
  phone: null
};

export function countryCurrencyReducer(
  state = initialState,
  action: countryCurrencyActionTypes
): countryCurrencyState {
  switch (action.type) {
    case GET_COUNTRY_CURRENCY:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}

