import getRandomWithDelta from '../../../helpers/getRandomWithDelta'
import numberToUiValue from '../../../helpers/numberToUiValue'
import defaultData from '../../../test.json'

export default function weaveNewData() {
  const newData = { ...defaultData }
  const oldScore = defaultData.results[0].scores.overallScore.score
  const oldGpuScore = defaultData.results[0].scores.componentScores[0].score
  const oldCpuScore = defaultData.results[0].scores.componentScores[1].score

  const newScore = getRandomWithDelta(oldScore, 100)
  const newUiValue = numberToUiValue(newScore)
  const newGpuScore = getRandomWithDelta(oldGpuScore, 100)
  const newCpuscore = getRandomWithDelta(oldCpuScore, 100)

  newData.results[0].scores.overallScore.score = newScore
  newData.results[0].scores.overallScore.uiValue = newUiValue
  newData.results[0].scores.componentScores[0].score = newGpuScore
  newData.results[0].scores.componentScores[1].score = newCpuscore

  return newData
}
