import styled from 'styled-components'
import { animatedGradient } from '../styles/AnimatedBackground'
import { motion } from 'framer-motion'

const Page = styled.section`
  ${animatedGradient};
  min-height: 100vh;
  padding: 6rem 1.5rem 4rem;
  color: #fff;
`

const Wrapper = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
`

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`

const Heading = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
  text-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  margin: 0 auto;
`

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const Section = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
    background: rgba(255, 255, 255, 0.15);
  }
`

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #fff;
  font-weight: 600;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &::before {
    content: '◆';
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.8rem;
  }
`

const BadgeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  justify-content: center;
`

const Badge = styled(motion.span)`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  color: #fff;
  padding: 0.6rem 1.2rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
  cursor: default;
  white-space: nowrap;

  &:hover {
    transform: translateY(-3px) scale(1.05);
    background: rgba(255, 255, 255, 0.35);
    box-shadow: 0 8px 25px rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.5);
  }
`

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.05, duration: 0.4 },
  }),
}

export default function Skills() {
  const renderBadges = (badges: string[]) =>
    badges.map((text, i) => (
      <Badge
        key={text}
        variants={badgeVariants}
        initial="hidden"
        whileInView="visible"
        custom={i}
        viewport={{ once: true }}
      >
        {text}
      </Badge>
    ))

  return (
    <Page id="skills">
      <Wrapper
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Header>
          <Heading>スキル & 技術スタック</Heading>
          <Subtitle>
            実務と個人開発を通じて積み上げたスキルセットです
          </Subtitle>
        </Header>

        <SkillsGrid>
          <Section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionTitle>プログラミング言語</SectionTitle>
            <BadgeList>
              {renderBadges(['Java', 'JavaScript', 'TypeScript', 'Python', 'C', 'SQL'])}
            </BadgeList>
          </Section>

          <Section variants={sectionVariants}>
            <SectionTitle>フロントエンド開発</SectionTitle>
            <BadgeList>
              {renderBadges([
                'React',
                'React Router',
                'Vite',
                'Framer Motion',
                'Styled Components',
                'Tailwind CSS',
                'HTML5',
                'CSS3',
                'レスポンシブデザイン',
              ])}
            </BadgeList>
          </Section>

          <Section variants={sectionVariants}>
            <SectionTitle>バックエンド & フレームワーク</SectionTitle>
            <BadgeList>
              {renderBadges([
                'Spring Boot',
                'MyBatis',
                'Node.js',
                'Express',
                'NestJS',
                'Prisma',
                'Axios',
                'REST API',
                'JSP/Servlets',
              ])}
            </BadgeList>
          </Section>

          <Section variants={sectionVariants}>
            <SectionTitle>認証 & セキュリティ</SectionTitle>
            <BadgeList>
              {renderBadges([
                'JWT 認証',
                'セッション管理',
                'OAuth 2.0',
                'Google OAuth',
                'Kakao OAuth',
                'パスワード暗号化',
                'CORS 設定',
              ])}
            </BadgeList>
          </Section>

          <Section variants={sectionVariants}>
            <SectionTitle>データベース & データ管理</SectionTitle>
            <BadgeList>
              {renderBadges([
                'MySQL',
                'PostgreSQL',
                'Supabase',
                'データベース設計',
                'SQL 最適化',
                'DBeaver',
                'データモデリング',
              ])}
            </BadgeList>
          </Section>

          <Section variants={sectionVariants}>
            <SectionTitle>DevOps & デプロイ</SectionTitle>
            <BadgeList>
              {renderBadges([
                'AWS EC2',
                'Vercel',
                'Docker',
                'Linux/Unix',
                'SSH',
                'Tomcat',
                'VMWare',
                'CI/CD 基本',
              ])}
            </BadgeList>
          </Section>

          <Section variants={sectionVariants}>
            <SectionTitle>設計思想 & パターン</SectionTitle>
            <BadgeList>
              {renderBadges([
                'MVC アーキテクチャ',
                'DTO パターン',
                'レイヤードアーキテクチャ',
                'RESTful 設計',
                'グローバル例外処理',
                'サービス層パターン',
                'リポジトリパターン',
              ])}
            </BadgeList>
          </Section>

          <Section variants={sectionVariants}>
            <SectionTitle>開発ツール</SectionTitle>
            <BadgeList>
              {renderBadges([
                'Git & GitHub',
                'VS Code',
                'IntelliJ IDEA',
                'Postman',
                'Swagger',
                'npm/yarn',
                'Maven',
                'Chrome DevTools',
              ])}
            </BadgeList>
          </Section>

          <Section variants={sectionVariants}>
            <SectionTitle>テスト & 品質保証</SectionTitle>
            <BadgeList>
              {renderBadges([
                'ユニットテスト',
                'API テスト',
                'デバッグ',
                'コードレビュー',
                'パフォーマンス最適化',
                'エラーハンドリング',
              ])}
            </BadgeList>
          </Section>

          <Section variants={sectionVariants}>
            <SectionTitle>ソフトスキル & 言語</SectionTitle>
            <BadgeList>
              {renderBadges([
                '英語（流暢）',
                '日本語（JLPT N1）',
                '韓国語（母語）',
                '技術ライティング',
                '問題解決力',
                'チーム協力',
                '自主学習',
                'アジャイルマインドセット',
              ])}
            </BadgeList>
          </Section>

          <Section variants={sectionVariants}>
            <SectionTitle>現在学習中</SectionTitle>
            <BadgeList>
              {renderBadges([
                'Kubernetes',
                'Redis',
                'GraphQL',
                'マイクロサービス',
                'TypeScript 応用',
                'クラウドアーキテクチャ',
              ])}
            </BadgeList>
          </Section>

          <Section variants={sectionVariants}>
            <SectionTitle>資格・認定</SectionTitle>
            <BadgeList>
              {renderBadges(['JLPT N1 (2024.07)', 'IELTS 7.5 (2019.11)'])}
            </BadgeList>
          </Section>
        </SkillsGrid>
      </Wrapper>
    </Page>
  )
}
