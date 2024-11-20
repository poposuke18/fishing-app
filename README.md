# 🎣 Fishing App

釣りをもっと楽しく、もっと便利に。天候チェックから釣果記録まで、必要な情報をこのアプリ1つで管理できます。

## 🌟 機能

- **天候・潮汐情報連動**: 地域ごとの天候や潮の満ち引き情報をリアルタイムで表示
- **釣りスポット情報**: 人気の釣り場所と最新の釣果情報を共有
- **魚種図鑑**: 季節ごとの魚の特徴と釣り方ガイド
- **釣果記録**: 釣果の記録と共有機能
- **基礎知識**: 初心者から上級者まで役立つ情報を提供

## 🛠 技術スタック

- **フロントエンド**: React + TypeScript + Vite
- **スタイリング**: Tailwind CSS
- **UI部品**: 
  - カスタムコンポーネント（Button, Card）
  - アイコン: Lucide React
- **状態管理**: React Hooks
- **パフォーマンス最適化**: React.memo, useMemo, useCallback
- **型安全性**: TypeScript strict mode

## 📁 現在のファイル構成

```
fishing-app/
├── src/
│   ├── components/
│   │   └── ui/
│   │       ├── button.tsx
│   │       └── card.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── pages/
│   │   └── Home.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── public/
│   └── images/
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🚀 開発開始方法

1. リポジトリのクローン:
```bash
git clone https://github.com/poposuke18/fishing-app.git
```

2. 依存関係のインストール:
```bash
cd fishing-app
npm install
```

3. 開発サーバーの起動:
```bash
npm run dev
```

4. ブラウザで以下のURLにアクセス:
```
http://localhost:5173
```

## 📱 実装済み機能

### ホーム画面
- モダンなヒーローセクション
- 機能紹介カード
- レスポンシブデザイン
- インタラクティブなボタン

## 🛠 今後の実装予定

- [ ] ナビゲーションバーの追加
- [ ] 天候・潮汐情報ページ
- [ ] 釣りスポットマップ
- [ ] 釣果記録機能
- [ ] ユーザー認証
- [ ] データベース連携

## 🤝 コントリビューション

プルリクエストは大歓迎です。大きな変更の場合は、まずissueを開いて変更内容を議論しましょう。

## 📝 ライセンス

[MIT](https://choosealicense.com/licenses/mit/)

## 👥 開発チーム

- Frontend Developer: @poposuke18

## 📞 サポート

問題や提案がある場合は、GitHubのissueを開いてください。