import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import React from 'react'

type Props = {
  title: string
  value: string | React.ReactNode
}

const InfoBox = ({ title, value }: Props) => {
  const theme = useTheme()
  return (
    <Grid container item xs={12} sx={{ margin: `${theme.spacing(1)} 0` }}>
      <Grid
        item
        xs={12}
        md={3}
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Typography sx={{ fontWeight: '500', padding: 0 }}>{title}</Typography>
      </Grid>
      <Grid
        item
        xs={12}
        md={8}
        sx={{
          backgroundColor: '#F1EFEC',
          padding: '0.25rem',
          paddingLeft: '0.5rem',
        }}
      >
        <Typography sx={{ color: '#3e3e3e', fontSize: '0.9rem' }}>
          {value}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default InfoBox
