import { useState } from "react";
import "./styles.css";

export default function App() {
  // 数字を管理するステート
  const [num, setNum] = useState(1);

  // 数字から総和を算出
  const sum = (num * (num + 1)) / 2;

  // ボタンが押された時に実行される関数
  const updateNum = () => {
    setNum((prevNum) => prevNum + 1);
  };

  return (
    <main className="App">
      <h1>
        1から{num}までの総和は、{sum}です！
      </h1>
      <button onClick={updateNum}>+</button>
    </main>
  );
}
