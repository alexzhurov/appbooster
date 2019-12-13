import React       from 'react';
import { connect } from 'react-redux';
import {
  IAppProps,
  mapDispatchToProps,
  mapStateToProps
}                  from './store';
import './styles/App.css';
import Converter   from './components/Converter';
import Currencies  from './components/Currencies';
import { Header }  from './components/Header';

const TAB_CONVERTER = 'Converter';
const TAB_CURRENCIES = 'Currencies';

class App extends React.Component<IAppProps> {

  state = {
    tabs: [
      { id: TAB_CONVERTER, title: 'Converter', isActive: false },
      { id: TAB_CURRENCIES, title: 'Currencies', isActive: false }
    ]
  };

  async initData(): Promise<void> {
    await this.props.thunkGetIpInfo();
    await this.props.thunkGetCurrencies();
    // this.props.thunkGetRates(this.props.ipInfo.currency);
  }

  async componentDidMount(): Promise<void> {
    await this.initData();
    this.setActiveTab(TAB_CONVERTER);
    // this.setActiveTab(TAB_CURRENCIES);
  };

  /**
   * Tab click handler
   * @param {string} tabName
   */
  protected setActiveTab(tabName: string): void {
    const tabs = this.state.tabs.map(tab => ({
      ...tab,
      isActive: tab.id === tabName
    }));
    this.setState({ tabs });
  }


  render() {
    const { tabs } = this.state;
    const { currencies } = this.props;
    const activeTab = tabs.find(({ isActive }) => isActive) || tabs[0];
    return (
      <div className="App">
        <Header tabs={tabs} currencies={currencies} setActiveTab={this.setActiveTab.bind(this)}/>

        <main className="App__main">
          {(() => {
            switch (activeTab.id) {
              case TAB_CONVERTER:
                return <Converter/>;
              case TAB_CURRENCIES:
                return <Currencies/>;
              default:
                return <div>404 page</div>;
            }
          })()}
        </main>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
