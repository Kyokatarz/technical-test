import { Box, Button } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'

const StyledRerunButton = styled(Button)({
  color: 'white',
  width: '170px',
  height: '170px',
  borderRadius: '50%',
})

const RerunButton = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <StyledRerunButton variant="contained">Rerun</StyledRerunButton>
    </Box>
  )
}

export default RerunButton
