import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { getCurrencies } from "../store/currencies/actions";
import { AppState } from "../store";
import { CurrenciesResponse } from '../store/currencies/types';
import axios from 'axios';
import { API_CURR, API_CURR_KEY } from '../constants/constants';

export const thunkGetCurrancies = (): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
  const result = await apiCurrancies();
  dispatch(
    getCurrencies({
      ...result,
      timestamp: result.timestamp * 1000
    })
  );
};

async function apiCurrancies(): Promise<CurrenciesResponse> {
  try {
    const { data } = await axios.get(
      `${API_CURR}/latest.json`, {
        params: {
          app_id: API_CURR_KEY
        }
      });
    return data;
  } catch (error) {
    throw error;
  }
}
