import { Link } from "react-router-dom";
import Scroll from "../Scroll/Scroll.js";
import "./AddTimer.css";
import { useState } from "react";

function AddTimer({ onStart }) {
  const [newMin, setNewMin] = useState(0);
  const [newSec, setNewSec] = useState(0);

  function handleChange({ isActive, unit }) {
    if (unit === "min") {
      setNewMin(isActive);
      return;
    } else {
      setNewSec(isActive);
      return;
    }
  }

  function handleStart() {
    onStart({ newMin, newSec });
  }

  return (
    <section className="adding-timer">
      <Link className="adding-timer__link button" to="/">
        Отменить
      </Link>
      <h2 className="adding-timer__title">Таймер</h2>
      <div className="adding-timer__slider">
        <div className="adding-timer__wrap">
          <Scroll unit={"min"} onChange={handleChange} />
          <p className="adding-timer__text">мин</p>
        </div>
        <div className="adding-timer__wrap">
          <Scroll unit={"sec"} onChange={handleChange} />
          <p className="adding-timer__text">сек</p>
        </div>
      </div>
      <Link
        to="/countdown"
        className="adding-timer__btn button"
        onClick={handleStart}
      >
        Старт
      </Link>
    </section>
  );
}

export default AddTimer;
