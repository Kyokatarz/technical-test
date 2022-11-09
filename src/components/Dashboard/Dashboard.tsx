import Grid from '@mui/material/Grid'
import Box from '@mui/system/Box'
import React from 'react'

import data from '../../test.json'
import TestSuiteHeroImg from './assets/hero_image.jpg'

const Dashboard = () => {
  const cpuUiValueScore = React.useMemo(
    () =>
      data.results[0].scores.componentScores.find(
        (score) => score.baseType === 'CPU_SCORE'
      )?.uiValue,
    []
  )

  const gpuUiValueScore = React.useMemo(
    () =>
      data.results[0].scores.componentScores.find(
        (score) => score.baseType === 'GRAPHICS_SCORE'
      )?.uiValue,
    []
  )

  const cpuName = data.systemInfo.cpu[0].name
  const gpuName = data.systemInfo.gpu[0].name

  return (
    <Grid container sx={{ height: '100%' }}>
      <Grid item xs={4}>
        <Box sx={{ width: '100%', height: '100%', border: 'green' }}>
          TEST SCORE
          {data.results[0].scores.overallScore.uiValue}
          <Box>
            <>
              Cpu {cpuName} score: {cpuUiValueScore}
            </>
          </Box>
          <Box>
            <>
              Gpu {gpuName} score: {gpuUiValueScore}
            </>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={8}>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            border: 'red',
            backgroundImage: `url(${TestSuiteHeroImg})`,
            backgroundSize: 'cover',
          }}
        ></Box>
      </Grid>
    </Grid>
  )
}

export default Dashboard
