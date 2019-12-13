import React                from 'react';
import './index.css';
import { ICurrenciesProps } from './types';
import { connect }          from 'react-redux';
import {
  mapDispatchToProps,
  mapStateToProps
}                           from '../../store';


class Currencies extends React.Component<ICurrenciesProps> {
  constructor(props: ICurrenciesProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.addFav = this.addFav.bind(this);
  }

  state: { sum: number, favCurs: string[] } = {
    // TODO (au.zhurov): fix this value
    sum: 2,
    favCurs: []
  };

  async componentDidMount(): Promise<void> {
  };

  addFav(cur: string): void {
    const { favCurs } = this.state;
    let favs;
    if (favCurs.includes(cur)) {
      favs = [...favCurs.filter((favCur) => favCur !== cur)];
    } else {
      favs = [...favCurs, ...[cur]];
    }
    this.setState({ favCurs: favs });
  }

  handleChange(event: React.FormEvent<HTMLInputElement>): void {
    this.setState({ sum: Number(event.currentTarget.value) });
  }

  incrementSum(toIncrement: boolean): void {
    const { sum } = this.state;

    if (toIncrement) {
      this.setState({ sum: sum + 1 });
    } else {
      if (sum <= 0) {
        this.setState({ sum: 0 });
      } else {
        this.setState({ sum: sum - 1 });
      }
    }
  }

  render() {
    const { rates } = this.props.rates;
    const { sum, favCurs } = this.state;
    const ratesKeys = Object.keys(rates);

    const curComponent = (cur: string, rate: number, key: number) => (
      <div className='currency' key={key}>
        <div className='currency__caption'>{cur}</div>
        <div className='currency__value'>
          <div className={`currency__fav ${favCurs.includes(cur) ? 'active' : ''}`}
               onClick={() => this.addFav(cur)}>&#x2661;</div>
          {sum ? (sum * rate).toFixed(2) : 0}
        </div>
      </div>
    );


    return (
      <React.Fragment>
        <label className="sum">
          <div className="sum__caption">Цена за</div>
          <input type="number" min="0" value={this.state.sum} onChange={this.handleChange}/>
          <div className="sum__controls">
            <div className="plus" onClick={() => this.incrementSum(true)}>+</div>
            <div className="minus" onClick={() => this.incrementSum(false)}> -</div>
          </div>
        </label>
        <div className="currencies">
          {ratesKeys.length ? ratesKeys.map((cur, i) => (
            curComponent(cur, rates[cur], i)
          )) : (<div className='currencies-empty'>Данных нет</div>)}
        </div>

      </React.Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Currencies);

