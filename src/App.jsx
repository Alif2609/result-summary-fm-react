import myData from "../data.json";

export default function App() {
  return (
    <main>
      <div className="result">
        <p>Your Result</p>
        <p className="result-score">
          <span>76</span> of 100
        </p>
        <div className="congrats">
          <p>Great</p>
          <p>
            You scored higher than 65% of the people who have taken these stats
          </p>
        </div>
      </div>
      <div className="summary">
        <p>Summary</p>
        <div className="stats-wrap">
          {myData.map((data) => (
            <div className={data.category.toLowerCase()}>
              <img src={data.icon} alt="icon" aria-hidden="true" />
              <p>{data.category}</p>
              <p className="category-score">
                <span>{data.score}</span> / 100
              </p>
            </div>
          ))}
        </div>
        <button className="btn-cont">Continue</button>
      </div>
    </main>
  );
}
