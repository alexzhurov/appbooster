import { CurrenciesActionTypes, GET_CURRENCIES, ICurrenciesState, SET_FAV_CURRENCY } from './types';

const initialState: ICurrenciesState = {
  list: {},
  favs: []
};

export function currenciesReducer(
  state = initialState,
  action: CurrenciesActionTypes
): ICurrenciesState {
  switch (action.type) {
    case GET_CURRENCIES:
      return {
        ...state,
        list: { ...action.payload }
      };
    case SET_FAV_CURRENCY:
      if (state.favs.includes(action.payload)) {
        return {
          ...state,
          ...{ favs: state.favs.filter((cur) => cur !== action.payload) }
        };
      } else {
        return {
          ...state,
          ...{ favs: [...state.favs, action.payload] }
        };
      }
    default:
      return state;
  }
}

