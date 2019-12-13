import {
  GET_IP_INFO,
  ipInfoActionTypes,
  IipInfoState
} from './types';

const initialState: IipInfoState = {
  status: "success",
  country: "Russia",
  countryCode: "RU",
  city: "St Petersburg",
  lat: 59.8981,
  lon: 30.2619,
  timezone: "Europe/Moscow",
  currency: "RUB",
  org: "Mobile TeleSystems",
  as: "AS8359 MTS PJSC",
  mobile: true,
  query: "217.66.158.208"
};

export function ipInfoReducer(
  state = initialState,
  action: ipInfoActionTypes
): IipInfoState {
  switch (action.type) {
    case GET_IP_INFO:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}

