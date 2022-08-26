import React, {useState} from 'react';

import Button from './Button';

const Counter = () => {
  const [count, setCounter] = useState(0);

  return (
    <div>
      <Button changeYear={() => setCounter(count + 1)}>+</Button>
      <Button changeYear={() => setCounter(count - 1)}>-</Button>
      <br />
      {count}
    </div>
  );
};

export default Counter;
