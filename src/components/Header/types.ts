import { ICurrenciesState } from '../../store/currencies/types';

export interface IHeaderProps {
  tabs: { id: string; title: string; isActive: boolean; }[]
  currencies: ICurrenciesState
  setActiveTab: (tabName: string) => void
}
