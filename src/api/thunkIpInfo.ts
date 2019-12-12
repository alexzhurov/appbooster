import { Action }      from 'redux';
import { ThunkAction } from 'redux-thunk';
import { getIpInfo }   from '../store/ipinfo/actions';
import { AppState }    from '../store';
import { ipInfoState } from '../store/ipinfo/types';
import axios           from 'axios';
import {
  API_INFO,
  API_INFO_KEY
}                      from '../constants';

export const thunkGetIpInfo = (): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
  const result = await apiIpInfo();
  dispatch(getIpInfo(result));
};

async function apiIpInfo(): Promise<ipInfoState> {
  try {
    // minimize quantity of free responses.
    if (true) {
      return new Promise(resolve => resolve({
        city: 'Saint Petersburg',
        country: 'RU',
        hostname: 'host-250-159-66-217.spbmts.ru',
        ip: '217.66.159.250',
        loc: '59.9386,30.3141',
        org: 'AS8359 MTS PJSC',
        postal: '190000',
        readme: 'wtf',
        region: 'St.-Petersburg',
        timezone: 'St.-Petersburg'
      }));

    } else {
      const { data } = await axios.get(API_INFO, {
        params: {
          token: API_INFO_KEY
        }
      });
      return data;
    }
  } catch (error) {
    throw error;
  }
}

