interface SCORECIRCLEPROPS {
  summaryData: {score: number}[]
}

const ScoreCircle = ({summaryData}:SCORECIRCLEPROPS) => {
  const average = (arr: {score: number}[]) => {
    let total = 0;
    arr.forEach((section) => total += section.score);
    return Math.round(total / arr.length);
  }
  return (
    <div className="summary-circle">
      <h2>{average(summaryData)}</h2>
      <h3>of 100</h3>
    </div>
  )
}

export default ScoreCircle
