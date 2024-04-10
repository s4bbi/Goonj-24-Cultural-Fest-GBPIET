import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ endTime }) => {
  const calculateTimeLeft = (endTime) => {
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

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(endTime));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(endTime));
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  });

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div className="text-white font-cR py-10 bg-gradient-to-r from-[#000] via-[#5f43b2] to-[#000]">
      <div className="flex mx-auto w-8/12 gap-4 justify-center sm:justify-between">
        <div className="">
          <div className="text-center">
            <div className="text-xl sm:text-3xl font-cuda">{formatTime(timeLeft.days)}</div>
            <div className="text-sm sm:text-lg opacity-35">DAYS</div>
          </div>
        </div>
        <div className="timer-item">
          <div className="text-center">
            <div className="text-xl sm:text-3xl font-cuda">{formatTime(timeLeft.hours)}</div>
            <div className="text-sm sm:text-lg opacity-35">HOURS</div>
          </div>
        </div>
        <div className="timer-item">
          <div className="text-center">
            <div className="text-xl sm:text-3xl font-cuda">{formatTime(timeLeft.minutes)}</div>
            <div className="text-sm sm:text-lg opacity-35">MINUTES</div>
          </div>
        </div>
        <div className="timer-item">
          <div className="text-center">
            <div className="text-xl sm:text-3xl font-cuda ">{formatTime(timeLeft.seconds)}</div>
            <div className="text-sm sm:text-lg opacity-35">SECONDS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;