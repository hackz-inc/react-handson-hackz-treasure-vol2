import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [isStart, setStart] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isStart) return;

    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isStart]);

  return (
    <main className="App">
      <h1>{count}</h1>
      <button onClick={() => setStart((prev) => !prev)}>
        {isStart ? "ストップ" : "スタート"}
      </button>
      <button onClick={() => setCount(0)} disabled={isStart}>
        クリア
      </button>
    </main>
  );
}
