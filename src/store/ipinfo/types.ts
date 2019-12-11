export interface ipInfoState {
  city: string | null
  country: string | null
  hostname: string | null
  ip: string | null
  loc: string | null
  org: string | null
  postal: string | null
  readme: string | null
  region: string | null
  timezone: string | null
}

export const GET_IP_INFO = 'GET_IP_INFO';

interface GetIpInfoAction {
  type: typeof GET_IP_INFO
  payload: ipInfoState
}

export type ipInfoActionTypes = GetIpInfoAction;
