# ハッカソンで使えるReactハンズオン入門編

## はじめに

このリポジトリは[ハックツトレジャーvol2](https://hackz-community.doorkeeper.jp/events/159012) で行われた  
「ハッカソンで使えるReactハンズオン入門編 by 株式会社ハックツ」の資料となります。

環境構築の手間を省くために、[CodeSandbox](https://codesandbox.io/s/react-new)を使用することを想定しています。  
もちろん自分でReactの環境を作成し実行しても構いません。

## 進め方

まずは、[CodeSandbox](https://codesandbox.io/s/react-new)にアクセスします。  
以下のような画面が表示されていたらOKです！

<img width="600" alt="CodeSandboxの初期表示" src="https://github.com/hackz-inc/react-handson-hackz-treasure-vol2/assets/50654077/ae74c5e0-8c6b-46b0-aa67-a74492dda555">

この時点で、すでにReactの環境が整っています！  
今回は、現在表示されている `App.js` ファイルのみを触っていきます！

<img width="600" alt="CodeSandboxのApp.js" src="https://github.com/hackz-inc/react-handson-hackz-treasure-vol2/assets/50654077/e6285c07-9de1-4210-b2e3-27726318d776">

試しに、コードを変更してみましょう！  
[`step0/App.js`](step0/App.js)をコピーして、CodeSandboxに貼り付けてみましょう。

以下のように表示されていたら、OKです！

<img width="600" alt="Hello, Hack'z Treasure!" src="https://github.com/hackz-inc/react-handson-hackz-treasure-vol2/assets/50654077/98132361-5ecb-493e-ad29-4cec722b7e34">

ブラウザ表示の下部を上に上げることでコンソールを見ることもできます！

<img width="600" alt="コンソール表示方法" src="https://github.com/hackz-inc/react-handson-hackz-treasure-vol2/assets/50654077/50d33d62-ca3c-441f-8caf-dc1f8ee93288">

ここまでできたら完璧です！  
では、順次進めていってください！！

※大枠のコードは全て用意していますが、コピペをするより実際に書いた方がより理解が深まるので、あまり分かっていないよという人は是非写経してみてください！

## 【Step1】useStateを使ってみよう その1

`useState`を使うと、要素の表示非表示を制御することができます。  
[`step1/App.js`](step1/App.js)をコピーまたは写経して、どのように動くか見てみましょう！

「開く」ボタンを押したら"Hello"が表示され、  
「閉じる」ボタンを押したら非表示になることが確認できたらOKです！

https://github.com/hackz-inc/react-handson-hackz-treasure-vol2/assets/50654077/7b58558a-d8d1-4a16-a951-36d889ecfad6

## 【Step2】useStateを使ってみよう その2

`useState`の`setState`(更新関数)で、前の値を元に値を更新する場合には引数に関数を挿入します。  
この関数の引数には、現在のステートが入ります。

[`step2/App.js`](step2/App.js)は一つのボタンでダイアログの表示非表示を切り替えるものです。  
コピーまたは写経して、どのように動くか見てみましょう！

「開く」を押したら"Hello"が表示されボタンの文言が変わり、  
「閉じる」を押したらその逆の動きをすることが確認できたらOKです！

<!-- TODO: 動画の埋め込み -->

このように、元のステートを使ってステートを更新する場合には、  
`setState`に関数を入れましょう。

## 【Step3】useStateを使っているコードをリファクタリングしてみよう

次は、`useState`を使ったコードをよりよくしてみましょう！  
`App.js`に[`step3/bad/App.js`](step3/bad/App.js)をコピーして見ましょう。

フォームに数値を更新すると、下に1から入力値までの総和が出力されているのが確認できると思います！

https://github.com/hackz-inc/react-handson-hackz-treasure-vol2/assets/50654077/d942342a-e45f-4000-8e75-75149d581295

しかし、このコードには良くない点があります。  
それは、無駄な`useState`が使われているという点です。

このコードを編集して、1つの`useState`だけで実装してみましょう！

ポイントは、「何の状態を管理したいか」です！

もし、上手くいかない場合には解答例を[`step3/good/App.js`](step3/good/App.js)に置いているので、  
参考にしてみてください！

## 【Step4】useEffectを使ってみよう　その1

ここでは、`useEffect`が**実行されるタイミング**を理解します！

まずは、[`step4/App.js`](step4/App.js)のコードをコピーまたは写経してみましょう！

このコードは、それぞれボタンを押すと上部の数字がカウントアップされていくコードとなります。  
`num1`, `num2`はそれぞれ`useState`で管理してあります。

`useEffect`は、第二引数に入れる値によって実行されるタイミングが変わります。  
タイミングは以下のようになります。

- 空の配列: **初回のみ**
- 配列: **初回と、配列に入っている値が更新された時**
- 何も入れない: **初回と、管理している全ての値が更新された時**

実行された時の出力は`console`にはき出されるので、ボタンを押して動きを確認してみてください！

https://github.com/hackz-inc/react-handson-hackz-treasure-vol2/assets/50654077/814ac643-fff0-405c-b537-eeba0b83a702

**※注意**: React18では`StrictMode`というものが設定されており、開発環境では初回のマウントが2度実行されてしまいます。そのため、初回のタイミングで実行されるものが2度実行されます。  
これは**バグではない**のでご注意ください。  
もし気になる方は、`index.js`を編集し`StrictMode`を削除すれば、1度だけしか動いていないことが確認できます！

## 【Step5】useEffectを使ってみよう　その2

`useEffect`は外部からデータを取得するときに使用されます。  
今回は犬の画像をランダムで取得できるAPIを使って試してみます！

[`step5/App.js`](step5/App.js)のコードをコピーまたは写経してみましょう。  
以下のように画像が表示されていれば成功です！

![犬の画像を取得](https://github.com/hackz-inc/react-handson-hackz-treasure-vol2/assets/50654077/200dee86-20cc-4d1f-a0ed-9b66db0a1790)

**※注意**: このAPIはランダム取得のため、`StrictMode`の影響により画像が一回だけ画像が切り替わるように見えますが、バグではありません。

## 【Step6】useEffectを使ってみよう　その3

## 【Step7】useEffectを使っているコードをリファクタリングしてみよう
