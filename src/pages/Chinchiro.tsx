import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { animatedGradient } from '../styles/AnimatedBackground'
import { motion } from 'framer-motion'
import { FaDice, FaGlassWhiskey, FaInfoCircle } from 'react-icons/fa'
import { Howl } from 'howler'

// 🎵 ダイスロール音
const rollSound = new Howl({
  src: ['https://cdn.pixabay.com/audio/2022/03/15/audio_48a4c74b10.mp3'],
  volume: 0.3,
})

// 💫 フェードインアニメーション
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

// 🎲 ダイス回転アニメーション
const rollAnimation = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(90deg) scale(1.1); }
  50% { transform: rotate(180deg) scale(0.9); }
  75% { transform: rotate(270deg) scale(1.1); }
  100% { transform: rotate(360deg); }
`

// 💅 Styled Components
const Wrapper = styled.div`
  min-height: 100vh;
  ${animatedGradient};
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  text-align: center;
  padding: 2rem 1rem;
`

const GameCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 2.5rem;
  max-width: 700px;
  width: 100%;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: ${fadeIn} 0.6s ease;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const Intro = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 1.5rem;
  line-height: 1.5;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`

const RulesBox = styled.details`
  background: rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1rem;
  margin: 1rem 0;
  text-align: left;
  cursor: pointer;
  
  summary {
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    user-select: none;
  }
  
  ul {
    margin-top: 0.5rem;
    padding-left: 1.5rem;
    font-size: 0.9rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.8);
  }
`

const SectionTitle = styled.h2`
  font-size: 1.3rem;
  margin: 1.5rem 0 0.8rem;
  opacity: 0.9;
  font-weight: 600;
`

const DiceArea = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin: 1rem 0;
  flex-wrap: wrap;
`

const Dice = styled.div<{ isRolling?: boolean }>`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.15));
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: bold;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(255, 255, 255, 0.3);
  animation: ${props => props.isRolling ? rollAnimation : 'none'} 0.5s ease;
  
  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    font-size: 2rem;
  }
`

const Button = styled(motion.button)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  padding: 0.9rem 2.5rem;
  cursor: pointer;
  margin: 0.5rem;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  
  &:hover {
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.8rem 2rem;
  }
`

const SecondaryButton = styled(Button)`
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }
`

const ResultText = styled.div<{ isWinner?: boolean }>`
  font-size: 1.4rem;
  margin-top: 1rem;
  font-weight: 600;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
  padding: 0.8rem;
  border-radius: 12px;
  background: ${props => props.isWinner ? 'rgba(76, 175, 80, 0.2)' : 'rgba(255, 255, 255, 0.1)'};
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`

const ChoiceArea = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
`

const StatusBadge = styled.div`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  font-size: 1rem;
  font-weight: 600;
  margin: 0.5rem 0;
`

const LoadingText = styled.div`
  font-size: 1.1rem;
  opacity: 0.8;
  font-style: italic;
  animation: ${fadeIn} 0.5s ease infinite alternate;
