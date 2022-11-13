import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import { Box, Button } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'

type Props = {
  onClick: () => void
}

const StyledRerunButton = styled(Button)({
  color: 'white',
  padding: '0.5rem 2rem',
})

const RerunButton = ({ onClick }: Props) => {
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
      <StyledRerunButton
        variant="contained"
        onClick={onClick}
        startIcon={<PlayArrowIcon />}
      >
        Rerun
      </StyledRerunButton>
    </Box>
  )
}

export default RerunButton
