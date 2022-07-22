// To create a counter App in which one counter will move by 1 second,
// another will move by 1/2 a seconds

// 1 2 3 4 5
// 0.5 1 1.5 2 2.5

import React, { useState, useEffect } from "react";

const Counters = () => {
  const [counters, setCounters] = useState(0);
  // we should not give empty arr bcoz it will render only on mount then,
  // after the setter fn. won't create re-render bcoz there's no dependecies
  useEffect(() => {
    let interval = setInterval(() => {
      setCounters(counters + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <>
      <h1>One Second Count {counters}</h1>
      <h1>Half Second Count {counters / 2}</h1>
    </>
  );
};
export default Counters;
