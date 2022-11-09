import { Box, Button } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'

const StyledRerunButton = styled(Button)({
  color: 'white',
  padding: '0.5rem 2rem',
})

const RerunButton = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        height: '100%',
        padding: '1rem',
      }}
    >
      <StyledRerunButton variant="contained">Rerun</StyledRerunButton>
    </Box>
  )
}

export default RerunButton
