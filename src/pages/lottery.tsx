import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import logo from '../../static/images/bbdays_logo.png'

const Lottery = () => {
  const [isLogged, setIsLogged] = useState(false)
  const [winner, setWinner] = useState('')
  const [isDrawing, setIsDrawing] = useState(false)

  const password = 'a'

  const handleChange = (event) => {
    if (event.target.value === password) {
      setIsLogged(true)
    }
  }

  const drawWinner = async () => {
    try {
      setIsDrawing(true)
      const response = await fetch('http://localhost:1337/api/speaker-ratings/', {
        method: 'GET',
      })
      const responseData = await response.json()
      const getParticipants = responseData.data.filter((participant) => {
        return participant.attributes.nick
      })

      const getWinner = (prevWinner) => {
        const newWinner = getParticipants[Math.floor(Math.random() * getParticipants.length)].attributes.nick
        const winnerUpperCase = newWinner.toUpperCase()

        if (winnerUpperCase === prevWinner) {
          return getWinner(prevWinner)
        }
        return winnerUpperCase
      }

      setTimeout(() => {
        setWinner((prevWinner) => getWinner(prevWinner))
        setIsDrawing(false)
      }, 1000)

      if (!response.ok) throw new Error('Failed to submit rating')
    } catch (error) {
      console.error('Error submitting rating:', error)
      setIsDrawing(false)
    }
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

  return (
    <div className="lottery">
      <div className="lottery-content">
        {winner && !isDrawing ? (
          <animated.h2 style={winnerSpring} className="lottery-content--winner">
            {winner}🏆🥳
          </animated.h2>
        ) : (
          <></>
        )}
        <div id="lottery">
          {isDrawing && (
            <animated.div style={drawingSpring} className="lottery-content--drawing">
              Losowanie...
            </animated.div>
          )}
        </div>
        <img alt="bbdays logo" className="lottery-logo" src={logo} />
        {isLogged ? (
          <button className="lottery-content--button" onClick={drawWinner}>
            Losuj
          </button>
        ) : (
          <form className="lottery-content--form">
            <input className="lottery-content--input" type="password" onChange={handleChange} />
          </form>
        )}
      </div>
    </div>
  )
}

export default Lottery
