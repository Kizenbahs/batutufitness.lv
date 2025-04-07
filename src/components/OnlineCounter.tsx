import React, { useState, useEffect } from 'react';

export const OnlineCounter: React.FC = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    // Simulate random fluctuations in the number of online users
    const interval = setInterval(() => {
      setCount(prevCount => {
        const change = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
        const newCount = Math.max(1, prevCount + change); // Ensure minimum of 1
        return newCount;
      });
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="text-gray-400 text-sm">
      Online: {count}
    </span>
  );
}; 