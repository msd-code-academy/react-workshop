import React, {useState, useEffect} from 'react';

type Time = {
  hours: string;
  minutes: string;
  seconds: string;
}

type ClockProps = {};

const Clock: React.FC<ClockProps> = () => {
  const [time, setTime] = useState<Time>(getCurrentTime());
  useEffect(
    () => {
      const intervalID = setInterval(() => {
        const currentTime = getCurrentTime();
        console.log(currentTime);
        setTime(currentTime);
      }, 1000);
      return () => clearInterval(intervalID);
    },
    []
  );

  return <h1>The time is {time.hours}:{time.minutes}:{time.seconds.trim()}</h1>;
};

// Util function to get current time
function getCurrentTime(): Time {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  return {
    hours: hours < 10 ? `0${hours}` : `${hours}`,
    minutes: minutes < 10 ? `0${minutes}` : `${minutes}`,
    seconds: seconds < 10 ? `0${seconds}` : `${seconds}`
  };
};

export default Clock;
