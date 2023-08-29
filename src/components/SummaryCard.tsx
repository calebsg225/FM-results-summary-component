interface SUMMARYCARDPROPS {
  summaryCardData: {
    category: string,
    score: number,
    icon: string
  }
}

const SummaryCard = ({summaryCardData: {category, score, icon}}:SUMMARYCARDPROPS) => {
  return (
    <section className={`summary-card-container background-${category}`}>
      <div>
        <img src={icon} alt={`${category} icon`} />
        <h3 className={`text-${category}`} >{category}</h3>
      </div>
      <div>
        <h3>{score}</h3>
        <h3 className="op-4">/ 100</h3>
      </div>
    </section>
  )
}

export default SummaryCard
