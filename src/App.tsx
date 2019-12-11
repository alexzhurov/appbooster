import * as React from 'react';
import { connect } from "react-redux";
import { AppState } from "./store";
import { thunkGetCurrancies } from './api/thunkCurrancies';
import { thunkGetIpInfo } from './api/thunkIpInfo';
import './App.css';
import logo from './logo.svg';

interface AppProps {
  thunkGetCurrancies: any
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
    this.props.thunkGetCurrancies();
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
    thunkGetCurrancies,
    thunkGetIpInfo
  }
)(App);
