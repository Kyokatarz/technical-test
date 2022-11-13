import { Box, ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import React from 'react'

import Dashboard from './components/Dashboard'
import AppContextProvider from './contexts/AppContextProvider'
import theme from './theme/theme'
import SxTheme from './types/theme'

const styles: SxTheme = {
  appOuterWrapper: {
    width: '100%',
    minHeight: '100vh',
    backgroundColor: '#D3D3D3',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  appInnerWrapper: {
    maxWidth: (theme) => theme.breakpoints.values.xl,
    width: '100%',
    padding: '1rem',
    justifyContent: 'center',
  },
}

function App() {
  return (
    <>
      <AppContextProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box className="App" sx={styles.appOuterWrapper}>
            <Box sx={styles.appInnerWrapper}>
              <Dashboard />
            </Box>
          </Box>
        </ThemeProvider>
      </AppContextProvider>
    </>
  )
}

export default App
