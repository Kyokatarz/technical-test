import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import {
  ArcElement,
  Chart as ChartJS,
  LineElement,
  LinearScale,
  PointElement,
} from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

import SxTheme from '../../../types/theme'

type Props = {
  testScoreInNumber: number
  testScoreUiValue: string
}

const styles: SxTheme = {
  chartWrapper: {
    position: 'relative',
    marginBottom: (theme) => theme.spacing(3),
  },
  chartTitle: {
    position: 'absolute',
    top: '85%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  },
}

const ChartScore = ({ testScoreInNumber, testScoreUiValue }: Props) => {
  const maxScore = 5000
  const data = {
    datasets: [
      {
        data: [testScoreInNumber, maxScore - testScoreInNumber],
        backgroundColor: ['#15B715', '#D1D6DC'],
        display: true,
        borderColor: '#D1D6DC',
        cutout: '80%',
      },
    ],
  }

  ChartJS.register(LinearScale, PointElement, LineElement, ArcElement)

  const options = {
    rotation: -90,
    circumference: 180,
    cutout: '60%',
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      tooltip: {
        enabled: false,
      },
    },
  }

  return (
    <Box sx={styles.chartWrapper}>
      <Doughnut data={data} options={options} />
      <Box sx={styles.chartTitle}>
        <Typography>TEST SCORE </Typography>
        <Typography variant="h4">{testScoreUiValue}</Typography>
      </Box>
    </Box>
  )
}

export default ChartScore
