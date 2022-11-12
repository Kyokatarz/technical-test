import getRandomDate from './getRandomDate'
import getRandomWithDelta from './getRandomWithDelta'

export default function getRecentScores(score: number, length: number) {
  const delta = 150

  const scores = []

  for (let i = 0; i < length - 1; i++) {
    const randomPoint = getRandomWithDelta(score, delta)
    const randomDate = getRandomDate(new Date(2022, 0, 1), new Date())
    scores.push({
      date: randomDate,
      score: randomPoint,
    })
  }

  scores.push({
    date: new Date(),
    score,
  })

  const sortedScoresByDate = scores.sort((a, b) => {
    return a.date.getTime() - b.date.getTime()
  })

  return sortedScoresByDate
}
