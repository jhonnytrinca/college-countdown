import { useEffect, useState } from 'react';

const useCountdown = () => {
  const countdownDate = new Date('01 July 2023 00:00:00 GMT-0300').getTime();

  const [date, setDate] = useState(countdownDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(countdownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countdownDate]);

  const years = Math.floor(date / (365 * 24 * 60 * 60 * 1000));
  const days = Math.floor((date / (24 * 60 * 60 * 1000)) % 365);
  const hours = Math.floor((date / (60 * 60 * 1000)) % 24);
  const minutes = Math.floor((date / (60 * 1000)) % 60);
  const seconds = Math.floor((date / 1000) % 60);

  return [years, days, hours, minutes, seconds];
};

export default useCountdown;
