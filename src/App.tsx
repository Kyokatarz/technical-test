import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import React from 'react'

import Dashboard from './components/Dashboard'
import theme from './theme/theme'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div
          className="App"
          style={{
            minWidth: '100vw',
            minHeight: '100vh',
          }}
        >
          <Dashboard />
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
