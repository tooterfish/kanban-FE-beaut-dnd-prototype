import { createContext, useState } from 'react'

export const ModalContext = createContext()

export const ModalProvider = ({ children }) => {
  const [contents, setContents] = useState('')

  return <ModalContext.Provider value={{contents, setContents}}>
    {children}
  </ModalContext.Provider>
}