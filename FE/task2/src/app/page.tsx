"use client"
import { useState } from 'react';
import CountDownTimer from './components/CountDownTimer';

const Page = (): JSX.Element => {
  const [targetDate, setTargetDate] = useState<Date | undefined>(undefined);

  const handleClick = (): void => {
    const input = document.querySelector<HTMLInputElement>('#countdown-date-time');
    if (input?.value) {
      setTargetDate(new Date(input.value));
    }
  };

  return (
          <div >
            <form>
              <input
                id="countdown-date-time"
                name="countdown-date-time"
                type="datetime-local"
              />
              <button type="button" onClick={handleClick}>
               Start
              </button>
            </form>
            {!targetDate ? <p> Select a date and time to start the countdown. </p> : (
              <>
                <p>
                  Countdown to <strong>{targetDate.toLocaleString()}</strong>:
                </p>
                <CountDownTimer targetDate={targetDate} />
              </>
              ) 
            }
          </div>
  );
};

export default Page;