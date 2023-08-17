import { useState } from "react";
import "./styles.css";

export default function App() {
  // ダイアログが開いているか閉じているかの状態を制御
  const [isOpen, setOpen] = useState(false);

  // ダイアログの開閉を逆にする関数
  const toggleOpen = () => {
    setOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <main className="App">
      <button onClick={toggleOpen}>{isOpen ? "閉じる" : "開く"}</button>
      <dialog open={isOpen}>Hello</dialog>
    </main>
  );
}
