# komaru-corp-a11y

a11y を学習するために作成された、架空の Web 制作会社のサイトです。

- bad ブランチ：[a11y 改善前のサイト](https://sititou70.github.io/komaru-corp-a11y/bad/)
- enhanced ブランチ：[a11y 改善後のサイト](https://sititou70.github.io/komaru-corp-a11y/enhanced/)

## セットアップ

ランタイム：

- Node.js (24.16.0)
- pnpm (11.4.0)

```sh
cd komaru-corp-a11y
pnpm i
```

### VS Code を使用する場合

リポジトリルートでエディタを起動します。（`.vscode/settings.json`にある推奨設定が適用されます）

```sh
cd komaru-corp-a11y
code .
```

「Extensions > Recommended」から、リポジトリで推奨されているという表示のある拡張機能をすべてインストールします。

## 起動

```sh
cd komaru-corp-a11y
pnpm dev
```

## テスト

```sh
pnpm exec playwright install chromium --with-deps # 初回のみ
pnpm test
```

## フリー画像の出典

- https://www.pakutaso.com/20180222040post-15149.html
- https://publicdomainvectors.org/en/free-clipart/AIGA-right-arrow-sign-vector-image/17781.html
- https://www.pakutaso.com/20221205339post-44082.html
- https://www.pakutaso.com/20230255058post-45545.html
- https://www.pakutaso.com/20180340067post-15494.html
- https://www.pakutaso.com/20190258049post-19622.html
