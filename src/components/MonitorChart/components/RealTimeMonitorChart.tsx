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
import React from 'react'
import { Line } from 'react-chartjs-2'

import formatTime from '../../../helpers/formatTime'
import { getSingleDataPoint } from '../../../helpers/getRandomMonitoringData'
import defaultData from '../../../test.json'
import { DataSet } from '../../BenchmarkOverlay/BenchmarkOverlay'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

type Props = {
  dataSet: DataSet[]
  setDataSet: React.Dispatch<React.SetStateAction<DataSet[]>>
  setDone: React.Dispatch<React.SetStateAction<boolean>>
}

const RealTimeMonitorChart = ({ dataSet, setDataSet, setDone }: Props) => {
  const duration = 60 * 5 // 5 minutes

  const avgCpuClockFrequency = Number(
    defaultData.systemInfo.cpu[0].averageFrequencyMhz
  )
  const avgGpuClockFrequency =
    defaultData.systemInfo.gpu[0].clockSpeed.gpu.averageMhz

  const timeDataset = dataSet.map((data) => data.time)
  const cpuDataset = dataSet.map((data) => data.cpu)
  const gpuDataset = dataSet.map((data) => data.gpu)

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
    animation: {
      duration: 0,
    },
  }

  React.useEffect(() => {
    for (let i = 0; i <= duration; i++) {
      setTimeout(() => {
        const time = i
        const { cpu, gpu } = getSingleDataPoint({
          avgCpuClockFrequency,
          avgGpuClockFrequency,
        })
        setDataSet((prev) => [...prev, { cpu, gpu, time }])
        if (i === duration) setDone(true)
      }, i * 70)
    }

    return () => {
      setDataSet([])
    }
  }, [
    duration,
    avgCpuClockFrequency,
    avgGpuClockFrequency,
    setDataSet,
    setDone,
  ])

  const labels = timeDataset.map((time) => formatTime(time))
  const chartData = {
    labels,
    datasets: [
      {
        label: 'GPU Frequency',
        data: gpuDataset,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132)',
        borderWidth: 1.5,
      },
      {
        label: 'CPU Frequency',
        data: cpuDataset,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235)',
        borderWidth: 1.5,
      },
    ],
  }

  return <Line options={options} data={chartData} width="100%" height="100%" />
}

export default RealTimeMonitorChart
