import { Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import React from 'react'

type Props = {
  text: string
}

const TileHeader = ({ text }: Props) => {
  const theme = useTheme()
  return (
    <Typography
      sx={{
        fontSize: '1.25rem',
        fontWeight: 600,
        marginBottom: theme.spacing(2),
      }}
    >
      {text}
    </Typography>
  )
}

export default TileHeader
