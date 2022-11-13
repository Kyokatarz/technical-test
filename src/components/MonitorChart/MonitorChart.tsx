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

import formatTime from '../../helpers//formatTime'
import getRandomMonitoringData from '../../helpers/getRandomMonitoringData'
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

const MonitorChart = ({ data }: Props) => {
  const overDuration = 60 * 5 // 5 minutes
  const monitoringData = getRandomMonitoringData(data, overDuration)
  const gpuDataset = monitoringData.map((data) => data.gpu)
  const cpuDataset = monitoringData.map((data) => data.cpu)
  const timeDataset = monitoringData.map((data) => data.time)

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    scale: {
      ticks: {
        maxTicksLimit: 10,
      },
    },
  }

  const labels = timeDataset.map((time) => formatTime(time))
  const chartData = {
    labels,
    datasets: [
      {
        label: 'GPU Frequency',
        data: gpuDataset,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgb(53, 162, 235)',
        borderWidth: 2,
      },
      {
        label: 'CPU Frequency',
        data: cpuDataset,
        borderColor: '#fb8b24',
        backgroundColor: '#fb8b24',
        borderWidth: 2,
      },
    ],
  }

  return (
    <Paper
      sx={{
        height: '400px',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <TileHeader text="Monitoring" />
      <div style={{ maxHeight: 400, height: '90%' }}>
        <Line options={options} data={chartData} width="100%" height="100%" />
      </div>
    </Paper>
  )
}

export default MonitorChart
