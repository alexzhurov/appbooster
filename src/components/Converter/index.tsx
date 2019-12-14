import React, { Component, Fragment } from 'react';
import { connect }                    from 'react-redux';
import { Dropdown, Grid, Input }      from 'semantic-ui-react';

import { IAppProps, mapDispatchToProps, mapStateToProps } from '../../store';
import { currencyEnumerator }                             from '../../utils/currencyEnumerator';

class Converter extends Component<IAppProps> {
  state: {
    from: {
      value: number
    },
    to: {
      currency: string,
      value: number
    }
  } = {
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
      ...this.state,
      to: {
        ...this.state.to,
        ...{ currency }
      }
    }, this.makeConvert);
  }

  setValue(value: number, dest: 'from' | 'to'): void {
    if (isNaN(value)) return;

    this.setState({
      [dest]: {
        ...this.state[dest],
        ...{ value }
      }
    }, this.makeConvert);

  }

  makeConvert(): void {
    const from = this.props.ipInfo.currency;
    const to = this.state.to.currency;
    if (from && to) {
      const rateFrom = 1 / this.props.rates.rates[from];
      const rateTo = 1 / this.props.rates.rates[to];

      const converted = this.state.from.value * (rateFrom / rateTo);
      const value = Number(converted.toFixed(2));
      this.setState({
        ...this.state,
        ...{ to: { ...this.state.to, value } }
      });
      //   await this.props.thunkConvert({ sum: this.state.from.value, from, to });
      //   this.setValue(this.props.convert.response, 'to');
    }
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
                label={() => (
                  <div style={{ width: '120px' }}>
                    <Dropdown
                      placeholder='---'
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
