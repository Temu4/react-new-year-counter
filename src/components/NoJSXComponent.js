import React from 'react';

const NoJSXComponent = (props) => {
  return React.createElement(
    'button',
    {
      type: 'reset',
      id: 'increaseBtn'
    },
    props.children
  );
};

export default NoJSXComponent;
