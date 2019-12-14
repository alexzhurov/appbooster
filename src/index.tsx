import React              from 'react';
import { render }         from 'react-dom';
import { Provider }       from 'react-redux';
import { configureStore } from './store';
import App                from './App';
import './styles/index.css';
import 'semantic-ui-css/semantic.min.css';
import throttle           from 'lodash/throttle';
import { saveState }      from './store/localStorage';

export const store = configureStore();

store.subscribe(throttle((...arg: any) => {
  const { ipInfo, rates } = store.getState();
  saveState({ ipInfo, rates });
}, 1000));


render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

