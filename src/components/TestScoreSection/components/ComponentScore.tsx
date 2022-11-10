import Grid from '@mui/material/Grid'
import React from 'react'

type Props = {
  name: string
  score: string
}

const ComponentScore = ({ name, score }: Props) => {
  return (
    <Grid container item xs={10} lg={12} direction={'row'}>
      <Grid item xs={10}>
        {name}
      </Grid>
      <Grid item xs={2}>
        {score}
      </Grid>
    </Grid>
  )
}

export default ComponentScore
