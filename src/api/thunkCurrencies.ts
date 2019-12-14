import { Action }          from 'redux';
import { ThunkAction }     from 'redux-thunk';
import { getCurrencies }   from '../store/currencies/actions';
import { AppState }        from '../store';
import { ICurrenciesList } from '../store/currencies/types';
import axios               from 'axios';
import { API_CURR }        from '../constants';

export const thunkGetCurrencies = (): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
  const result = await apiCurrencies();
  dispatch(getCurrencies({ ...result }));
};

async function apiCurrencies(): Promise<ICurrenciesList> {
  try {
    const { data } = await axios.get(`${API_CURR}/currencies.json`);
    return data;
  } catch (error) {
    throw new Error(error.response.data.description);
  }
}
