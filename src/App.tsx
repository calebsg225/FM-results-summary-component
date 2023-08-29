import ScoreCircle from "./components/ScoreCircle";
import SummaryCard from "./components/SummaryCard";
import summaryData from "./data/data";

function App() {
  return (
    <div className="App">
      <div className="results-container">
        <section className="score-container">
          <h1 className="op-7">Your Result</h1>
          <ScoreCircle summaryData={summaryData} />
          <h2>Great</h2>
          <p className="op-7">You scored higher than 65&#37; of the people who have taken these tests.</p>
        </section>
        <section className="summary-container">
          <h2>Summary</h2>
          {summaryData.map((summaryCardData) => <SummaryCard summaryCardData={summaryCardData} /> )}
          <button className="btn"><h3>Continue</h3></button>
        </section>
      </div>
    </div>
  );
}

export default App;