`

const getRandomDice = () => Math.floor(Math.random() * 6) + 1

// =================== ゲームロジック ===================
const getScoreRank = (d: number[]): number => {
  const sorted = [...d].sort()
  const [a, b, c] = sorted

  if (a === b && b === c) return a === 1 ? 100 : 90 + a
  if (sorted.toString() === '4,5,6') return 80
  if (sorted.toString() === '1,2,3') return 10
  if (a === b) return 20 + c
  if (b === c) return 20 + a
  if (a === c) return 20 + b
  return 0
}

const getResultText = (d: number[]): string => {
  const sorted = [...d].sort()
  const [a, b, c] = sorted

  if (a === b && b === c) return a === 1 ? 'ピンゾロ！最強💥' : `${a}ゾロ！🔥`
  if (sorted.toString() === '4,5,6') return 'シゴロ！✨'
  if (sorted.toString() === '1,2,3') return 'ヒフミ…💀'
  if (a === b) return `${c}の目`
  if (b === c) return `${a}の目`
  if (a === c) return `${b}の目`
  return '目なし🎲'
}

// =================== コンポーネント ===================
export const ChinchiroGame: React.FC = () => {
  const [playerRole, setPlayerRole] = useState<'親' | '子' | null>(null)
  const [playerDice, setPlayerDice] = useState<number[]>([1, 1, 1])
  const [cpuDice, setCpuDice] = useState<number[]>([1, 1, 1])

  const [playerResult, setPlayerResult] = useState<string>('')
  const [cpuResult, setCpuResult] = useState<string>('')

  const [winner, setWinner] = useState<string>('')
  const [gameStarted, setGameStarted] = useState(false)
  const [message, setMessage] = useState<string>('')

  const [showCpuDice, setShowCpuDice] = useState<boolean>(false)
  const [isRolling, setIsRolling] = useState(false)

  const handleChoice = (role: '親' | '子') => {
    setPlayerRole(role)
    setGameStarted(true)
  }

  const playGame = async () => {
    setWinner('')
    setMessage('')
    setShowCpuDice(false)
    setIsRolling(true)
    rollSound.play() // 🎧 ダイスの音を再生

    // 🎲 プレイヤーのダイス
    const playerNew = [getRandomDice(), getRandomDice(), getRandomDice()]
    setPlayerDice(playerNew)
    setPlayerResult(getResultText(playerNew))
    
    setTimeout(() => setIsRolling(false), 500)

    // ⏳ CPUの番
    setMessage('CPU がダイスを振っています...')
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsRolling(true)
    rollSound.play()
    const cpuNew = [getRandomDice(), getRandomDice(), getRandomDice()]
    setCpuDice(cpuNew)
    setShowCpuDice(true)
    setCpuResult(getResultText(cpuNew))
    setMessage('')
    
    setTimeout(() => setIsRolling(false), 500)

    // 🧠 結果判定
    await new Promise((resolve) => setTimeout(resolve, 800))
    const playerScore = getScoreRank(playerNew)
    const cpuScore = getScoreRank(cpuNew)

    if (playerScore > cpuScore) {
      setWinner(`🎉 勝利！ (${playerRole})`)
    } else if (cpuScore > playerScore) {
      const cpuRole = playerRole === '親' ? '子' : '親'
      setWinner(`💀 CPU の勝ち！ (${cpuRole})`)
    } else {
      setWinner('🤝 引き分け！')
    }
  }

  const resetGame = () => {
    setPlayerRole(null)
    setGameStarted(false)
    setPlayerDice([1, 1, 1])
    setCpuDice([1, 1, 1])
    setPlayerResult('')
    setCpuResult('')
    setWinner('')
    setMessage('')
    setShowCpuDice(false)
  }

  return (
    <Wrapper>
      <GameCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Title>
          <FaGlassWhiskey /> ちんちろりん <FaDice />
        </Title>

        <Intro>
          伝統的な日本のダイスゲーム。運と戦略の勝負！<br />
          親か子を選んで、ダイスを振ろう！
        </Intro>

        <RulesBox>
          <summary>
            <FaInfoCircle /> ゲームルールを見る
          </summary>
          <ul>
            <li><strong>ピンゾロ：</strong> 1が3つ。最強の役！💥</li>
            <li><strong>ゾロ目：</strong> 同じ数字3つ。強い役🔥</li>
            <li><strong>シゴロ：</strong> 4-5-6 の並び。高い役✨</li>
            <li><strong>〇の目：</strong> 2つ同じ + 1つ別の数字 → 別の数字が得点</li>
            <li><strong>ヒフミ：</strong> 1-2-3 の並び。最低の役💀</li>
            <li><strong>目なし：</strong> 役なし。得点ゼロ🎲</li>
          </ul>
        </RulesBox>

        {!gameStarted ? (
          <>
            <SectionTitle>役割を選択</SectionTitle>
            <ChoiceArea>
              <Button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleChoice('親')}
              >
                👑 親
              </Button>
              <Button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleChoice('子')}
              >
                🧒 子
              </Button>
            </ChoiceArea>
          </>
        ) : (
          <>
            <StatusBadge>
              あなたの役割：{playerRole} {playerRole === '親' ? '👑' : '🧒'}
            </StatusBadge>

            <SectionTitle>🎲 あなたのダイス</SectionTitle>
            <DiceArea>
              {playerDice.map((num, i) => (
                <Dice key={i} isRolling={isRolling}>
                  {num}
                </Dice>
              ))}
            </DiceArea>
            {playerResult && <ResultText>{playerResult}</ResultText>}

            {(showCpuDice || message) && (
              <>
                <SectionTitle>💻 CPUのダイス</SectionTitle>
                <DiceArea>
                  {showCpuDice ? (
                    cpuDice.map((num, i) => (
                      <Dice key={i} isRolling={isRolling}>
                        {num}
                      </Dice>
                    ))
                  ) : (
                    <LoadingText>{message}</LoadingText>
                  )}
                </DiceArea>
                {showCpuDice && cpuResult && <ResultText>{cpuResult}</ResultText>}
              </>
            )}

            <Button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={playGame}
              disabled={isRolling}
            >
              {isRolling ? '🎲 ダイスを振っています...' : '🎲 ダイスを振る！'}
            </Button>

            {winner && (
              <ResultText isWinner={winner.includes('勝利')} style={{ fontSize: '1.8rem', marginTop: '1.5rem' }}>
                {winner}
              </ResultText>
            )}

            {winner && (
              <SecondaryButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={resetGame}
              >
                🔁 もう一度プレイ
              </SecondaryButton>
            )}
          </>
        )}
      </GameCard>
    </Wrapper>
  )
}
