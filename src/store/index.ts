import {
  createStore,
  combineReducers,
  applyMiddleware
}                              from 'redux';
import thunkMiddleware         from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ratesReducer }        from './rates/reducers';
import { convertReducer }      from './convert/reducers';
import { currenciesReducer }   from './currencies/reducers';
import { ipInfoReducer }       from './ipinfo/reducers';

import { IRatesState }      from './rates/types';
import { IConvertState }    from './convert/types';
import { ICurrenciesState } from './currencies/types';
import { IipInfoState }     from './ipinfo/types';

import { thunkGetRates }      from '../api/thunkRates';
import { thunkGetIpInfo }     from '../api/thunkIpInfo';
import { thunkConvert }       from '../api/thunkConvert';
import { thunkGetCurrencies } from '../api/thunkCurrencies';

const rootReducer = combineReducers({
  currencies: currenciesReducer,
  ipInfo: ipInfoReducer,
  convert: convertReducer,
  rates: ratesReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export function configureStore() {
  const middleware = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middleware);

  return createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  );
}

export interface IAppProps {
  currencies: ICurrenciesState
  ipInfo: IipInfoState
  convert: IConvertState
  rates: IRatesState

  thunkGetRates: any
  thunkGetIpInfo: any
  thunkConvert: any
  thunkGetCurrencies: any
}

export const mapStateToProps = (state: AppState) => ({
  currencies: state.currencies,
  ipInfo: state.ipInfo,
  convert: state.convert,
  rates: state.rates
});
export const mapDispatchToProps = {
  thunkGetRates,
  thunkGetIpInfo,
  thunkConvert,
  thunkGetCurrencies
};
