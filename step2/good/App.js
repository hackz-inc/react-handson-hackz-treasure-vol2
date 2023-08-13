import { useState } from "react";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState(1);
  const sum = (input * (input + 1)) / 2;

  const onChange = (event) => {
    const value = Number(event.target.value);
    setInput(value);
  };

  return (
    <main className="App">
      <form>
        <label>
          数字を入力してね！
          <input
            value={input}
            onChange={onChange}
            type="number"
            defaultValue={1}
            min={1}
          />
        </label>
      </form>
      <h1>
        1から{input}までの総和は、{sum}です！
      </h1>
    </main>
  );
}
