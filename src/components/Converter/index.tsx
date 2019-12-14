import React, { Fragment }       from 'react';
import { connect }               from 'react-redux';
import { Dropdown, Grid, Input } from 'semantic-ui-react';

import { IAppProps, mapDispatchToProps, mapStateToProps } from '../../store';
import { currencyEnumerator }                             from '../../utils/currencyEnumerator';

class Converter extends React.Component<IAppProps> {
  state = {
    from: {
      value: 0
    },
    to: {
      currency: '',
      value: 0
    }
  };

  setCurrency(currency: string): void {
    this.setState({
      to: {
        ...this.state.to,
        ...{ currency }
      }
    });
  }

  setValue(value: number, dest: 'from' | 'to'): void {
    this.setState({
      [dest]: {
        ...this.state[dest],
        ...{ value }
      }
    });
  }

  render() {
    const { currencies: { list }, setBaseCurrency, ipInfo: { currency } } = this.props;
    const options = currencyEnumerator(list);

    return (
      <Fragment>
        <Grid columns='16' relaxed centered style={{ minHeight: '400px' }}>
          <Grid.Row verticalAlign={'middle'}>
            <Grid.Column computer='6'>
              <Input
                fluid
                size='massive'
                placeholder='0'
                value={this.state.from.value}
                onChange={(event, data) => this.setValue(Number(data.value), 'from')}
                label={() => (
                  <div style={{ width: '120px' }}>
                    <Dropdown
                      placeholder={'USD'}
                      search
                      selection
                      fluid
                      value={currency || ''}
                      options={options}
                      onChange={(event, data) => setBaseCurrency(`${data.value}`)}
                    />
                  </div>
                )}
              />
            </Grid.Column>
            <Grid.Column computer='6'>
              <Input
                fluid
                size='massive'
                placeholder='0'
                value={this.state.to.value}
                onChange={(event, data) => this.setValue(Number(data.value), 'to')}
                label={() => (
                  <div style={{ width: '120px' }}>
                    <Dropdown
                      placeholder={'USD'}
                      search
                      selection
                      fluid
                      value={this.state.to.currency}
                      options={options}
                      onChange={(event, data) => this.setCurrency(`${data.value}`)}
                    />
                  </div>
                )}
              />

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Converter);
