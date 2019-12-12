export interface countryCurrencyState {
  code: string | null;
  name: string | null;
  currency: {
    currencyName: string|null;
    currencySymbol: string|null;
    currencyCode: string
  };
  geo: {
    latitude: number;
    longitude: number
  };
  capital: string | null;
  phone: string | null;
}

export const GET_COUNTRY_CURRENCY = 'GET_COUNTRY_CURRENCY';

interface GetCountryCurrencyAction {
  type: typeof GET_COUNTRY_CURRENCY
  payload: countryCurrencyState
}

export type countryCurrencyActionTypes = GetCountryCurrencyAction;
