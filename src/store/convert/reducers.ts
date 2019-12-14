import { CONVERT_CURRENCY, convertActionTypes, IConvertState } from './types';

const initialState: IConvertState = {
  request: {
    amount: 19999.95,
    query: "/convert/19999.95/GBP/EUR",
    from: "GBP",
    to: "EUR"
  },
  meta: {
    timestamp: 1449885661 * 1000,
    rate: 1.383702
  },
  response: 27673.975864
};

export function convertReducer(
  state = initialState,
  action: convertActionTypes
): IConvertState {
  switch (action.type) {
    case CONVERT_CURRENCY:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}

