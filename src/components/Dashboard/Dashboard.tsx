import Grid from '@mui/material/Grid'
import React from 'react'

import data from '../../test.json'
import DetailedScores from '../DetailedScores'
import MonitorChart from '../MonitorChart'
import RecentResultsChart from '../RecentResultsChart'
import SystemInfo from '../SystemInfo'
import TestScoreSection from '../TestScoreSection'
import TestSuiteHeroSection from '../TestSuiteHeroSection'

const Dashboard = () => {
  return (
    <Grid
      container
      spacing={1}
      direction="column"
      sx={{
        width: '100%',
        height: '100%',
      }}
    >
      <Grid container item xs={12} sx={{ height: '100%' }} spacing={1}>
        <Grid
          container
          item
          xs={12}
          md={5}
          lg={3}
          sx={{
            width: '100%',
            height: '100%',
            minHeight: '450px',
          }}
        >
          <TestScoreSection data={data} />
        </Grid>

        <Grid item xs={12} md={7} lg={9}>
          <TestSuiteHeroSection />
        </Grid>
      </Grid>

      <Grid container item xs={12} spacing={1}>
        <Grid item xs={12} md={4}>
          <RecentResultsChart data={data} />
        </Grid>
        <Grid item xs={12} md={8}>
          <MonitorChart data={data} />
        </Grid>
      </Grid>

      <Grid container item xs={12}>
        <SystemInfo data={data} />
      </Grid>

      <Grid item xs={12}>
        <DetailedScores data={data} />
      </Grid>
    </Grid>
  )
}

export default Dashboard
