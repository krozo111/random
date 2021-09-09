import { useEffect, useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(60);

  // Third Attempts
  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div className="flex-row">
      <div className="text-5xl">Countdown: {counter}</div>
    </div>
  );
}

export default Counter;
