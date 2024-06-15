import { useLanguageContext } from 'contexts/LanguageContext'
import React from 'react'

const Language = () => {
  const { toggleLanguage, language } = useLanguageContext()
  const displayLangBtn = language === 'pl' ? 'en' : 'pl'

  return (
    <>
      <button className="language" onClick={toggleLanguage}>
        {displayLangBtn}
      </button>
    </>
  )
}
export default Language
