import React from 'react';

import Header from './Header';
import Button from './Button';
import Countdown from './Countdown';
import NoJSXComponent from './NoJSXComponent';

const App = ({isLoading}) => {
  return (
    <div>
      {isLoading ? (
        'Loading...'
      ) : (
        <div>
          <Header targetYear="2023" />
          <Button>+</Button>
          <Button children="-" />
          <Countdown />
          <NoJSXComponent>Some text</NoJSXComponent>
        </div>
      )}
    </div>
  );
};

export default App;
