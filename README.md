# 🌸 自己紹介 / 開発者ポートフォリオ — *Fishyboyxx*

**React + Vite + TypeScript + Styled Components**で構築された個人開発者ポートフォリオです。スムーズなアニメーション、バイリンガル対応のセクション、そして**初音ミクのミント×ピンクカラーパレット**にインスパイアされたクリーンでモダンなUIが特徴です。  
このサイトでは、私の歩み、スキル、プロジェクトを紹介し、プロダクションレベルのReactアプリケーションを設計・構築・デプロイする能力を実証しています。

---

## 🌐 ライブデモ
> [https://self-introduction-jp.vercel.app/](https://self-introduction-jp.vercel.app/)

---

## 🧭 概要

このポートフォリオは、**自己紹介**と**インタラクティブな履歴書**の両方として機能し、モダンなフロントエンドツールの実用的な使用法を実証しています。  
各セクションは、バックエンド統合からUI設計まで、開発者としての私の成長の一部を表しています。

### ✨ 特徴
- 🎨 レスポンシブレイアウトを備えた**ミクテーマのグラデーション**美学  
- 🪶 滑らかな視覚的トランジションのための**Framer Motionアニメーション**  
- 🧠 スケーラビリティとクリーンな設計のための**再利用可能なスタイルコンポーネント**  
- 🧩 Reactで構築された**インタラクティブなチンチロリンゲーム**（ミニプロジェクトショーケース）  
- 💬 直接コミュニケーションのための**EmailJS連絡フォーム**  
- 🌎 **バイリンガル対応レイアウト**（英語、日本語拡張可能）  
- 🔗 **アクティブナビゲーションハイライト**とアクセシビリティに配慮したマークアップ

---

## 🧱 技術スタック

| カテゴリ | ツール & フレームワーク |
|-----------|--------------------|
| **フロントエンド** | React (Vite)、TypeScript、Styled Components、Framer Motion |
| **バックエンド (将来の拡張用)** | Spring Boot · MyBatis · Node.js · Express |
| **ユーティリティ** | EmailJS、Axios、Postman、Swagger |
| **クラウド / デプロイ** | AWS EC2、Vercel |
| **デザイン** | Tailwind (レガシーセクション)、カスタムグラデーション |
| **バージョン管理** | Git、GitHub |

---

## 🗂️ プロジェクト構造

```
src/
┣ components/
┃ ┣ Navbar.tsx # アクティブリンクハイライト付きレスポンシブナビゲーションバー
┃ ┣ Home.tsx # タイプライター風イントロ付きヒーローセクション
┃ ┣ About.tsx # 自己紹介とキャリア目標
┃ ┣ Journey.tsx # 学習とキャリアの進捗タイムライン
┃ ┣ Skills.tsx # モーションエフェクト付きカテゴリ別スキルバッジ
┃ ┣ Projects.tsx # GitHubリンク付きポートフォリオショーケース
┃ ┣ Chinchiro.tsx # ミニReactダイスゲーム（文化×技術コンセプト）
┃ ┣ Contact.tsx # EmailJS統合メールフォーム
┃ ┗ Footer.tsx # ソーシャルアイコン + タグライン
┣ styles/
┃ ┗ AnimatedBackground.ts # 共有グラデーションアニメーション
┣ App.tsx
┗ main.tsx
```

---

# 🚀 はじめに

## 💻 セットアップ & ローカル実行

### 🧩 ステップ 1. リポジトリをクローン

```bash
git clone https://github.com/yourusername/self-intro-portfolio.git
cd self-intro-portfolio
```

### ⚙️ ステップ 2. 依存関係をインストール

```bash
npm install
```

### 🔐 ステップ 3. EmailJS環境変数を設定

プロジェクトルートに `.env` ファイルを作成し、以下を追加します：

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 🚀 ステップ 4. 開発サーバーを起動
```bash
npm run dev
```

その後、ブラウザで 👉 http://localhost:5173 を開きます。

---

## 💼 注目プロジェクト

| プロジェクト | 説明 | 技術スタック |
|----------|--------------|------------|
| 🎬 Movie Explorer | 無限スクロール & レスポンシブUIを備えたTMDB API駆動のReactアプリ | React · Tailwind CSS · TMDB API |
| 📋 Spring Boot Board | DTO、Swagger UI、ロールアクセス制御を備えたトークン認証バックエンド | Spring Boot · MyBatis · JWT |
| 🛍 JSP Shopping Mall | ログイン & カートシステムを備えたJSP/Servletベースのeコマースプロトタイプ | JSP · JSTL · Tomcat |
| ☁️ EC2 Todo App | Supabase OAuthログインを備えたAWS EC2にデプロイされたフルスタックアプリ | React · NestJS · Prisma |
| 🎧 Vocaloid DAO Simulator | VocaloidキャラクターをテーマにしたJava OOPコレクションプロジェクト | Java · DAOパターン |
| 🎲 Chinchirorin Game | サウンド & モーション付き伝統的な日本のダイスゲームリメイク | React · Framer Motion · Howler.js |

---

## 📫 連絡先

お問い合わせやコラボレーションをご希望の場合：

| プラットフォーム | リンク |
|-----------|------|
| 💌 **Email** | [fishyboyxx@protonmail.com](mailto:fishyboyxx@protonmail.com) |
| 🐙 **GitHub** | [github.com/murasakijyuutann](https://github.com/murasakijyuutann) |
| 💼 **LinkedIn** | [linkedin.com/in/sunmyung-woo-44b175221/](https://www.linkedin.com/in/sunmyung-woo-44b175221/e) |
| 🧠 **Qiita** | [qiita.com/murasakijyuutann](https://qiita.com/murasakijyuutann) |

---

## 🧩 哲学

> **「コードは私の言語。文化は私の架け橋。」**  
> このポートフォリオは、私が構築するすべてのプロジェクトにおいて、  
> 技術的スキル、創造性、異文化理解を融合させるという使命を反映しています。

---

## 🛠️ 今後の計画

- 🇯🇵 **日本語版ページ**トグルを追加  
- 🔗 動的なプロジェクト更新のための**Spring Boot APIバックエンド**を統合  
- 🌗 アクセシビリティのための**ダークモード**トグルを追加  
- ☁️ **Vercel + AWS Route 53**カスタムドメインでデプロイ  

---

## 🧾 ライセンス

このプロジェクトは**MITライセンス**の下でオープンソースです。  
自由に**フォーク**、**修正**、**適応**してご利用ください。

---

## 💬 最後に

> このポートフォリオは、**Farah Sinclair (Fishyboyxx)**によって設計・構築され、  
> *実務経験3年レベルの開発者*のフルスタックスキルセットを表現しています。  
> ご訪問ありがとうございます！ 🌸
