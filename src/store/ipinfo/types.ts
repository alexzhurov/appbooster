export interface IipInfoState {
  status: string;  //  "success",
  country: string;  //  "Russia",
  countryCode: string;  //  "RU",
  city: string;  //  "St Petersburg",
  lat: number;  //  59.8981,
  lon: number;  //  30.2619,
  timezone: string;  //  "Europe/Moscow",
  currency: string;  //  "RUB",
  org: string;  //  "Mobile TeleSystems",
  as: string;  //  "AS8359 MTS PJSC",
  mobile: boolean;  //  true,
  query: string;  //  "217.66.158.208"
}

export const GET_IP_INFO = 'GET_IP_INFO';

interface GetIpInfoAction {
  type: typeof GET_IP_INFO
  payload: IipInfoState
}

export type ipInfoActionTypes = GetIpInfoAction;
