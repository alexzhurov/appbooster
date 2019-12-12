import { Action }             from 'redux';
import { ThunkAction }        from 'redux-thunk';
import { getCurrencies }      from '../store/currencies/actions';
import { AppState }           from '../store';
import { CurrenciesResponse } from '../store/currencies/types';
import axios                  from 'axios';
import {
  API_CURR,
  API_CURR_KEY
}                             from '../constants';

export const thunkGetCurrencies = (base: string): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
  // TODO (au.zhurov): Change plan if needed
  const result = await apiCurrencies('USD');
  dispatch(
    getCurrencies({
      ...result,
      timestamp: result.timestamp * 1000
    })
  );
};

async function apiCurrencies(base: string): Promise<CurrenciesResponse> {
  try {
    // minimize quantity of free responses.
    if (process.env.REACT_APP_IS_MOKABLE) {
      return new Promise(resolve => resolve({
        base,
        disclaimer: 'Usage subject to terms: https://openexchangerates.org/terms',
        license: 'https://openexchangerates.org/license',
        timestamp: 1576130400,
        rates: { AED: 3.6731, AFN: 78.549996, ALL: 109.997737, AMD: 477.87305, ANG: 1.715392, AOA: 472.2805 }
      }));
    } else {
      const { data } = await axios.get(
        `${API_CURR}/latest.json`, {
          params: {
            app_id: API_CURR_KEY,
            base
          }
        });
      return data;
    }
  } catch (error) {
    throw new Error(error.response.data.description);
  }
}
