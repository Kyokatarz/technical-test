import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import React from 'react'

type Props = {
  name: string
  score: string
}

const ComponentScore = ({ name, score }: Props) => {
  return (
    <Grid container item xs={10} direction={'row'}>
      <Grid item xs={9}>
        {name}
      </Grid>
      <Grid item xs={3}>
        {score}
      </Grid>
    </Grid>
  )
}

export default ComponentScore
