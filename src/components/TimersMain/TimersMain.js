import { useState } from "react";
import Timer from "../Timer/Timer";
import "./TimersMain.css";
import { Link } from "react-router-dom";

function TimersMain({ timersArr, onDelete }) {
  const [isEdit, setIsEdit] = useState(false);

  function handleEdit() {
    isEdit ? setIsEdit(false) : setIsEdit(true);
  }

  function renderTimers() {
    return timersArr.map((timer) => (
      <Timer
        minutes={timer.minutes}
        seconds={timer.seconds}
        isEdit={isEdit}
        onDelete={onDelete}
        id={timer.id}
        key={timer.id}
      />
    ));
  }

  return (
    <section className="timers">
      <div className="timers__buttons">
        {isEdit ? (
          <button
            type="button"
            className="timers__btn button"
            onClick={handleEdit}
          >
            Готово
          </button>
        ) : (
          <button
            type="button"
            className="timers__btn button"
            onClick={handleEdit}
          >
            Править
          </button>
        )}

        <Link to="/addTimer" className="timers__link button">
          +
        </Link>
      </div>
      <h2 className="timers__title">Таймеры</h2>
      {renderTimers()}
    </section>
  );
}

export default TimersMain;
