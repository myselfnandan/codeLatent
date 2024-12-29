import { useState, useEffect } from 'react';

const CountdownTimer = ({ initialTime }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft <= 0) return;

    // Set up the interval
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, [timeLeft]);

  // Format time into minutes and seconds
  const formatTime = (time) => {
    const days = Math.floor(time / (24 * 60 * 60)); // calculate days
    const hours = Math.floor((time % (24 * 60 * 60)) / 3600); // calculate hours
    const minutes = Math.floor((time % 3600) / 60); // calculate minutes
    const seconds = time % 60; // calculate seconds
    return `${days}d ${hours}h ${minutes}m ${seconds}s`; // formatted time string
  };

  return (
    <div className="countdown-timer">
      <h2>Time Left:</h2>
      <p id="timer">{formatTime(timeLeft)}</p>
    </div>
  );
};

export default CountdownTimer;