import { GET_IP_INFO, ipInfoActionTypes, ipInfoState } from './types';

const initialState: ipInfoState = {
  city:  "Saint Petersburg",
  country:  "RU",
  hostname:  "host-250-159-66-217.spbmts.ru",
  ip:  "217.66.159.250",
  loc:  "59.9386,30.3141",
  org:  "AS8359 MTS PJSC",
  postal:  "190000",
  readme:  'readme',
  region:  "St.-Petersburg",
  timezone:  "St.-Petersburg",
};

export function ipInfoReducer(
  state = initialState,
  action: ipInfoActionTypes
): ipInfoState {
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

