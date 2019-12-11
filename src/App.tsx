import * as React from 'react';
import { connect } from "react-redux";
import { AppState } from "./store";
import { thunkGetCurrencies } from './api/thunkCurrencies';
import { thunkGetIpInfo } from './api/thunkIpInfo';
import './styles/App.css';
import logo from './logo.svg';

interface AppProps {
  thunkGetCurrencies: any
  thunkGetIpInfo: any
}

class App extends React.Component<AppProps> {

  constructor(options: AppProps) {
    super(options);
    this.getCurrencies = this.getCurrencies.bind(this);
  }

  componentDidMount(): void {
    this.props.thunkGetIpInfo();
  };

  getCurrencies(): void {
    this.props.thunkGetCurrencies();
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
  ipInfo: state.ipInfo
});

export default connect(
  mapStateToProps,
  {
    thunkGetCurrencies,
    thunkGetIpInfo
  }
)(App);
