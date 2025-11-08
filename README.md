# 🌸 開発者ポートフォリオ — Sunmyung Woo

<div align="center">

[![ライブデモ](https://img.shields.io/badge/🌐_ライブデモ-サイトを見る-667eea?style=for-the-badge)](https://self-introduction-i11.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-murasakijyuutann-181717?style=for-the-badge&logo=github)](https://github.com/murasakijyuutann)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-接続する-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/sunmyung-woo-44b175221/)

**React、Spring Boot、およびクラウド技術における3年以上の経験を紹介するモダンなフルスタック開発者ポートフォリオ。**

[特徴](#-特徴) • [技術スタック](#-技術スタック) • [はじめに](#-はじめに) • [プロジェクト](#-注目プロジェクト) • [連絡先](#-連絡先)

---

</div>

## 📋 概要

このポートフォリオは、モダンなWeb技術で構築された**本番環境対応のReactアプリケーション**であり、以下の専門知識を実証しています：

- TypeScriptとコンポーネントベース設計によるフロントエンドアーキテクチャ
- アニメーションとレスポンシブレイアウトによる高度なUI/UX
- サードパーティサービス（EmailJS）との統合
- クラウドデプロイメントとCI/CDプラクティス

このサイトは、**プロフェッショナルな履歴書**と**技術ショーケース**の両方として機能し、オーストラリアでのシステム管理の学習からフルスタック開発の役割、そして現在の日本でのソフトウェアエンジニアリングキャリアの準備までの私の歩みを紹介しています。

---

## ✨ 特徴

### 🎨 **モダンなUI/UX**
- グラスモーフィックデザイン要素を使用したアニメーショングラデーション背景
- Framer Motionを使用したスムーズなページトランジション
- モバイル、タブレット、デスクトップ向けに最適化されたレスポンシブレイアウト
- アクティブリンクハイライトを備えたアクセシビリティ対応ナビゲーション

### 🚀 **インタラクティブなセクション**
- **ヒーローセクション**: ソーシャルメディア統合を備えた動的なタイプライター効果
- **キャリアタイムライン**: キャリア進捗を示す交互配置のカードレイアウト
- **スキルショーケース**: 80以上のスキルを含むカテゴリ別技術グリッド
- **プロジェクトポートフォリオ**: 説明とリンクを含むプロフェッショナルなプロジェクトカード
- **連絡フォーム**: バリデーション機能を備えたEmailJS駆動の連絡システム

### 🎮 **ボーナス機能**
- **チンチロリンゲーム**: Reactで構築されたインタラクティブな日本のサイコロゲーム
  - リアルタイムゲームロジックとスコアリングシステム
  - Howler.jsを使用したサウンドエフェクト
  - スムーズなアニメーションと状態管理
  - モバイルレスポンシブコントロール

---

## 🛠 技術スタック

### **フロントエンド**
![React](https://img.shields.io/badge/React_19-20232A?style=flat&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![Styled Components](https://img.shields.io/badge/Styled_Components-DB7093?style=flat&logo=styled-components&logoColor=white)

### **ライブラリ & ツール**
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat&logo=framer&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=react-router&logoColor=white)
![EmailJS](https://img.shields.io/badge/EmailJS-4285F4?style=flat&logo=gmail&logoColor=white)
![React Icons](https://img.shields.io/badge/React_Icons-E91E63?style=flat&logo=react&logoColor=white)

### **デプロイメント & CI/CD**
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)

---

## 🗂 プロジェクト構造

```
my/
├── public/
│   └── images/              # 静的アセット（プロフィール写真、プロジェクト画像）
├── src/
│   ├── components/
│   │   ├── Navbar.tsx       # ハンバーガーメニュー付きレスポンシブナビゲーション
│   │   └── Footer.tsx       # ソーシャルリンクと著作権表示
│   ├── pages/
│   │   ├── Home.tsx         # 統計情報とハイライトを含むヒーローセクション
│   │   ├── About.tsx        # 個人的な背景とストーリー
│   │   ├── Journey.tsx      # アイコンと場所を含むキャリアタイムライン
│   │   ├── Skills.tsx       # カテゴリ別技術グリッド
│   │   ├── Projects.tsx     # ポートフォリオショーケース
│   │   ├── Chinchiro.tsx    # インタラクティブサイコロゲーム
│   │   └── Contact.tsx      # EmailJS連絡フォーム
│   ├── styles/
│   │   └── AnimatedBackground.ts  # 共有グラデーションアニメーション
│   ├── App.tsx              # メインルーターとレイアウト
│   ├── main.tsx             # アプリケーションエントリーポイント
│   └── index.css            # グローバルスタイル
├── package.json
├── tsconfig.json
├── vite.config.ts
└── vercel.json              # デプロイメント設定
```

---

## 🚀 はじめに

### 前提条件
- **Node.js** 18+ および **npm** 9+
- バージョン管理用の **Git**

### インストール

**1. リポジトリをクローン**
```bash
git clone https://github.com/murasakijyuutann/self_introduction.git
cd self_introduction/my
```

**2. 依存関係をインストール**
```bash
npm install
```

**3. 環境変数を設定**（オプション、連絡フォーム用）

ルートディレクトリに `.env` ファイルを作成：
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> EmailJSの認証情報は [emailjs.com](https://www.emailjs.com/) で取得してください

**4. 開発サーバーを起動**
```bash
npm run dev
```

ブラウザで [http://localhost:5173](http://localhost:5173) を開きます

**5. 本番環境用にビルド**
```bash
npm run build
npm run preview  # 本番ビルドをローカルでプレビュー
```

---

## 📦 主な依存関係

| パッケージ | バージョン | 用途 |
|---------|---------|---------|
| `react` | ^19.1.1 | UIフレームワーク |
| `typescript` | ~5.9.3 | 型安全性 |
| `vite` | ^7.1.7 | ビルドツールと開発サーバー |
| `styled-components` | ^6.1.19 | CSS-in-JSスタイリング |
| `framer-motion` | ^12.23.24 | アニメーションライブラリ |
| `react-router-dom` | ^7.9.4 | クライアントサイドルーティング |
| `@emailjs/browser` | ^4.4.1 | 連絡フォームバックエンド |
| `react-simple-typewriter` | ^5.0.1 | タイプライター効果 |
| `howler` | ^2.2.4 | オーディオ再生 |
| `react-icons` | ^5.5.0 | アイコンライブラリ |

---

## 🎯 注目プロジェクト

<table>
  <tr>
    <td width="50%">
      <h3>🎬 Movie Explorer</h3>
      <p><strong>説明:</strong> 無限スクロールページネーションと完全レスポンシブデザインを備えたTMDB駆動の検索アプリケーション。</p>
      <p><strong>技術:</strong> React • Tailwind CSS • TMDB API</p>
      <p><a href="https://github.com/murasakijyuutann/movie-review-project">リポジトリを見る →</a></p>
    </td>
    <td width="50%">
      <h3>📋 Spring Boot Board</h3>
      <p><strong>説明:</strong> ロールベースアクセス制御とSwagger APIドキュメントを備えたトークン認証バックエンドシステム。</p>
      <p><strong>技術:</strong> Spring Boot • MyBatis • JWT • Swagger</p>
      <p><a href="https://github.com/murasakijyuutann/spring_boot_board">リポジトリを見る →</a></p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3>🎧 Vocaloid Shopping Mall</h3>
      <p><strong>説明:</strong> ユーザー認証、商品カタログ、ショッピングカート、注文処理機能を備えたフルスタックECプラットフォーム。</p>
      <p><strong>技術:</strong> React • TypeScript • Spring Boot • MySQL</p>
      <p><a href="https://github.com/murasakijyuutann/vocaloidshop-fullstack">リポジトリを見る →</a></p>
    </td>
    <td width="50%">
      <h3>🚌 公共交通決済システム</h3>
      <p><strong>説明:</strong> カード管理、運賃計算、AWSインフラを使用した取引処理機能を備えた決済システムAPI。</p>
      <p><strong>技術:</strong> Spring Boot • Thymeleaf • Bootstrap • AWS RDS</p>
      <p><a href="https://github.com/murasakijyuutann/public-transport-system">リポジトリを見る →</a></p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3>🎲 チンチロリンゲーム</h3>
      <p><strong>説明:</strong> スムーズなアニメーションとサウンドエフェクトを備えた伝統的な日本のサイコロゲームのインタラクティブな再現。</p>
      <p><strong>技術:</strong> React • Framer Motion • Howler.js</p>
      <p><a href="https://github.com/murasakijyuutann/self_introduction/blob/main/src/pages/Chinchiro.tsx">コードを見る →</a></p>
    </td>
    <td width="50%">
      <h3>🌐 このポートフォリオ</h3>
      <p><strong>説明:</strong> レスポンシブデザイン、インタラクティブなセクション、スキルと経験のプロフェッショナルなプレゼンテーションを備えたモダンなポートフォリオサイト。</p>
      <p><strong>技術:</strong> React • TypeScript • Styled Components • Vercel</p>
      <p><a href="https://self-introduction-i11.vercel.app/">ライブデモを見る →</a></p>
    </td>
  </tr>
</table>

---

## 🌍 デプロイメント

このプロジェクトは **Vercel** にデプロイされており、mainブランチからの自動デプロイメントが設定されています。

### 手動デプロイメント
```bash
# Vercel CLIをインストール
npm i -g vercel

# デプロイ
vercel --prod
```

### 環境設定
`vercel.json` ファイルには、React Routerをサポートするためのルーティング設定が含まれています：
```json
{
  "rewrites": [{
    "source": "/((?!images/).*)",
    "destination": "/index.html"
  }]
}
```

---

## 🗺 ロードマップ

### 短期目標
- [ ] ダークモードトグルを追加
- [ ] 技術別プロジェクトフィルタリングを実装
- [ ] 履歴書/CVダウンロードボタンを追加
- [ ] ポートフォリオカードにプロジェクトのスクリーンショットを含める

### 中期目標
- [ ] MDXサポート付きブログセクションを統合
- [ ] 日本語言語トグルを追加（日本語版）
- [ ] 動的コンテンツ用のSpring Bootバックエンドを実装
- [ ] プロジェクト管理用の管理パネルを作成

### 長期ビジョン
- [ ] SSR/SSGの利点のためにNext.jsに移行
- [ ] 分析ダッシュボードを追加
- [ ] リアルタイムチャット機能を実装
- [ ] カスタムドメインとSSL（Route 53 + CloudFront）

---

## 📫 連絡先

**Sunmyung Woo** — フルスタック開発者

- 📧 Email: [neneke.emu@gmail.com](mailto:neneke.emu@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/sunmyung-woo-44b175221](https://www.linkedin.com/in/sunmyung-woo-44b175221/)
- 🐙 GitHub: [github.com/murasakijyuutann](https://github.com/murasakijyuutann)
- 📝 Qiita: [qiita.com/murasakijyuutann](https://qiita.com/murasakijyuutann)

---

## 📄 ライセンス

このプロジェクトはオープンソースであり、[MITライセンス](LICENSE)の下で利用可能です。

---

## 🙏 謝辞

- モダンなポートフォリオトレンドからのデザインインスピレーション
- グラスモーフィズムデザイン原則からインスパイアされたグラデーションアニメーション
- 日本の伝統的なギャンブル文化からのチンチロリンゲームルール
- [React Icons](https://react-icons.github.io/react-icons/)によるアイコン提供
- [Vercel](https://vercel.com/)によるデプロイメント支援

---

<div align="center">

**⭐ このポートフォリオが役立つと思ったら、スターを付けていただけると嬉しいです！**

Made with ❤️ by Sunmyung Woo | 2025

</div>
