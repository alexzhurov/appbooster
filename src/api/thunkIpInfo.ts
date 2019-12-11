import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { getIpInfo } from "../store/ipinfo/actions";
import { AppState } from "../store";
import { ipInfoState } from '../store/ipinfo/types';
import axios from 'axios';
import { API_INFO } from '../constants/constants';

export const thunkGetIpInfo = (): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
  const result = await apiIpInfo();
  dispatch(getIpInfo(result));
};

async function apiIpInfo(): Promise<ipInfoState> {
  try {
    // const data = await axios.get(
    //   API_INFO, {
    //     // params: {
    //     //   app_id: API_CURR_KEY
    //     // }
    //   });
    const { data } = await axios.get(API_INFO, {
      params: {
        token: '2adea5909a4cde'
      }
    });
    return data;
  } catch (error) {
    throw error;
  }
}

