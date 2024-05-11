# このリポジトリの作り方

## 1. リポジトリのフォークまたはクローン
フォークまたはクローンを行い、ローカル環境にリポジトリを設定します。[フォーク先](https://github.com/laravel/breeze-next)

## 2. 環境設定ファイル
`.env.example` ファイルを `.env` にリネームし、必要な環境変数を設定します。例えば、`NEXT_PUBLIC_BACKEND_URL=http://localhost:8000` を記載します。

## 3. Nodeのバージョン設定
特定のNodeのバージョンが必要な場合は、適切なバージョンに設定してください。設定方法の詳細は [こちら](https://github.com/Yasshi-cookie/link-minimizer-front/commit/a301bff18bffdf635a81b755e73afe08875e96ce) を参照してください。

## 4. ファイル拡張子の変更
JavaScriptファイルの拡張子を `.js` から `.jsx` に変更します。以下のコマンドを使用して、srcディレクトリ内の全ファイルを一括で変更できます。

### Tips（ファイルの拡張子を一括で変更する）
renameコマンドを使います。（MacOSの場合はインストールする必要があります。brewコマンドでインストールしてください。`$ brew install rename`）

下記でsrc/ディレクトリの全ての.js拡張子を持つファイルの拡張子を、.jsxに変更します。
```bash
$ find src/ -type f -name '*.js' -exec rename 's/\.js$/.jsx/' {} +
```
補足：`{}`はfindによって見つかったファイル名に置き換えられます。`+`は見つかったすべてのファイルに対してコマンドを一度に実行することを意味します。

5. Playwrightの設定
VSCodeの拡張機能「ms-playwright.playwright」をインストールし、[公式ドキュメント](https://playwright.dev/docs/intro)を参考にしてPlaywrightをセットアップします。詳細な設定手順は [こちら](https://github.com/Yasshi-cookie/link-minimizer-front/commit/ec680bb917bb24bc0d7808d22f82c2bf8d12412d) を参照してください。
