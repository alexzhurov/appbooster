import { GET_IP_INFO, ipInfoActionTypes, ipInfoState } from './types';

const initialState: ipInfoState = {
  city: null,
  country: null,
  hostname: null,
  ip: null,
  loc: null,
  org: null,
  postal: null,
  readme: null,
  region: null,
  timezone: null
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

