import React, { useState, useEffect } from "react";

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    console.log("useEffect hook for Clock component has been called");

    const clockInterval = setInterval(() => {
      tick();
    }, 1000);

    return () => {
      console.log("Cleared Clock update interval");
      clearInterval(clockInterval);
    };
  }, []);

  const tick = () => {
    setDate(new Date());
    console.log("tick"); // track the effect frequency
  };

  return (
    <div className="Clock">
      <h3>Digital Clock</h3>
      {date.toLocaleTimeString()}
    </div>
  );
}

export default Clock;
