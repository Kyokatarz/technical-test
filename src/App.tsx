import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { useTheme } from '@mui/material/styles'
import React from 'react'

import Dashboard from './components/Dashboard'

function App() {
  const theme = useTheme()
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div
          className="App"
          style={{
            width: '100%',
            minHeight: '100vh',
            backgroundColor: '#D3D3D3',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              maxWidth: theme.breakpoints.values.xl,
              width: '100%',
              padding: '1rem',
              justifyContent: 'center',
            }}
          >
            <Dashboard />
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
