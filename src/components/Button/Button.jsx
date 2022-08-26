import React from 'react';

import './Button.css';

const Button = ({changeYear, children}) => {
  return (
    <button className="Button" onClick={changeYear}>
      {children}
    </button>
  );
};

export default Button;
