# Takagi Kuga Portfolio

Next.js (App Router) + TypeScript + Tailwind CSS + shadcn/ui で構築した個人ポートフォリオサイトです。  
デザインコンポーネントや動的ルーティング、ページ遷移時のローディング演出を取り入れ、  
インターンや就職活動の際に自分のスキル・作品をまとめて見せられる場として開発しました。

---

## 技術スタック

- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/)
- **Language**: TypeScript
- **UI**: Tailwind CSS, [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: Lucide-react, React-icons (Simple Icons)
- **Hosting**: Vercel

---

## 主な機能 / ページ

- **Home**: 自己紹介
- **About**: 自己紹介 + スキルセット（React-icons で技術ごとのブランドアイコン表示）
- **Works**: 制作物一覧。Next/Image を用いて最適化表示
- **Contact**: UIフォーム（デモ）。shadcn/ui のフォーム構成を活用
- **Sidebar Navigation**: 共通レイアウトでサイドバーを実装
- **Loading Animation**: ページ遷移時に Pac-Man ローディングアニメーションを表示  

---

## 📖 学び・工夫した点

- **UI/UX**  
  - shadcn/ui を使いながら自分なりにカスタマイズ → デザイン再現力・UI構築力を強化
  - ローディングやフェード演出を加え、ユーザー体験を意識

- **Next.js App Router**  
  - サーバーコンポーネントとクライアントコンポーネントを分離  
  - `loading.tsx` を活用して非同期遷移時の UX を改善

- **型安全**  
  - TypeScript で props や Skill 型を定義  

- **パフォーマンス**  
  - 本番環境でもローダーを確実に表示するために `noStore`を適切に利用

---

## ポートフォリオの見方
ブラウザで以下にアクセス
https://my-portfolio-orcin-omega-13.vercel.app/

---


## 今後の改善予定

- Contact ページを実際のメール送信 APIと連携  
- モバイルデザインのさらなる最適化

---


