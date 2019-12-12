export interface IConvertState {
  request: {
    amount: number;
    query: string;
    from: string;
    to: string
  };
  meta: {
    rate: number;
    timestamp: number
  };
  response: number;
}

export interface IConvertRequest {
  sum: number
  from: string
  to: string
}

export const CONVERT_CURRENCY = 'CONVERT_CURRENCY';

interface ConvertAction {
  type: typeof CONVERT_CURRENCY
  payload: IConvertState
}


export type convertActionTypes = ConvertAction;
