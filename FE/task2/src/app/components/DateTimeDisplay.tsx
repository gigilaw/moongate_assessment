import React from 'react';

interface DateTimeDisplayProps {
  value: number;
  type: string;
}

const DateTimeDisplay: React.FC<DateTimeDisplayProps> = ({ value, type }) => {
  return (
    <div className='countdown'>
      <p>{value}</p>
      <span>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;