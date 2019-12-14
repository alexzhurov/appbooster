import { applyMiddleware, combineReducers, createStore } from 'redux';

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

import { setBaseCurrency } from './ipinfo/actions';
import { setFavCurrency }  from './currencies/actions';

import { thunkGetRates }      from '../api/thunkRates';
import { thunkGetIpInfo }     from '../api/thunkIpInfo';
import { thunkConvert }       from '../api/thunkConvert';
import { thunkGetCurrencies } from '../api/thunkCurrencies';
import { loadState }          from './localStorage';

const rootReducer = combineReducers({
  currencies: currenciesReducer,
  ipInfo: ipInfoReducer,
  convert: convertReducer,
  rates: ratesReducer
});
const persistedState = loadState();

export type AppState = ReturnType<typeof rootReducer>;

export function configureStore() {
  const middleware = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middleware);

  return createStore(
    rootReducer,
    persistedState,
    composeWithDevTools(middleWareEnhancer)
  );
}

export interface IAppProps {
  currencies: ICurrenciesState
  ipInfo: IipInfoState
  convert: IConvertState
  rates: IRatesState

  setBaseCurrency: typeof setBaseCurrency
  setFavCurrency: typeof setFavCurrency

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
  thunkGetCurrencies,
  setBaseCurrency,
  setFavCurrency
};
