import { Route, Routes } from "react-router-dom";
import AddTimer from "../AddTimer/AddTimer";
import TimersMain from "../TimersMain/TimersMain";
import "./App.css";
import { useEffect, useState } from "react";
import Countdown from "../Countdown/Countdown";

function App() {
  const [timersArr, setTimersArr] = useState([]);
  const [newMinutes, setNewMinutes] = useState(0);
  const [newSeconds, setNewSeconds] = useState(0);

  useEffect(() => {
    setTimersArr([
      { minutes: 5, seconds: 0, id: 0 },
      { minutes: 10, seconds: 0, id: 1 },
      { minutes: 2, seconds: 0, id: 2 },
    ]);
  }, []);

  function handleDelete({ id }) {
    setTimersArr(timersArr.filter((timer) => timer.id !== id));
  }

  function handleStartNewTimer({ newMin, newSec }) {
    setNewMinutes(newMin);
    setNewSeconds(newSec);
    let newArr = {
      minutes: newMin,
      seconds: newSec,
      id: timersArr.length,
    };
    setTimersArr([...timersArr, newArr]);
  }

  return (
    <div className="page">
      <Routes>
        <Route
          path="/"
          element={<TimersMain timersArr={timersArr} onDelete={handleDelete} />}
        />
        <Route
          path="/addTimer"
          element={<AddTimer onStart={handleStartNewTimer} />}
        />
        <Route
          path="/countdown"
          element={<Countdown min={newMinutes} sec={newSeconds} />}
        />
      </Routes>
    </div>
  );
}

export default App;
