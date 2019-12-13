import React            from 'react';
import './index.css';
import userSvg          from '../../assets/user.svg';
import { IHeaderProps } from './types';


class Header extends React.Component<IHeaderProps> {

  async componentDidMount(): Promise<void> {
  };

  render() {
    const { tabs, currencies, setActiveTab } = this.props;
    return (
      <header className="App__header">
        <nav className="nav">
          {tabs.map(({ title, id, isActive }) => (
            <span key={id} className={`nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveTab(id)}>
              {title}</span>
          ))}
        </nav>
        <div className=" user">
          <div className=" user__avatar">
            <img src={userSvg} className=" user-logo" alt=" logo"/>
          </div>
          <div className=" user__currency">
            Your currency is {currencies.base}
          </div>
        </div>
      </header>
    );
  }
}

export { Header };
