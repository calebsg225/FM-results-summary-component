import ScoreCircle from "./components/ScoreCircle";
import SummaryCard from "./components/SummaryCard";
import summaryData from "./data/data.json";

function App() {
  return (
    <div className="App">
      <div className="results-container">
        <section className="score-container">
          <h1>Your Result</h1>
          <ScoreCircle />
          <h2>Great</h2>
          <p>You scored higher than 65&#37; of the people who have taken these tests.</p>
        </section>
        <section className="summary-container">
          <h2>Summary</h2>
          {summaryData.map((summaryCardData) => <SummaryCard summaryCardData={summaryCardData} /> )}
        </section>
      </div>
    </div>
  );
}

export default App;
