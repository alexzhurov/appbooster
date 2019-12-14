import React, { Component, Fragment }                     from 'react';
import './index.css';
import { connect }                                        from 'react-redux';
import { IAppProps, mapDispatchToProps, mapStateToProps } from '../../store';
import { Dropdown, Grid, Input }                          from 'semantic-ui-react';
import { currencyEnumerator }                             from '../../utils/currencyEnumerator';
import { Currency }                                       from '../Currency';

class Currencies extends Component<IAppProps> {

  state = {
    sum: 1
  };

  setFav(cur: string): void {
    this.props.setFavCurrency(cur);
  }

  setValue(value: number): void {
    this.setState({
      ...this.state,
      ...{ sum: value }
    });
  }

  render() {
    const { currencies: { list }, rates: { rates } } = this.props;
    const { sum } = this.state;
    const { favs } = this.props.currencies;

    const ratesKeys = Object.keys(rates);

    const options = currencyEnumerator(list);

    return (
      <Fragment>
        <Grid columns='16' centered>
          <Grid.Row>
            <Grid.Column computer='8'>
              <Input
                fluid
                size='huge'
                placeholder='0'
                value={this.state.sum}
                type='number'
                onChange={(event, data) => this.setValue(Number(data.value))}
                label={() => (
                  <div style={{ width: '140px' }}>
                    <Dropdown
                      placeholder='USD'
                      search
                      selection
                      fluid
                      value={this.props.ipInfo.currency || ''}
                      options={options}
                      onChange={(event, data) => this.props.setBaseCurrency(`${data.value}`)}
                    />
                  </div>
                )}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid columns={16} centered>
          <Grid.Row>
            {ratesKeys.length ? ratesKeys.map((cur, i) => (
              <Currency
                key={`currency_${i}`}
                cur={cur}
                title={list[cur]}
                isFavourite={favs.includes(cur)}
                rate={rates[cur]}
                sum={sum}
                setFav={this.setFav.bind(this)}
              />
            )) : (<div className='currencies-empty'>Данных нет</div>)}
          </Grid.Row>
        </Grid>
      </Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Currencies);

