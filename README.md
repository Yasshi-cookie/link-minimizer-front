# Fork先
https://github.com/laravel/breeze-next

# このリポジトリの作り方
## ①上記のリポジトリをforkまたはclone

## ②env
.env.exampleを.env.localにリネームして、「NEXT_PUBLIC_BACKEND_URL=http://localhost:8000」を記載する

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
