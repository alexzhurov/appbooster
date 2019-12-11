export interface ipInfoState {
  city: string     // "Saint Petersburg"
  country: string  // "RU"
  hostname: string // "host-103-158-66-217.spbmts.ru"
  ip: string       // "217.66.158.103"
  loc: string      // "59.9386,30.3141"
  org: string      // "AS8359 MTS PJSC"
  postal: string   // "190000"
  readme: string   // "https://ipinfo.io/missingauth"
  region: string   // "St.-Petersburg"
  timezone: string // "Europe/Moscow"
}

export const GET_IP_INFO = 'GET_IP_INFO';

interface GetIpInfoAction {
  type: typeof GET_IP_INFO
  payload: ipInfoState
}

export type ipInfoActionTypes = GetIpInfoAction;
