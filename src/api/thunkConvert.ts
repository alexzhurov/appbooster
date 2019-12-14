import { Action }                         from 'redux';
import { ThunkAction }                    from 'redux-thunk';
import { convertCurrency }                from '../store/convert/actions';
import { AppState }                       from '../store';
import axios                              from 'axios';
import { API_CURR, API_CURR_KEY }         from '../constants';
import { IConvertRequest, IConvertState } from '../store/convert/types';

export const thunkConvert = (data: IConvertRequest): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
  const result = await apiConvert(data);
  dispatch(convertCurrency(result));
};

async function apiConvert({ sum, from, to }: IConvertRequest): Promise<IConvertState> {
  try {
    const { data } = await axios.get(
      `${API_CURR}/convert/${sum}/${from}/${to}`, {
        params: {
          app_id: API_CURR_KEY
        }
      });
    return data;
  } catch (error) {
    throw new Error(error.response.data.description);
  }
}

