import React, { createContext, useState, useContext } from 'react'

export const LanguageContext = createContext({ language: '', toggleLanguage: () => {} })

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('pl')

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'pl' ? 'en' : 'pl'))
  }

  return <LanguageContext.Provider value={{ language, toggleLanguage }}>{children}</LanguageContext.Provider>
}

export const useLanguageContext = () => useContext(LanguageContext)
