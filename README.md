# Fork先
https://github.com/laravel/breeze-next

# フロントエンドの技術スタック

プロジェクトのフロントエンド開発には、以下の技術を使用しています。これらは、高いパフォーマンスと使いやすさを提供し、効率的な開発フローを実現するために選択されました。

## 主要なフレームワーク・ライブラリ

- **Next.js**: 静的サイト生成（SSG）とサーバーサイドレンダリング（SSR）を簡単に組み合わせることができるReactのフレームワーク。パフォーマンスの最適化を目的として採用しています。[公式サイト](https://nextjs.org/)
- **React**: コンポーネントベースのUI構築を提供するJavaScriptライブラリ。再利用可能なUIコンポーネントを作成することで開発効率を向上させています。[公式サイト](https://ja.react.dev/)

## UIデザイン

- **TailwindCSS**: ユーティリティファーストのCSSフレームワークで、カスタマイズが容易で、レスポンシブデザインを迅速に実装できます。[公式サイト](https://tailwindcss.com/)
- **Headless UI**: Tailwind CSSと組み合わせて使用するUIコンポーネントライブラリ。アクセシビリティに優れ、スタイルを自由に定義できます。[GitHub](https://github.com/tailwindlabs/headlessui)

## アイコン

- **Heroicons**: 高品質なSVGアイコンを提供するライブラリ。TailwindCSSとの組み合わせで、UIデザインの一貫性を保ちながら利便性を高めています。[GitHub](https://github.com/tailwindlabs/heroicons)

## テストフレームワーク

- **Playwright**: ブラウザー自動化のためのE2Eテストフレームワーク。複数のブラウザでのテストを効率的に実行し、品質保証のプロセスを強化しています。[公式サイト](https://playwright.dev/)

この技術スタックを通じて、使いやすく、パフォーマントで、メンテナンスが容易なフロントエンド環境の構築を目指しています。

# このリポジトリのセットアップ方法

## 1. リポジトリのフォークまたはクローン
フォークまたはクローンを行い、ローカル環境にリポジトリを設定します。

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
```bash
$ npx playwright codegen
```

## Tips

### 指定したテストコードだけ実行したい
https://playwright.dev/docs/api/class-test#test-only

### data-testidは使うべきか？
https://future-architect.github.io/articles/20231128a/
