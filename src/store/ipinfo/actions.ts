import { GET_IP_INFO, ipInfoActionTypes, ipInfoState } from './types';

export function getIpInfo(data: ipInfoState): ipInfoActionTypes {
  return {
    type: GET_IP_INFO,
    payload: data
  };
}
