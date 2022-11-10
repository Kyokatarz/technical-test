import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import React from 'react'

import DataTypes from '../../types/data'
import InfoBox from '../InfoBox'
import TileHeader from '../TileHeader'

type Props = {
  data: DataTypes
}

const GpuInfo = ({ data }: Props) => {
  const gpuName = data.systemInfo.gpu[0].name
  const AvgClockSpeed = data.systemInfo.gpu[0].clockSpeed.gpu.averageMhz
  const vram = data.systemInfo.gpu[0].memory.memoryAmountMb
  const vramType = data.systemInfo.gpu[0].memory.memoryType

  const vramUiValue = `${vram}MB ${vramType}`

  return (
    <Paper sx={{ width: '100%', minHeight: 200, padding: '1rem' }}>
      <TileHeader text="GPU Info" />
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography>{gpuName}</Typography>
        </Grid>
        <Grid item xs={6}>
          <InfoBox title="Avg. Clock Speed" value={AvgClockSpeed} />
        </Grid>
        <Grid item xs={6}>
          <InfoBox title="VRAM" value={vramUiValue} />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default GpuInfo
