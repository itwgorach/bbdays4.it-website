import React, { useState, ChangeEvent } from 'react'
import { useSpring, animated } from 'react-spring'
import { useLanguageContext } from 'contexts/LanguageContext'
import confetti from 'canvas-confetti'
import logo from '../../static/images/bbdays_logo.png'

type Participant = {
  attributes: {
    nick: string
    speaker: string
  }
}

type ApiResponse = {
  data: Participant[]
}

const Lottery: React.FC = () => {
  const [isLogged, setIsLogged] = useState<boolean>(false)
  const [winner, setWinner] = useState<string>('')
  const [isDrawing, setIsDrawing] = useState<boolean>(false)
  const { language } = useLanguageContext()

  const password = 'a'

  const hanglePassword = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === password) {
      setIsLogged(true)
    }
  }

  const getUniqueParticipants = (data: Participant[]): Participant[] => {
    const uniqueVotes = new Map<string, Participant>()

    data.forEach((participant) => {
      const { nick, speaker } = participant.attributes
      const key = `${nick}-${speaker}`

      if (!uniqueVotes.has(key)) {
        uniqueVotes.set(key, participant)
      }
    })

    return Array.from(uniqueVotes.values())
  }

  const drawWinner = async () => {
    try {
      setIsDrawing(true)
      const response = await fetch('https://api.bbdays4it.selleo.com/api/speaker-ratings/', {
        method: 'GET',
      })

      if (!response.ok) throw new Error('Failed to fetch ratings')

      const responseData: ApiResponse = await response.json()

      const uniqueParticipants = getUniqueParticipants(responseData.data)

      const getParticipants = uniqueParticipants.filter((participant) => {
        return participant.attributes.nick
      })

      const getWinner = (prevWinner: string): string => {
        const newWinner = getParticipants[Math.floor(Math.random() * getParticipants.length)].attributes.nick
        const winnerUpperCase = newWinner.toUpperCase()

        if (winnerUpperCase === prevWinner) {
          return getWinner(prevWinner)
        }
        return winnerUpperCase
      }

      setTimeout(() => {
        const newWinner = getWinner(winner)
        setWinner(newWinner)
        setIsDrawing(false)
        launchConfetti()
      }, 5000)
    } catch (error) {
      console.error('Error fetching ratings:', error)
      setIsDrawing(false)
    }
  }

  const launchConfetti = () => {
    confetti({
      particleCount: 1000,
      spread: 90,
      origin: { x: 0, y: 0.8 },
      angle: 50,
      decay: 0.95,
    })
    confetti({
      particleCount: 1000,
      spread: 90,
      origin: { x: 1, y: 0.8 },
      angle: 130,
      decay: 0.95,
    })
  }

  const winnerSpring = useSpring({
    opacity: winner ? 1 : 0,
    transform: winner ? 'scale(1.5)' : 'scale(1)',
    from: { opacity: 0, transform: 'scale(1)' },
    reset: true,
  })

  const drawingSpring = useSpring({
    opacity: isDrawing ? 1 : 0,
    from: { opacity: 0 },
  })

  const LotteryForm = (hanglePassword) => (
    <form className="lottery-content--form">
      <input className="lottery-content--input" type="password" onChange={hanglePassword} />
    </form>
  )

  const LotteryDraw = () => {
    return (
      <>
        {winner && !isDrawing ? (
          <animated.h2 style={winnerSpring} className="lottery-content--winner">
            {winner}🏆🥳
          </animated.h2>
        ) : null}
        <div id="lottery">
          {isDrawing && (
            <animated.div style={drawingSpring} className="lottery-content--drawing">
              Losowanie...
            </animated.div>
          )}
        </div>
        <button className="lottery-content--button" onClick={drawWinner}>
          Losuj
        </button>
      </>
    )
  }

  return (
    <div className="lottery">
      <div className="lottery-content">
        <img alt="bbdays logo" className="lottery-logo" src={logo} />
        {isLogged ? (
          <>
            {winner && !isDrawing ? (
              <animated.h2 style={winnerSpring} className="lottery-content--winner">
                {winner}🏆🥳
              </animated.h2>
            ) : null}
            <div id="lottery">
              {isDrawing && (
                <animated.div style={drawingSpring} className="lottery-content--drawing">
                  {language === 'pl' ? 'Losowanie...' : 'Drawing...'}
                </animated.div>
              )}
            </div>
            <button className="lottery-content--button" onClick={drawWinner}>
              {language === 'pl' ? 'Losuj' : 'Draw'}
            </button>
          </>
        ) : (
          <LotteryForm hanglePassword={hanglePassword} />
        )}
      </div>
    </div>
  )
}

export default Lottery
