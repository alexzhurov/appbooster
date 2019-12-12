export interface ipInfoState {
  city: string | null // "Saint Petersburg"
  country: string | null // "RU"
  hostname: string | null // "host-250-159-66-217.spbmts.ru"
  ip: string | null // "217.66.159.250"
  loc: string | null // "59.9386,30.3141"
  org: string | null // "AS8359 MTS PJSC"
  postal: string | null // "190000"
  readme: string | null  // ??????
  region: string | null // "St.-Petersburg"
  timezone: string | null// "St.-Petersburg"
}

export const GET_IP_INFO = 'GET_IP_INFO';

interface GetIpInfoAction {
  type: typeof GET_IP_INFO
  payload: ipInfoState
}

export type ipInfoActionTypes = GetIpInfoAction;
