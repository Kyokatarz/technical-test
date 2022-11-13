import DataTypes from '../types/data'
import getRandomWithDelta from './getRandomWithDelta'

type frequencyDataType = {
  avgCpuClockFrequency: number
  avgGpuClockFrequency: number
}

let dataDippedLastTime = false

const rollDice = (faces: number) => {
  return Math.random() <= 1 / faces
}

const getDippedData = (frequencyData: frequencyDataType) => {
  const { avgCpuClockFrequency, avgGpuClockFrequency } = frequencyData

  const cpuModifier = getRandomWithDelta(2, 0.4)
  const gpuModifier = getRandomWithDelta(2, 0.4)
  const dippedCpuClockFrequency = avgCpuClockFrequency / cpuModifier
  const dippedGpuClockFrequency = avgGpuClockFrequency / gpuModifier

  const avgCpuClockFrequencyInThisSec = getRandomWithDelta(
    dippedCpuClockFrequency,
    100
  )
  const avgGpuClockFrequencyInThisSec = getRandomWithDelta(
    dippedGpuClockFrequency,
    100
  )

  return {
    cpu: avgCpuClockFrequencyInThisSec,
    gpu: avgGpuClockFrequencyInThisSec,
  }
}

const getNormalData = (frequencyData: frequencyDataType) => {
  const { avgCpuClockFrequency, avgGpuClockFrequency } = frequencyData

  const avgCpuClockFrequencyInThisSec = getRandomWithDelta(
    avgCpuClockFrequency,
    50
  )
  const avgGpuClockFrequencyInThisSec = getRandomWithDelta(
    avgGpuClockFrequency,
    50
  )

  return {
    cpu: avgCpuClockFrequencyInThisSec,
    gpu: avgGpuClockFrequencyInThisSec,
  }
}

const determineDataDip = (isDippedLastTime: boolean) => {
  if (isDippedLastTime) {
    return !rollDice(5)
  } else {
    return rollDice(12)
  }
}

export const getSingleDataPoint = (frequencyData: frequencyDataType) => {
  let singlePointData

  const isDataDipped = determineDataDip(dataDippedLastTime)
  dataDippedLastTime = isDataDipped

  if (isDataDipped) {
    singlePointData = getDippedData(frequencyData)
  } else {
    singlePointData = getNormalData(frequencyData)
  }

  return singlePointData
}

const loopThroughTimeAndGetData = (
  frequencyData: frequencyDataType,
  durationInSeconds: number
) => {
  const dataSet = []

  for (let i = 0; i < durationInSeconds; i += 1) {
    let dataInThisSec

    dataInThisSec = getSingleDataPoint(frequencyData)

    dataInThisSec = {
      ...dataInThisSec,
      time: i,
    }

    dataSet.push(dataInThisSec)
  }
  return dataSet
}

export default function getRandomMonitoringData(
  data: DataTypes,
  durationInSeconds: number
) {
  const avgCpuClockFrequency = Number(
    data.systemInfo.cpu[0].averageFrequencyMhz
  )
  const avgGpuClockFrequency = data.systemInfo.gpu[0].clockSpeed.gpu.averageMhz

  const dataSet = loopThroughTimeAndGetData(
    { avgCpuClockFrequency, avgGpuClockFrequency },
    durationInSeconds
  )

  return dataSet
}
