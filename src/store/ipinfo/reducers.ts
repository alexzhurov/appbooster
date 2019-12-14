import { GET_IP_INFO, IipInfoState, ipInfoActionTypes, SET_BASE_CURRENCY } from './types';

const initialState: IipInfoState = {
  status: 'fail',  // "success",
  country: '',     // "Russia",
  countryCode: '', // "RU",
  city: '',        // "St Petersburg",
  lat: 0,          // 59.8981,
  lon: 0,          // 30.2619,
  timezone: '',    // "Europe/Moscow",
  currency: '',    // 'EUR',
  org: '',         // "Mobile TeleSystems",
  as: '',          // "AS8359 MTS PJSC",
  mobile: false,   // true,
  query: ''        // "217.66.158.208"
};

export function ipInfoReducer(
  state = initialState,
  action: ipInfoActionTypes
): IipInfoState {
  switch (action.type) {
    case SET_BASE_CURRENCY:
      return {
        ...state,
        ...action.payload
      };
    case GET_IP_INFO:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}

