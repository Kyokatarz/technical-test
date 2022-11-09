import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

import DataTypes from '../../types/data'

type Props = {
  data: DataTypes
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const RecentResultsChart = ({ data }: Props) => {
  const theme = useTheme()

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
    },
  }

  const labels = ['1', '2', '3', '4', '5']

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Score',
        data: [10, 20, 30, 40, 50, 60, 70],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Average',
        data: [20, 20, 20, 20, 20],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  }

  return (
    <Paper sx={{ minHeight: '400px', padding: '1rem' }}>
      <Typography sx={{ fontSize: '1.25rem', marginBottom: theme.spacing(1) }}>
        Recent scores
      </Typography>
      <Line options={options} data={chartData} />
    </Paper>
  )
}

export default RecentResultsChart
