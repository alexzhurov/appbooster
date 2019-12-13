import { GET_IP_INFO, ipInfoActionTypes, IipInfoState } from './types';

export function getIpInfo(data: IipInfoState): ipInfoActionTypes {
  return {
    type: GET_IP_INFO,
    payload: data
  };
}
