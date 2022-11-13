import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import React from 'react'

import formatTime from '../../helpers/formatTime'
import useAppContext from '../../hooks/useAppContext'
import SxTheme from '../../types/theme'
import RealTimeMonitorChart from '../MonitorChart/components/RealTimeMonitorChart'
import TileHeader from '../TileHeader'

const styles: SxTheme = {
  outerWrapper: {
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    padding: '1rem',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartWrapper: {
    minWidth: 700,
    minHeight: 500,
    marginBottom: (theme) => theme.spacing(5),
  },
  contentWrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
}

export type DataSet = {
  cpu: number
  gpu: number
  time: number
}

const BenchmarkOverlay = () => {
  const [dataSet, setDataSet] = React.useState<DataSet[]>([])
  const [done, setDone] = React.useState(false)

  const { benchmarking, setBenchmarking } = useAppContext()

  const tileHeader = done ? 'Benchmark done' : 'Benchmark in progress'

  const timeElasped = dataSet[dataSet.length - 1]?.time || 0
  const formattedTimeElapsed = formatTime(timeElasped)

  if (!benchmarking) return null

  const handleDone = () => {
    setDone(false)
    setBenchmarking(false)
  }

  return (
    <Paper sx={styles.outerWrapper}>
      <TileHeader text={tileHeader} />
      <Typography>Time elapsed: {formattedTimeElapsed} </Typography>
      <Box sx={styles.chartWrapper}>
        <RealTimeMonitorChart
          dataSet={dataSet}
          setDataSet={setDataSet}
          setDone={setDone}
        />
      </Box>
      {done && (
        <Button variant="outlined" onClick={handleDone}>
          See results
        </Button>
      )}
    </Paper>
  )
}

export default BenchmarkOverlay
