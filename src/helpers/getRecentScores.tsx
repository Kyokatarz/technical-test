import getRandomDate from './getRandomDate'

export default function getRecentScores(score: number, length: number) {
  const delta = 150
  const minScore = score - delta
  const maxScore = score + delta

  const scores = []

  for (let i = 0; i < length - 1; i++) {
    const randomPoint = Math.random() * (maxScore - minScore) + minScore
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
