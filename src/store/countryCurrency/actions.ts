import { countryCurrencyActionTypes, GET_COUNTRY_CURRENCY } from './types';

const countryJs = require('country-js');

export function getCountryCurrencyInfo(country: string): countryCurrencyActionTypes {
  const [result] = countryJs.search(country);
  return {
    type: GET_COUNTRY_CURRENCY,
    payload: result
  };
}
