import React, {useState, useEffect} from 'react';

// Exercise:
// * Change extension of this file to .tsx and restart the development server
// * Define suitable "Time" type that will hold information about hours, minutes and seconds as strings
// * Use types for Clock component props
// * Use types for useState hook
// * Use types for getCurrentTime function
//
// WARNING: there is a bug that will emerge with using a proper typing, find it and fix it.

const Clock = () => {
  const [time, setTime] = useState(getCurrentTime());
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

  return <h1>The time is {time.hours}:{time.minutes}:{time.seconds}</h1>;
};

// Util function to get current time
function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  return {
    hours: hours < 10 ? `0${hours}` : hours,
    minutes: minutes < 10 ? `0${minutes}` : minutes,
    seconds: seconds < 10 ? `0${seconds}` : seconds
  };
};

export default Clock;
