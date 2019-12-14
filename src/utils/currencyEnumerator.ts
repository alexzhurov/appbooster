import { ICurrenciesList } from '../store/currencies/types';

export const currencyEnumerator = (currencies: ICurrenciesList) => Object.keys(currencies).map((cur) => ({
  key: cur,
  text: cur,
  value: cur
}));
