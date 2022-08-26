import React from 'react';
import {Clock, ClockClass, Counter} from '.';

const App = ({isClassComponents}) => {
  return (
    <div>
      {isClassComponents ? <ClockClass /> : <Clock />}
      <Counter />
    </div>
  );
};

export default App;
