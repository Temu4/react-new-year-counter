import React from 'react';

const Button = ({children}) => {
  return (
    <button id="increaseBtn" type="reset">
      {children}
    </button>
  );
};

export default Button;
