import { Action }       from 'redux';
import { ThunkAction }  from 'redux-thunk';
import { getIpInfo }    from '../store/ipinfo/actions';
import { AppState }     from '../store';
import { IipInfoState } from '../store/ipinfo/types';
import axios            from 'axios';
import { API_INFO }     from '../constants';

export const thunkGetIpInfo = (): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
  const result = await apiIpInfo();
  dispatch(getIpInfo(result));
};

async function apiIpInfo(): Promise<IipInfoState> {
  try {
    // Minimize quantity of free responses.
    if (!process.env.REACT_APP_IS_MOKABLE) {
      return new Promise(resolve => resolve({
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
      }));
    } else {
      const { data } = await axios.get(API_INFO, {
        params: {
          params: 'status,message,country,countryCode,city,lat,lon,timezone,currency,org,as,mobile,query\n'
        }
      });
      return data;
    }
  } catch (error) {
    throw error;
  }
}

