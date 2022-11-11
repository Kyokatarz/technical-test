import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import React from 'react'

import DataTypes from '../../types/data'
import InfoBox from '../InfoBox'
import TileHeader from '../TileHeader'
import getDisplayInfo from './helpers/getDisplayInfo'

type Props = {
  data: DataTypes
}

const SystemInfo = ({ data }: Props) => {
  const displayInfo = getDisplayInfo(data)

  return (
    <Paper
      sx={{
        width: '100%',
        height: '100%',
        minHeight: '450px',
        padding: '1rem',
      }}
    >
      <TileHeader text="System Info" />

      <Grid container spacing={2}>
        {/* <Typography>CPU</Typography> */}
        <Grid item container xs={12} lg={4}>
          {displayInfo.cpu.map((info) => (
            <InfoBox title={info.title} value={info.value} key={info.title} />
          ))}
        </Grid>
        {/* <Typography>GPU</Typography> */}
        <Grid item container xs={12} lg={4}>
          {displayInfo.gpu.map((info) => (
            <InfoBox title={info.title} value={info.value} key={info.title} />
          ))}
        </Grid>
        {/* <Typography>Motherboard</Typography> */}
        <Grid item container xs={12} lg={4}>
          {displayInfo.motherboard.map((info) => (
            <InfoBox title={info.title} value={info.value} key={info.title} />
          ))}
        </Grid>
      </Grid>
    </Paper>
  )
}

export default SystemInfo
