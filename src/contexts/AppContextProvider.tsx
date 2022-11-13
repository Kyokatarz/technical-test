import React from 'react'

import defaultData from '../test.json'
import DataTypes from '../types/data'

type AppContextType = {
  dataToDisplay?: DataTypes
  setDataToDisplay: (data: DataTypes) => void
}

export const AppContext = React.createContext<AppContextType>({
  dataToDisplay: undefined,
  setDataToDisplay: () => {},
})

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [dataToDisplay, setDataToDisplay] = React.useState<DataTypes>()

  const value = React.useMemo(
    () => ({ dataToDisplay, setDataToDisplay }),
    [dataToDisplay, setDataToDisplay]
  )

  React.useEffect(() => {
    setDataToDisplay(defaultData)
  }, [])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export default AppProvider
