import React from 'react'

import weaveNewData from '../components/TestSuiteHeroSection/helpers/weaveNewData'
import addToLocalStorage from '../helpers/localStorage/addToLocalStorage'
import getFromLocalStorage from '../helpers/localStorage/getFromLocalStorage'
import defaultData from '../test.json'
import DataTypes from '../types/data'

type AppContextType = {
  dataToDisplay?: DataTypes
  recentResults: DataTypes[]
  setDataToDisplay: (data: DataTypes) => void
  reRunTest: () => void
}

export const AppContext = React.createContext<AppContextType>({
  setDataToDisplay: () => {},
  reRunTest: () => {},
  recentResults: [],
})

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [dataToDisplay, setDataToDisplay] = React.useState<DataTypes>()
  const [recentResults, setRecentResults] = React.useState<DataTypes[]>([])

  const memorizedDataInLocalStorage = React.useCallback(
    (newData: DataTypes) => {
      const recentResults = getFromLocalStorage('recentResults')
      addToLocalStorage('recentResults', [...recentResults, newData])
    },
    []
  )

  const reRunTest = React.useCallback(() => {
    const newData = weaveNewData()
    setDataToDisplay(newData)
    setRecentResults((prev) => [...prev, newData])
    memorizedDataInLocalStorage(newData)
  }, [memorizedDataInLocalStorage])

  const value = React.useMemo(
    () => ({ dataToDisplay, setDataToDisplay, reRunTest, recentResults }),
    [dataToDisplay, setDataToDisplay, reRunTest, recentResults]
  )

  React.useEffect(() => {
    const recentResults = getFromLocalStorage('recentResults')
    if (!recentResults) addToLocalStorage('recentResults', [defaultData])
    setRecentResults(recentResults)
  }, [])

  React.useEffect(() => {
    const recentResultsInLocalStorage = getFromLocalStorage('recentResults')
    if (!recentResultsInLocalStorage) {
      addToLocalStorage('recentResults', [defaultData])
      setRecentResults([defaultData])
      setDataToDisplay(defaultData)
    } else {
      setRecentResults(recentResultsInLocalStorage)
      setDataToDisplay(
        recentResultsInLocalStorage[recentResultsInLocalStorage.length - 1]
      )
    }
  }, [])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export default AppProvider
