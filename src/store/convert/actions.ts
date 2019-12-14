import { CONVERT_CURRENCY, convertActionTypes, IConvertState } from './types';

export function convertCurrency(response: IConvertState): convertActionTypes {
  return {
    type: CONVERT_CURRENCY,
    payload: response
  };
}
