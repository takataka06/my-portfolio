# My Portfolio

## この作品を作ろうと思ったきっかけ

長期インターンを探していく上で手軽に自分のスキル・作品などをアピールできるサイトがあれば便利ではないかと考え、作成しました。
また、同時並行でreactやnext.jsなどフロントエンドの勉強もしていたので知識のアウトプットとしても活用しました。

---

## 技術スタック

- **フレームワーク**: [Next.js 15 (App Router)](https://nextjs.org/)
- **ライブラリ**: react 19.1.0
- **言語**: TypeScript
- **UI**: Tailwind CSS, [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: Lucide-react, React-icons (Simple Icons)
- **デプロイ**: Vercel

---

## 主な機能 / ページ

- **Home**: 自己紹介
- **About**: 自己紹介 + スキルセット（React-icons で技術ごとのブランドアイコン表示）
- **Works**: 制作物一覧。Next/Image を用いて最適化表示
- **Contact**: UIフォーム（デモ）。shadcn/ui のフォーム構成を活用
- **Sidebar Navigation**: 共通レイアウトでサイドバーを実装
- **Loading Animation**: ページ遷移時に Pac-Man ローディングアニメーションを表示  

---

## 学び・工夫した点

- **UI/UX**  
  - shadcn/ui を使いながら自分なりにカスタマイズしデザイン再現力・UI構築力を強化
  - ローディングやフェード演出を加え、ユーザー体験を意識

- **Next.js App Router**  
  - サーバーコンポーネントとクライアントコンポーネントを分離  
  - `loading.tsx` を活用して非同期遷移時の UX を改善

- **型安全**  
  - TypeScript で props や Skill 型を定義

- **パフォーマンス**  
  - 本番環境でもローダーを確実に表示するために `noStore`を適切に利用。
 
- **AIツールの活用**
  - 開発を進めていく上でデザイン、フォルダ構成などをChatgpt、Github Copilotを活用し効率性を加速させた。
---


## サイトの見方
ブラウザで以下にアクセス
https://my-portfolio-orcin-omega-13.vercel.app/

---


## 今後の改善予定

- Contact ページを実際のメール送信をAPIかuse serverで連携  
- レスポンシブ対応のさらなる最適化
- 成果物を増やしMy worksに追加していく。
- リファクタリングをして見やすいコードに

---


