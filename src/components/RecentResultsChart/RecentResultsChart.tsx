import Paper from '@mui/material/Paper'
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

import getRecentScores from '../../helpers/getRecentScores'
import DataTypes from '../../types/data'
import TileHeader from '../TileHeader'

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
  const resultScore = data.results[0].scores.overallScore.score
  const resultsCount = 5
  const recentScores = getRecentScores(resultScore, resultsCount)

  const avgScore =
    recentScores.map((score) => score.score).reduce((a, b) => a + b, 0) /
    recentScores.length

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
    },
  }

  const labels = recentScores.map((score) =>
    score.date.toLocaleDateString('en-GB')
  )
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Score',
        data: recentScores.map((score) => score.score),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132)',
      },
      {
        label: 'Average',
        data: recentScores.map(() => avgScore),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235)',
      },
    ],
  }

  return (
    <Paper
      sx={{
        maxHeight: '400px',
        height: '100%',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <TileHeader text="Recent scores" />
      <div style={{ maxHeight: 400, height: '90%' }}>
        <Line options={options} data={chartData} width="100%" height="100%" />
      </div>
    </Paper>
  )
}

export default RecentResultsChart
