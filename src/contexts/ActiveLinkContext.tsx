import React, { createContext, useContext, useState } from 'react'

type ActiveLinkContextType = {
  activeLink: string
  setActiveLink: (link: string) => void
}

export const ActiveLinkContext = createContext<ActiveLinkContextType>({} as ActiveLinkContextType)

export const ActiveLinkProvider = ({ children }) => {
  const [activeLink, setActiveLink] = useState('')

  return <ActiveLinkContext.Provider value={{ activeLink, setActiveLink }}>{children}</ActiveLinkContext.Provider>
}

export const useActiveLink = () => useContext(ActiveLinkContext)
