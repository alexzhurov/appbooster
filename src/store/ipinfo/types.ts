export interface IipInfoState {
  status: 'success' | 'fail';  //  "success",
  message?: string;
  country: string;             //  "Russia",
  countryCode: string;         //  "RU",
  city: string;                //  "St Petersburg",
  lat: number;                 //  59.8981,
  lon: number;                 //  30.2619,
  timezone: string;            //  "Europe/Moscow",
  currency: string | null;     //  "RUB",
  org: string;                 //  "Mobile TeleSystems",
  as: string;                  //  "AS8359 MTS PJSC",
  mobile: boolean;             //  true,
  query: string;               //  "217.66.158.208"
}

export const GET_IP_INFO = 'GET_IP_INFO';
export const SET_BASE_CURRENCY = 'SET_BASE_CURRENCY';

interface GetIpInfoAction {
  type: typeof GET_IP_INFO
  payload: IipInfoState
}

interface setBaseCurrencyAction {
  type: typeof SET_BASE_CURRENCY
  payload: {
    currency: string
  }
}

export type ipInfoActionTypes = GetIpInfoAction | setBaseCurrencyAction;
