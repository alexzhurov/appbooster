import { GET_IP_INFO, ipInfoActionTypes, ipInfoState } from './types';

const initialState: ipInfoState = {
  city: "string",
  country: "GB",
  hostname: "string",
  ip: "string",
  loc: "string",
  org: "string",
  postal: "string",
  readme: "string",
  region: "string",
  timezone: "string"
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

