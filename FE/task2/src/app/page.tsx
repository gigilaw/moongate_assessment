'use client'
import { useState } from 'react';
import CountDownTimer from './components/CountDownTimer';

interface Props {
  // add the required props and their types here
}

const Page = (props: Props): JSX.Element => {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  const [targetDate, setTargetDate] = useState<Date>(new Date(dateTimeAfterThreeDays));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    if (event.target.value) {
      setTargetDate(new Date(event.target.value));
    } else {
      setTargetDate(new Date(dateTimeAfterThreeDays));
    }
  };

  return (
          <div>
            <form>
              <label>Select a Date and Time:</label>
              <input
                id="countdown-date-time"
                name="countdown-date-time"
                type="datetime-local"
                onChange={handleChange}
              />
            </form>
            <CountDownTimer targetDate={targetDate} />
      </div>
  );
};

export default Page;