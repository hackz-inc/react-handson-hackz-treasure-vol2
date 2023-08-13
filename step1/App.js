import { useState } from "react";
import "./styles.css";

export default function App() {
  // ダイアログが開いているか閉じているかの状態を制御
  const [isOpen, setOpen] = useState(false);

  // ダイアログを開く処理
  const open = () => setOpen(true);

  // ダイアログを閉じる処理
  const close = () => setOpen(false);

  return (
    <main className="App">
      <button onClick={open}>開く</button>
      <button onClick={close}>閉じる</button>
      <dialog open={isOpen}>Hello</dialog>
    </main>
  );
}
