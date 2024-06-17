import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react'

type Language = 'en' | 'pl'

type LanguageContextProps = {
  language: Language
  toggleLanguage: () => void
}

const defaultLanguageContext: LanguageContextProps = {
  language: 'en',
  toggleLanguage: () => {},
}

export const LanguageContext = createContext<LanguageContextProps>(defaultLanguageContext)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    const detectedDisplayLangBtn = () => {
      navigator.languages.forEach((lang) => {
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

export const useLanguageContext = (): LanguageContextProps => useContext(LanguageContext)
