import React, {useState, useEffect, useRef} from 'react';
import {Header, Button, Countdown} from '.';

import calcRemainingTime from '../utils/calcRemainingTime';

const Clock = () => {
  const [targetYear, setTargetYear] = useState(2023);
  const [diffDate, setDiffDate] = useState({});

  const timerId = useRef(null);

  const increaseYear = () => {
    setTargetYear(targetYear + 1);
  };

  const decreaseYear = () => {
    setTargetYear(targetYear - 1);
  };

  const getDate = (target) => {
    clearInterval(timerId.current);

    timerId.current = setInterval(() => setDiffDate(calcRemainingTime(target)), 1000);
  };

  useEffect(() => {
    console.log('componentDidMount');
    getDate(targetYear);

    return () => {
      console.log('FC componentWillUnmount');
      clearInterval(timerId.current);
    };
  }, [targetYear]);

  console.log('render');

  return (
    <div>
      <Header targetYear={targetYear} />

      <Button changeYear={increaseYear}>+</Button>
      <Button changeYear={decreaseYear} children="-" />

      <Countdown date={diffDate} />
    </div>
  );
};

export default Clock;
