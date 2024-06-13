import { useLanguageContext } from 'contexts/LanguageContext'
import React from 'react'

const Language = () => {
  const { toggleLanguage } = useLanguageContext()

  return (
    <div className="language">
      <button onClick={toggleLanguage}>Language</button>
    </div>
  )
}
export default Language
