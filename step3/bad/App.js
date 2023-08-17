import { useState } from "react";
import "./styles.css";

export default function App() {
  // 数字を管理するステート
  const [num, setNum] = useState(1);

  // 総和を管理するステート
  const [sum, setSum] = useState(1);

  // ボタンが押された時に実行される関数
  const updateNum = () => {
    setNum(num + 1);
    setSum((num * (num + 1)) / 2);
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
