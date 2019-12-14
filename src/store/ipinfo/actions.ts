import { GET_IP_INFO, IipInfoState, ipInfoActionTypes, SET_BASE_CURRENCY } from './types';

export function getIpInfo(data: IipInfoState): ipInfoActionTypes {
  return {
    type: GET_IP_INFO,
    payload: data
  };
}

export function setBaseCurrency(currency: string): ipInfoActionTypes {
  return {
    type: SET_BASE_CURRENCY,
    payload: { currency }
  };
}
