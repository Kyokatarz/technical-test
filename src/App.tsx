import CssBaseline from '@mui/material/CssBaseline'
import React from 'react'

import Dashboard from './components/Dashboard'

function App() {
  return (
    <>
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
    </>
  )
}

export default App
