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

# セットアップ方法

このセクションでは、この Next.js プロジェクトをローカル環境でセットアップするための手順を説明します。以下のステップに従ってください。

## 前提条件

このプロジェクトを実行する前に、以下のツールがシステムにインストールされていることを確認してください：

- Node.js: プロジェクトの実行環境。推奨されるバージョンは `.node-version` ファイルに記載のものを使用してください。
- npm (Node.jsに付属) または Yarn: パッケージマネージャー。

## 依存関係のインストール

プロジェクトのディレクトリに移動した後、次のコマンドを実行して必要な依存関係をインストールします：

``` bash
$ npm install
# または
$ yarn install
```

## 環境変数の設定

プロジェクトには、適切に機能するためにいくつかの環境変数が必要です。サンプルの環境設定ファイル .env.example を .env にコピーし、必要に応じて内容を編集してください：

```bash
$ cp .env.example .env
```

## 開発サーバーの起動

すべてのセットアップが完了したら、開発サーバーを起動します：

```bash
$ npm run dev
# または
$ yarn dev
```

これで、ブラウザで http://localhost:3000 にアクセスすると、開発中のアプリケーションを見ることができます。

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
