export default function getRandomWithDelta(number: number, delta: number) {
  const min = number - delta
  const max = number + delta
  return Math.floor(Math.random() * (max - min) + min)
}
