import { Divider } from '@mui/material'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
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
        {displayInfo.map((section) => (
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            key={section.sectionName}
            sx={{
              marginBottom: (theme) => theme.spacing(1),
            }}
          >
            <Typography variant="h6">{section.sectionName}</Typography>
            <Divider sx={{ margin: (theme) => `${theme.spacing(1)} 0` }} />
            {section.data.map((info) => (
              <InfoBox key={info.title} title={info.title} value={info.value} />
            ))}
          </Grid>
        ))}
      </Grid>
    </Paper>
  )
}

export default SystemInfo
