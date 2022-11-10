import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import React from 'react'

import DataTypes from '../../types/data'
import InfoBox from '../InfoBox'
import TileHeader from '../TileHeader'

type Props = {
  data: DataTypes
}

const CpuInfo = ({ data }: Props) => {
  const theme = useTheme()

  const cpuName = data.systemInfo.cpu[0].name
  const cpuCores = data.systemInfo.cpu[0].coreCount
  const cpuThreads = data.systemInfo.cpu[0].threadCount
  const vrReady = data.systemInfo.cpu[0].virtualTechnologyCapable

  return (
    <Paper sx={{ width: '100%', minHeight: 200, padding: '1rem' }}>
      <TileHeader text="CPU Info" />
      <Grid container spacing={1}>
        <Grid item xs={12} sx={{ marginBottom: theme.spacing(1) }}>
          <Typography>{cpuName}</Typography>
        </Grid>
        <Grid item xs={6}>
          <InfoBox title="Cores" value={cpuCores} />
        </Grid>
        <Grid item xs={6}>
          <InfoBox title="Threads" value={cpuThreads} />
        </Grid>
        <Grid item xs={6}>
          <InfoBox title="VR Ready" value={vrReady ? 'Yes' : 'No'} />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default CpuInfo
