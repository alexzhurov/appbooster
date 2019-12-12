import {
  createStore,
  combineReducers,
  applyMiddleware
}                                 from 'redux';
import thunkMiddleware            from 'redux-thunk';
import { composeWithDevTools }    from 'redux-devtools-extension';
import { convertReducer }         from './convert/reducers';
import { countryCurrencyReducer } from './countryCurrency/reducers';
import { currenciesReducer }      from './currencies/reducers';
import { ipInfoReducer }          from './ipinfo/reducers';


const rootReducer = combineReducers({
  currencies: currenciesReducer,
  ipInfo: ipInfoReducer,
  country: countryCurrencyReducer,
  convert: convertReducer
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

export type RootState = ReturnType<typeof rootReducer>
