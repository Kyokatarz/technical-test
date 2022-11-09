import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/system/Box'
import React from 'react'

import data from '../../test.json'
import ComponentScore from '../ComponentScore'
import TestSuiteHeroSection from '../TestSuiteHeroSection'

const Dashboard = () => {
  const theme = useTheme()
  const cpuUiValueScore = React.useMemo(
    () =>
      data.results[0].scores.componentScores.find(
        (score) => score.baseType === 'CPU_SCORE'
      )?.uiValue as string,
    []
  )

  const gpuUiValueScore = React.useMemo(
    () =>
      data.results[0].scores.componentScores.find(
        (score) => score.baseType === 'GRAPHICS_SCORE'
      )?.uiValue as string,
    []
  )

  const cpuName = data.systemInfo.cpu[0].name
  const gpuName = data.systemInfo.gpu[0].name

  return (
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
        <Paper
          sx={{
            width: '100%',
            height: '100%',
            minHeight: '450px',
            border: 'green',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box>TEST SCORE</Box>
          <Box sx={{ fontSize: '2rem' }}>
            {data.results[0].scores.overallScore.uiValue}
          </Box>

          <Grid
            item
            container
            xs={12}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ComponentScore name={cpuName} score={cpuUiValueScore} />
            <ComponentScore name={gpuName} score={gpuUiValueScore} />
          </Grid>

          <Button variant="outlined" sx={{ marginTop: theme.spacing(2) }}>
            {' '}
            Compare results online{' '}
          </Button>
        </Paper>
      </Grid>

      <Grid item xs={9}>
        <TestSuiteHeroSection />
      </Grid>
    </Grid>
  )
}

export default Dashboard
