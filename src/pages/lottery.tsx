import React, { useState } from 'react'
import logo from '../../static/images/bbdays_logo.png'

const Lottery = () => {
  const [isLogged, setIsLogged] = useState(false)
  const [winner, setWinner] = useState('')

  const password = 'a'

  const handleChange = (event) => {
    if (event.target.value === password) {
      setIsLogged(true)
    }
  }

  const drawWinner = async () => {
    try {
      const response = await fetch('http://localhost:1337/api/speaker-ratings/', {
        method: 'GET',
      })
      const responseData = await response.json()
      const getParticipants = responseData.data.filter((participant) => {
        return participant.attributes.nick
      })

      const getWinner = () => {
        const newWinner = getParticipants[Math.floor(Math.random() * getParticipants.length)].attributes.nick
        if (newWinner === winner) {
          getWinner()
        }
        return newWinner
      }

      setWinner(getWinner())

      if (!response.ok) throw new Error('Failed to submit rating')
    } catch (error) {
      console.error('Error submitting rating:', error)
    }
  }

  return (
    <div className="lottery">
      <div className="lottery-content">
        {winner ? <h2 className="lottery-content--winner">{winner}🏆🥳</h2> : <></>}
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
