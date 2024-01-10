# Fork先
https://github.com/laravel/breeze-next

# このリポジトリの作り方
## ①上記のリポジトリをforkまたはclone

## ②env
.env.exampleを.envにリネームして、「NEXT_PUBLIC_BACKEND_URL=http://localhost:8000」を記載する

## ③nodeのバージョンを設定
参考：https://github.com/Yasshi-cookie/link-minimizer-front/commit/a301bff18bffdf635a81b755e73afe08875e96ce

## ④拡張子を.jsから.jsxに変更
参考：https://github.com/Yasshi-cookie/link-minimizer-front/commit/a20642043d1e3079e0f583d339ed6d17d9f794c1

### Tips（ファイルの拡張子を一括で変更する）
renameコマンドを使います。（MacOSの場合はインストールする必要があります。brewコマンドでインストールしてください。`$ brew install rename`）

下記でsrc/ディレクトリの全ての.js拡張子を持つファイルの拡張子を、.jsxに変更します。
```bash
$ find src/ -type f -name '*.js' -exec rename 's/\.js$/.jsx/' {} +
```
補足：`{}`はfindによって見つかったファイル名に置き換えられます。`+`は見つかったすべてのファイルに対してコマンドを一度に実行することを意味します。

## ⑤Playwrightの設定
・VSCodeの拡張機能「ms-playwright.playwright」をインストールします。
・[公式ドキュメント](https://playwright.dev/docs/intro)を参考にしてplaywightをインストールします。
・Playwrightの設定：参考 → https://github.com/Yasshi-cookie/link-minimizer-front/commit/ec680bb917bb24bc0d7808d22f82c2bf8d12412d

### Tips
- data-testidは使うべきか？
  - https://future-architect.github.io/articles/20231128a/


# Playwrightの使い方
## テストの実行&テストレポートの出力
```bash
# テスト実行コマンド
$ npx playwright test # ヘッドレスモード（ブラウザを起動しない）で実行
$ npx playwright test --headed # ヘッドモードで実行
$ npx playwright test --ui # 特別なUIを起動して実行

# テストレポート出力
$ npx playwright show-report # 直前のテスト結果をブラウザで表示
```

## デバッグモード
以下の2つの方法があります。
詳細は公式ページを参照：https://playwright.dev/docs/debug

1. [VSCODEの拡張機能-Playwright Test for VSCode](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)を使う方法
2. コマンド（デバッグモード（ステップバイステップでテストを実行可能）で実行）
```bash
$ npx playwright test --debug
```

## テストコード自動生成機能（CodeGen）

## Tips
### 指定したテストコードだけ実行したい
https://playwright.dev/docs/api/class-test#test-only
