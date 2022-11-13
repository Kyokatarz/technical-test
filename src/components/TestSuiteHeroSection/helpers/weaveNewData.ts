import getRandomWithDelta from '../../../helpers/getRandomWithDelta'
import numberToUiValue from '../../../helpers/numberToUiValue'
import defaultData from '../../../test.json'
import DataTypes from '../../../types/data'

export default function weaveNewData() {
  const newData: DataTypes = JSON.parse(JSON.stringify({ ...defaultData }))
  const defaultScore = defaultData.results[0].scores.overallScore.score
  const defaultGpuScore = defaultData.results[0].scores.componentScores[0].score
  const defaultCpuScore = defaultData.results[0].scores.componentScores[1].score

  const newScore = getRandomWithDelta(defaultScore, 100)
  const newGpuScore = getRandomWithDelta(defaultGpuScore, 100)
  const newCpuscore = getRandomWithDelta(defaultCpuScore, 100)

  newData.results[0].scores.overallScore.score = newScore
  newData.results[0].scores.overallScore.uiValue = numberToUiValue(newScore)
  newData.results[0].scores.componentScores[0].score = newGpuScore
  newData.results[0].scores.componentScores[1].score = newCpuscore
  newData.results[0].scores.componentScores[0].uiValue =
    numberToUiValue(newGpuScore)
  newData.results[0].scores.componentScores[1].uiValue =
    numberToUiValue(newCpuscore)
  return newData
}
