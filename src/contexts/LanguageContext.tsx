import React, { createContext, useState, useContext, useEffect } from 'react'

export const LanguageContext = createContext({ language: '', toggleLanguage: () => {} })

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en')
  useEffect(() => {
    const detectedDisplayLangBtn = () => {
      navigator.languages.map((lang) => {
        if (lang === 'pl' || lang === 'pl-PL') {
          setLanguage('pl')
        }
      })
    }
    detectedDisplayLangBtn()
  }, [])

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'pl' ? 'en' : 'pl'))
  }

  return <LanguageContext.Provider value={{ language, toggleLanguage }}>{children}</LanguageContext.Provider>
}

export const useLanguageContext = () => useContext(LanguageContext)
