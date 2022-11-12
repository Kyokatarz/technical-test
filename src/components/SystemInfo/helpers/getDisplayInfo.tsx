import DataTypes from '../../../types/data'

function getCpuInfoToDisplay(data: DataTypes) {
  const cpuInfo = data.systemInfo.cpu[0]

  return [
    {
      title: 'Name',
      value: cpuInfo.name,
    },
    {
      title: 'Cores',
      value: `${cpuInfo.coreCount} (${cpuInfo.threadCount} threads)`,
    },
    {
      title: 'Frequency',
      value: `${cpuInfo.stockFrequencyMhz} - ${cpuInfo.maxFrequencyMhz} MHz`,
    },
    {
      title: 'Package',
      value: cpuInfo.processorPackage,
    },
    {
      title: 'VR Ready',
      value: cpuInfo.virtualTechnologyCapable ? 'Yes' : 'No',
    },
    {
      title: 'Manufacturing Process',
      value: `${cpuInfo.manufacturingProcessNm} nm`,
    },
  ]
}

function getGpuInfoToDisplay(data: DataTypes) {
  const gpuInfo = data.systemInfo.gpu[0]
  return [
    {
      title: 'Name',
      value: gpuInfo.name,
    },
    {
      title: 'Memory',
      value: `${gpuInfo.memory.memoryAmountMb} MB (${gpuInfo.memory.memoryType})`,
    },
    {
      title: 'Manufacturer',
      value: `${gpuInfo.pciDeviceId.vendorName} / ${gpuInfo.pciDeviceId.subvendorName}`,
    },
    {
      title: 'Clock Speed',
      value: `${gpuInfo.clockSpeed.gpu.currentMhz} MHz`,
    },
    {
      title: 'Memory Clock Speed',
      value: `${gpuInfo.clockSpeed.memory.currentMhz} MHz`,
    },
    {
      title: 'Display',
      value: `${gpuInfo.displays[0].deviceName} (${gpuInfo.displays[0].resolution})`,
    },
  ]
}

function getMotherboardInfoToDisplay(data: DataTypes) {
  const motherboardInfo = data.systemInfo.motherboard
  return [
    {
      title: 'Name',
      value: motherboardInfo.name,
    },
    {
      title: 'Model',
      value: motherboardInfo.mainboardModel,
    },
    {
      title: 'Bridge Chip',
      value: `${motherboardInfo.northBridgeVendor} (${motherboardInfo.northBridgeModel}) / ${motherboardInfo.southBridgeVendor} (${motherboardInfo.southBridgeModel})`,
    },
    {
      title: 'Memory',
      value: `${motherboardInfo.memory.type} ${motherboardInfo.memory.totalSizeMb} MB`,
    },
  ]
}

export default function getDisplayInfo(data: DataTypes) {
  return [
    { sectionName: 'CPU', data: getCpuInfoToDisplay(data) },
    { sectionName: 'GPU', data: getGpuInfoToDisplay(data) },
    { sectionName: 'Motherboard', data: getMotherboardInfoToDisplay(data) },
  ]
}
