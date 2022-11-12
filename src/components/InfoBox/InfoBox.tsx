import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import React from 'react'

import SxTheme from '../../types/theme'

type Props = {
  title: string
  value: string | React.ReactNode
}

const styles: SxTheme = {
  outerWrapper: {
    margin: (theme) => `${theme.spacing(1)} 0`,
  },
  innerWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginRight: (theme) => theme.spacing(1),
  },
  title: { fontWeight: '500', padding: 0 },
  valueWrapper: {
    backgroundColor: '#F1EFEC',
    padding: '0.25rem',
    paddingLeft: '0.5rem',
  },
  value: { color: '#3e3e3e' },
}

const InfoBox = ({ title, value }: Props) => {
  return (
    <Grid container item xs={12} sx={styles.outerWrapper}>
      <Grid item xs={12} md={3} sx={styles.innerWrapper}>
        <Typography sx={styles.title}>{title}</Typography>
      </Grid>
      <Grid item xs={12} md={6} sx={styles.valueWrapper}>
        <Typography sx={styles.value}>{value}</Typography>
      </Grid>
    </Grid>
  )
}

export default InfoBox
