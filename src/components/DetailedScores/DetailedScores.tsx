import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import React from 'react'

import DataTypes from '../../types/data'
import InfoBox from '../InfoBox'
import TileHeader from '../TileHeader'

type Props = {
  data: DataTypes
}

const DetailedScores = ({ data }: Props) => {
  const graphicsScoreObj = React.useMemo(
    () =>
      data.results[0].scores.componentScores.find(
        (score) => score.baseType === 'GRAPHICS_SCORE'
      ),
    [data]
  )
  const cpuScoreObj = React.useMemo(
    () =>
      data.results[0].scores.componentScores.find(
        (score) => score.baseType === 'CPU_SCORE'
      ),
    [data]
  )

  const graphicsSubScores = graphicsScoreObj?.subScores
  const simulateTimePerFrame = cpuScoreObj?.subScores[0].uiValue
  const simulateTimePerFrameUnit = cpuScoreObj?.subScores[0].unit

  return (
    <Paper sx={{ padding: '1rem' }}>
      <TileHeader text="Detailed score" />
      <Grid container spacing={2}>
        {graphicsSubScores?.map((subScore, index) => (
          <Grid item xs={12} lg={6} key={index}>
            <InfoBox
              title={`Graphics Test ${index + 1}`}
              value={subScore.uiValue + ' FPS'}
            />
          </Grid>
        ))}
        <Grid item xs={12} lg={6}>
          <InfoBox
            title="Average simulation time per frame"
            value={`${simulateTimePerFrame} ${simulateTimePerFrameUnit}`}
          />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default DetailedScores
