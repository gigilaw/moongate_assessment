"use client"
import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import useCountDown  from '../hooks/useCountDown';

interface CountDownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountDownTimerProps> = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountDown(targetDate);

  return (
    <div className="show-counter">
        <DateTimeDisplay value={days} type={'Days'}  />
        <p>:</p>
        <DateTimeDisplay value={hours} type={'Hours'} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={'Minutes'}  />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={'Seconds'} />
    </div>
  );
};

export default CountdownTimer;