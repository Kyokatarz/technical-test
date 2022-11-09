import Grid from '@mui/material/Grid'
import React from 'react'

import data from '../../test.json'
import RecentResultsChart from '../RecentResultsChart'
import TestScoreSection from '../TestScoreSection'
import TestSuiteHeroSection from '../TestSuiteHeroSection'

const Dashboard = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
      }}
    >
      <Grid container sx={{ height: '100%' }} spacing={1}>
        <Grid
          container
          item
          xs={3}
          sx={{
            width: '100%',
            height: '100%',
            minHeight: '450px',
          }}
        >
          <TestScoreSection data={data} />
        </Grid>

        <Grid item xs={9}>
          <TestSuiteHeroSection />
        </Grid>
      </Grid>

      <Grid container item xs={12} spacing={1}>
        <Grid item xs={4}>
          <RecentResultsChart data={data} />
        </Grid>
      </Grid>
    </div>
  )
}

export default Dashboard
