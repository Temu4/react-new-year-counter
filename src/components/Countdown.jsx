import React from 'react';

const Countdown = ({date}) => {
  const {diffInYears, diffInDays, diffInHours, diffInMinutes, diffInSeconds} = date;

  if (!diffInYears && !diffInDays && !diffInHours && !diffInMinutes && !diffInSeconds) return;

  return (
    <h1>
      {diffInYears ? diffInYears + 'years' : ''}
      {diffInDays} days, {diffInHours} hours, {diffInMinutes} minutes, {diffInSeconds} sec
    </h1>
  );
};

export default Countdown;
