import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  // 画像のURLを管理するためのステート
  const [imageUrl, setImageUrl] = useState("");

  // アクセス時にデータを取得
  useEffect(() => {
    // useEffectでは非同期関数を扱えないため、即時関数で定義する
    (async () => {
      const res = await fetch("https://dog.ceo/api/breeds/image/random");
      const json = await res.json();

      setImageUrl(json["message"]);
    })();
  }, []);

  return (
    <main className="App">
      <img src={imageUrl} alt="dog" />
    </main>
  );
}
