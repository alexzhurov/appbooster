import React                                              from 'react';
import { connect }                                        from 'react-redux';
import { IAppProps, mapDispatchToProps, mapStateToProps } from './store';
import './styles/App.css';
import Converter                                          from './components/Converter';
import Currencies                                         from './components/Currencies';
import { Container, Tab }                                 from 'semantic-ui-react';

class App extends React.Component<IAppProps> {

  async componentDidMount(): Promise<void> {
    await this.props.thunkGetIpInfo();
    await this.props.thunkGetCurrencies();
    this.props.thunkGetRates(this.props.ipInfo.currency);
  };

  render() {
    const panes = [{
      menuItem: 'Converter',
      render: () => (<Tab.Pane><Converter/></Tab.Pane>)
    }, {
      menuItem: 'Currencies',
      render: () => (<Tab.Pane><Currencies/></Tab.Pane>)
    }];
    return (
      <div className="App">
        <Container>
          <Tab
            menu={{
              color: 'grey',
              tabular: true,
              attached: true,
              inverted: true
            }}
            panes={panes}/>
        </Container>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
