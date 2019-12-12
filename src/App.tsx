import * as React                 from 'react';
import { connect }                from 'react-redux';
import { AppState }               from './store';
import { thunkGetCurrencies }     from './api/thunkCurrencies';
import { thunkGetIpInfo }         from './api/thunkIpInfo';
import { thunkConvert }           from './api/thunkConvert';
import { getCountryCurrencyInfo } from './store/countryCurrency/actions';
import { ipInfoState }            from './store/ipinfo/types';
import { countryCurrencyState }   from './store/countryCurrency/types';
import { IConvertState }          from './store/convert/types';
import { CurrenciesState }        from './store/currencies/types';

import './styles/App.css';
import logo                       from './logo.svg';

interface AppProps {
  currencies: CurrenciesState
  ipInfo: ipInfoState
  country: countryCurrencyState
  convert: IConvertState

  thunkGetCurrencies: typeof thunkGetCurrencies
  thunkGetIpInfo: typeof thunkGetIpInfo
  thunkConvert: typeof thunkConvert

  getCountryCurrencyInfo: typeof getCountryCurrencyInfo
}

class App extends React.Component<AppProps> {

  constructor(options: AppProps) {
    super(options);

    this.getCurrencies = this.getCurrencies.bind(this);
  }

  async componentDidMount(): Promise<void> {
    await this.props.thunkGetIpInfo();
    await this.props.getCountryCurrencyInfo(this.props.ipInfo.country || 'US');

    debugger;
    this.props.thunkGetCurrencies(this.props.country.currency.currencyCode);
  };

  getCurrencies(): void {
    debugger;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <button onClick={this.getCurrencies}>
            getCurrencies
          </button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  currencies: state.currencies,
  ipInfo: state.ipInfo,
  country: state.country,
  convert: state.convert
});

export default connect(
  mapStateToProps,
  {
    thunkGetCurrencies,
    thunkGetIpInfo,
    thunkConvert,
    getCountryCurrencyInfo
  }
)(App);
