import Grid from '@mui/material/Grid'
import React from 'react'

import useAppContext from '../../hooks/useAppContext'
import SxTheme from '../../types/theme'
import DetailedScores from '../DetailedScores'
import MonitorChart from '../MonitorChart'
import RecentResultsChart from '../RecentResultsChart'
import SystemInfo from '../SystemInfo'
import TestScoreSection from '../TestScoreSection'
import TestSuiteHeroSection from '../TestSuiteHeroSection'

const styles: SxTheme = {
  contentWrapper: {
    width: '100%',
    height: '100%',
  },
  overallScoreWrapper: {
    width: '100%',
    height: '100%',
    minHeight: '450px',
  },
}

const Dashboard = () => {
  const { dataToDisplay } = useAppContext()

  if (!dataToDisplay) return null

  return (
    <Grid container spacing={1} direction="column" sx={styles.contentWrapper}>
      <Grid container item xs={12} sx={{ height: '100%' }} spacing={1}>
        <Grid
          container
          item
          xs={12}
          md={5}
          lg={3}
          sx={styles.overallScoreWrapper}
        >
          <TestScoreSection data={dataToDisplay} />
        </Grid>

        <Grid item xs={12} md={7} lg={9}>
          <TestSuiteHeroSection />
        </Grid>
      </Grid>

      <Grid container item xs={12} spacing={1}>
        <Grid item xs={12} md={4}>
          <RecentResultsChart data={dataToDisplay} />
        </Grid>
        <Grid item xs={12} md={8}>
          <MonitorChart data={dataToDisplay} />
        </Grid>
      </Grid>

      <Grid container item xs={12}>
        <SystemInfo data={dataToDisplay} />
      </Grid>

      <Grid item xs={12}>
        <DetailedScores data={dataToDisplay} />
      </Grid>
    </Grid>
  )
}

export default Dashboard
