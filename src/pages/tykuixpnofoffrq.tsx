import React, { useState, useEffect, ChangeEvent } from 'react'

type ReviewAttributes = {
  average: number
  educationalValue: number
  speech: number
  feedback: string
  nick: string
  speaker: string
  createdAt: string
  updatedAt: string
}

type Review = {
  id: number
  attributes: ReviewAttributes
}

type SpeakerAverages = {
  speaker: string
  avg: number
  avgSpeech: number
  avgEducationalValue: number
}

const getBestSpeakers: React.FC = () => {
  const [isLogged, setIsLogged] = useState(false)
  const [bestSpeakers, setBestSpeakers] = useState<SpeakerAverages[]>([])

  const password = 'a'

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === password) {
      setIsLogged(true)
    }
  }

  const getSpeakersRate = async () => {
    try {
      const response = await fetch('https://api.bbdays4it.selleo.com/api/speaker-ratings/', {
        method: 'GET',
      })
      if (!response.ok) throw new Error('Failed to fetch ratings')

      const responseData = await response.json()

      const getSpeakerAverage = (reviews: Review[]) => {
        const speakerAverages: {
          [key: string]: { averages: number[]; speeches: number[]; educationalValues: number[] }
        } = {}

        for (const review of reviews) {
          const { speaker, average, speech, educationalValue } = review.attributes
          if (!speakerAverages[speaker]) {
            speakerAverages[speaker] = { averages: [], speeches: [], educationalValues: [] }
          }
          speakerAverages[speaker].averages.push(average)
          speakerAverages[speaker].speeches.push(speech)
          speakerAverages[speaker].educationalValues.push(educationalValue)
        }

        const calculatedAverages = Object.entries(speakerAverages).map(([speaker, values]) => {
          const totalAvg = values.averages.reduce((a, b) => a + b, 0)
          const totalSpeech = values.speeches.reduce((a, b) => a + b, 0)
          const totalEducationalValue = values.educationalValues.reduce((a, b) => a + b, 0)
          const avg = totalAvg / values.averages.length
          const avgSpeech = totalSpeech / values.speeches.length
          const avgEducationalValue = totalEducationalValue / values.educationalValues.length
          return { speaker, avg, avgSpeech, avgEducationalValue }
        })

        const sortedSpeakers = calculatedAverages.sort((a, b) => b.avg - a.avg)
        setBestSpeakers(sortedSpeakers)
      }

      getSpeakerAverage(responseData.data)
    } catch (error) {
      console.error('Error fetching ratings:', error)
    }
  }

  useEffect(() => {
    if (isLogged) {
      getSpeakersRate()
    }
  }, [isLogged])

  return (
    <div className="lottery">
      <div className="lottery-content">
        {isLogged ? (
          <table
            style={{
              width: '80%',
              margin: '0 auto',
              borderCollapse: 'collapse',
              marginTop: '20px',
              textAlign: 'center',
              color: 'white',
            }}>
            <thead>
              <tr>
                <th style={{ border: '2px solid #5bc0de', padding: '8px' }}>Prelegent</th>
                <th style={{ border: '2px solid #5bc0de', padding: '8px' }}>Średnia</th>
                <th style={{ border: '2px solid #5bc0de', padding: '8px' }}>Wystąpienie</th>
                <th style={{ border: '2px solid #5bc0de', padding: '8px' }}>Wartość edukacyjna</th>
              </tr>
            </thead>
            <tbody>
              {bestSpeakers.map((speaker, index) => (
                <tr key={index}>
                  <td style={{ border: '2px solid #5bc0de', padding: '8px' }}>{speaker.speaker}</td>
                  <td style={{ border: '2px solid #5bc0de', padding: '8px' }}>{speaker.avg.toFixed(2)}</td>
                  <td style={{ border: '2px solid #5bc0de', padding: '8px' }}>{speaker.avgSpeech.toFixed(2)}</td>
                  <td style={{ border: '2px solid #5bc0de', padding: '8px' }}>
                    {speaker.avgEducationalValue.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <form className="lottery-content--form">
            <input className="lottery-content--input" type="password" onChange={handleChange} />
          </form>
        )}
      </div>
    </div>
  )
}

export default getBestSpeakers
