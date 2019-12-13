import React       from 'react';
import './index.css';
import { connect } from 'react-redux';
import {
  mapDispatchToProps,
  mapStateToProps
}                  from '../../store';

class Converter extends React.Component<any> {

  async componentDidMount(): Promise<void> {
    debugger;
  };

  render() {
    return (
      <div>/src/components/Converter</div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Converter);
