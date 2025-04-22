import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const endTime = "2025-05-17T00:00:00";

  const calculateTimeLeft = () => {
    const difference = +new Date(endTime) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  return (
    <div className="text-white font-cR py-10 bg-gradient-to-r from-[#000] via-[#5f43b2] to-[#000]">
      <div className="flex mx-auto w-8/12 gap-4 justify-center sm:justify-between">
        {["days", "hours", "minutes", "seconds"].map((unit, index) => (
          <div key={index} className="timer-item text-center">
            <div className="text-xl sm:text-3xl font-cuda">{formatTime(timeLeft[unit])}</div>
            <div className="text-sm sm:text-lg opacity-35">{unit.toUpperCase()}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
