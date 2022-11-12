import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import React from 'react'

import DataTypes from '../../types/data'
import SxTheme from '../../types/theme'
import TileHeader from '../TileHeader'
import SystemInfoSection from './components/SystemInfoSection'
import getDisplayInfo from './helpers/getDisplayInfo'

type Props = {
  data: DataTypes
}

const styles: SxTheme = {
  paper: {
    width: '100%',
    height: '100%',
    minHeight: '450px',
    padding: '1rem',
  },
}

const SystemInfo = ({ data }: Props) => {
  const displayInfo = getDisplayInfo(data)
  return (
    <Paper sx={styles.paper}>
      <TileHeader text="System Info" />

      <Grid container spacing={2}>
        {displayInfo.map((section) => (
          <SystemInfoSection section={section} />
        ))}
      </Grid>
    </Paper>
  )
}

export default SystemInfo
