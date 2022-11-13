import React from 'react'

import { AppContext } from '../contexts/AppContextProvider'

const useAppContext = () => {
  const context = React.useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within a AppProvider')
  }
  return context
}

export default useAppContext
