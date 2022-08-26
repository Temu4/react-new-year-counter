import React from 'react';
import {Header, Button, Countdown} from '.';

import calcRemainingTime from '../utils/calcRemainingTime';

class ClockClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {targetYear: 2023, diffDate: {}};
    this.timerId = null;

    // Bind methods
    this.increaseYear = this.increaseYear.bind(this);
    // this.decreaseYear = this.decreaseYear.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.getDate();
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.timerId);
  }

  increaseYear() {
    console.log('increaseYear: ', this);
    this.setState({...this.state, targetYear: this.state.targetYear + 1});
  }

  decreaseYear = () => {
    console.log('decreaseYear: ', this);

    this.setState({...this.state, targetYear: this.state.targetYear - 1});
  };

  getDate = () => {
    this.timerId = setInterval(() => {
      this.setState({...this.state, diffDate: calcRemainingTime(this.state.targetYear)});
    }, 1000);
  };

  render() {
    console.log('render');

    const {targetYear, diffDate} = this.state;

    return (
      <div>
        <Header targetYear={targetYear} />

        <Button changeYear={this.increaseYear}>+</Button>
        <Button changeYear={this.decreaseYear} children="-" />

        <Countdown date={diffDate} />
      </div>
    );
  }
}

export default ClockClass;
