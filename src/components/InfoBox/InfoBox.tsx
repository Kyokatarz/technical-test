import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import React from 'react'

type Props = {
  title: string
  value: string | React.ReactNode
}

const InfoBox = ({ title, value }: Props) => {
  return (
    <Grid container>
      <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography sx={{ fontSize: '0.9rem', fontWeight: '500' }}>
          {title}
        </Typography>
      </Grid>
      <Grid item xs={8} sx={{ backgroundColor: '#F1EFEC', padding: '0.25rem' }}>
        <Typography>{value}</Typography>
      </Grid>
    </Grid>
  )
}

export default InfoBox
