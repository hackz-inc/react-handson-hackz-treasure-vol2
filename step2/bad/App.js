import { useState } from "react";
import "./styles.css";

export default function App() {
  // 入力値を管理するステート
  const [input, setInput] = useState(1);

  // 総和を管理するステート
  const [sum, setSum] = useState(1);

  // 入力値が変更された時に実行される関数
  const onChange = (event) => {
    const value = Number(event.target.value);
    setInput(value);
    setSum((value * (value + 1)) / 2);
  };

  return (
    <main className="App">
      <form>
        <label>
          数字を入力してね！
          <input value={input} onChange={onChange} type="number" min={1} />
        </label>
      </form>
      <h1>
        1から{input}までの総和は、{sum}です！
      </h1>
    </main>
  );
}
