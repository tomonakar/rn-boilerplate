# RN-boilerplate

## 開発環境構築について

### Requirements

- node <br/>
  node 自体の管理は `nodenv` で行なっていますので導入願います。<br/>
  参考:nodenv : https://github.com/nodenv/nodenv <br/>

  バージョンは `2018/07/10` 現在 LTS の `v8.11.3` を使用しています。<br/>

- パッケージ管理<br/>
  本プロジェクトではパッケージ管理を `yarn` で行います。<br/>
  `npm`は使用しないでください。<br/>
  `brew install yarn` 等で導入をお願いします。

- watchman の導入<br/>
  公式推奨の watchman : https://facebook.github.io/watchman/ を導入願います。<br/>
  `brew install watchman`

- ios<br/>
  Xcode v8 以上をインストール願います。

- android<br/>
  android studio をインストール願います。<br/>
  参考：公式ページ：https://facebook.github.io/react-native/docs/getting-started.html<br/>
- pod<br/>
  `cocoapods` を使用します。インストール願います。
  `brew install cocoapods`

- Debugger<br/>
  redux-devtools-extension：https://github.com/zalmoxisus/redux-devtools-extension を導入しています。<br/>
  Debugger には、react-native-debugger: https://github.com/jhen0409/react-native-debugger を推奨します。<br/>

### Build & Run

```
1. git clone
git clone https://github.com/car-sharing/App.git

2. パッケージの導入
yarn

3. Metro Bundler実行
yarn start

4.シュミレータ起動 (起動スクリプト詳細はpackage.jsonをご確認ください。)

  4.1. iosシュミレータ起動(iPhone X)
  yarn ios-max

  4.2. androidシュミレータ起動
  androidの場合は、事前にシュミレータを起動してから以下のコマンドを実行ください。
  yarn android
```
