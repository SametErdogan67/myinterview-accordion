import "./App.css";
import Interviews from "./components/Interviews";
import data from "./helper/data";

function App() {
  return (
    <>
      <div className="header">
        <h2>REACT INTERVIEW QUESTIONS AND ANSWER</h2>
      </div>
      <div className="main p-5">
        <Interviews data={data} />
      </div>
    </>
  );
}

export default App;
