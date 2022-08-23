import React from 'react';

const Header = ({targetYear}) => {
  return (
    <p className="header">
      Time left to
      <b id="targetYear">{targetYear}</b> New Year:
    </p>
  );
};

export default Header;
