import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import React from 'react'

import DataTypes from '../../types/data'
import SxTheme from '../../types/theme'
import ChartScore from './components/ChartScore'
import ComponentScore from './components/ComponentScore'

type Props = {
  data: DataTypes
}

const styles: SxTheme = {
  paper: {
    width: '100%',
    height: '100%',
    minHeight: '450px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
  },
  componentScoreWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}

const TestScoreSection = ({ data }: Props) => {
  const cpuUiValueScore = React.useMemo(
    () =>
      data.results[0].scores.componentScores.find(
        (score) => score.baseType === 'CPU_SCORE'
      )?.uiValue as string,
    [data]
  )

  const gpuUiValueScore = React.useMemo(
    () =>
      data.results[0].scores.componentScores.find(
        (score) => score.baseType === 'GRAPHICS_SCORE'
      )?.uiValue as string,
    [data]
  )

  const cpuName = data.systemInfo.cpu[0].name
  const gpuName = data.systemInfo.gpu[0].name
  const testScoreUiValue = data.results[0].scores.overallScore.uiValue
  const testScoreInNumber = data.results[0].scores.overallScore.score

  return (
    <Paper sx={styles.paper}>
      <ChartScore
        testScoreInNumber={testScoreInNumber}
        testScoreUiValue={testScoreUiValue}
      />

      <Grid item container xs={12} sx={styles.componentScoreWrapper}>
        <ComponentScore name={cpuName} score={cpuUiValueScore} />
        <ComponentScore name={gpuName} score={gpuUiValueScore} />
      </Grid>
    </Paper>
  )
}

export default TestScoreSection
