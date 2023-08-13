import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  // 第二引数に空配列を入れた場合には、初回のみ実行される
  useEffect(() => {
    console.log("初回のみ表示されます!");
  }, []);

  // 第二引数の配列にnum1を入れた場合には、初回とnum1が更新された時に実行される
  useEffect(() => {
    console.log("num1が変更されました!");
  }, [num1]);

  // 第二引数の配列にnum1とnum2を入れた場合には、初回とnum1またはnum2が更新された時に実行される
  useEffect(() => {
    console.log("num1またはnum2が変更されました!");
  }, [num1, num2]);

  // 第二引数に何も入れない場合には、初回の何かしらの値が更新された時に実行される
  useEffect(() => {
    console.log("値が更新されました!");
    console.log("--------------------------------------");
  });

  return (
    <main className="App">
      <div>
        <h1>num1: {num1}</h1>
        <button onClick={() => setNum1(num1 + 1)}>+</button>
      </div>
      <div>
        <h1>num2: {num2}</h1>
        <button onClick={() => setNum2(num2 + 1)}>+</button>
      </div>
    </main>
  );
}
