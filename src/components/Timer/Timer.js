import { useEffect, useState } from "react";
import "./Timer.css";
import { Link } from "react-router-dom";

function Timer({ minutes, seconds, isEdit, onDelete, id }) {
  const [min, setMin] = useState(minutes);
  const [sec, setSec] = useState(seconds);
  const [start, setStart] = useState(false);
  const [end, setEnd] = useState(false);
  const [isSingleTimer, setIsSingleTimer] = useState(false);
  const [degree, setDegree] = useState(0);

  useEffect(() => {
    if (id !== "timerFromAdd") {
      setIsSingleTimer(false);
      return;
    } else {
      setIsSingleTimer(true);
      setDegree(minutes * 60 + seconds);
      setStart(true);
    }
  }, []);

  useEffect(() => {
    let timerId;
    if (start) {
      timerId = setInterval(() => renderCount(), 1000);
    }
    return () => clearInterval(timerId);
  }, [min, sec, start, end]);

  function handlePlay() {
    if (!start) {
      setStart(true);
      return;
    } else {
      setStart(false);
    }
  }

  function renderCount() {
    if (end || !start) {
      setDegree(0);
      return;
    } else if (min === 0 && sec === 0) {
      setEnd(true);
    } else if (sec === 0) {
      setMin((min) => Number(min) - 1);
      setSec((sec) => (sec = 59));
    } else {
      setSec((sec) => Number(sec) - 1);
    }
    setDegree(min * 60 + sec - 1);
  }

  function handleDelete() {
    onDelete({ id });
  }

  return (
    <>
      {isSingleTimer ? (
        <>
          <div
            className="timer__progress"
            style={{
              background: `conic-gradient(#29a354 ${degree}deg, #1a1f23 0deg`,
            }}
          >
            <p className="timer__count timer__count__type_single ">{`${min
              .toString()
              .padStart(2, "0")} : ${sec.toString().padStart(2, "0")}`}</p>
          </div>
          <div className="timer__buttons">
            <button
              type="button"
              className="timer__button timer__button_type_resume button"
              onClick={handlePlay}
            >
              {start ? "Пауза" : "Возобновить"}
            </button>
            <Link
              to="/"
              className="timer__button timer__button_type_cancel button"
            >
              Отмена
            </Link>
          </div>
        </>
      ) : (
        <div className="timer">
          <div className="timer__wrap">
            {isEdit ? (
              <button
                type="button"
                className="timer__button timer__button_type_delete button"
                onClick={handleDelete}
              ></button>
            ) : (
              ""
            )}
            <div className="timer__duration">
              <p className="timer__count">{`${min
                .toString()
                .padStart(2, "0")}:${sec.toString().padStart(2, "0")}`}</p>
              <p className="timer__minutes">{minutes} мин</p>
            </div>
          </div>
          {isEdit ? (
            <button
              type="button"
              className="timer__button timer__button_type_more button"
            ></button>
          ) : (
            <button
              type="button"
              className={`timer__button ${
                start ? "timer__button_type_pause" : "timer__button_type_start"
              }  button`}
              onClick={handlePlay}
            ></button>
          )}
        </div>
      )}
    </>
  );
}

export default Timer;
