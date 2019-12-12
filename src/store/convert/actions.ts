import { CONVERT_CURRENCY, IConvertState, convertActionTypes } from './types';

export function convertCurrency(response: IConvertState): convertActionTypes {
  return {
    type: CONVERT_CURRENCY,
    payload: response
  };
}
