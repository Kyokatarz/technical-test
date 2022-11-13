import DataTypes from '../types/data'

export default function getRecentScores(recentResults: DataTypes[]) {
  const recentScores = recentResults.map((result) => {
    return {
      date: new Date(result.runEnd),
      score: Math.floor(result.results[0].scores.overallScore.score),
    }
  })
  return recentScores
}
