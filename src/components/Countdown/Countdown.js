import Timer from "../Timer/Timer";
import "./Countdown.css";
import { Link } from "react-router-dom";

function Countdown({ min, sec }) {
  return (
    <section className="countdown">
      <Link className="countdown__link button" to="/">
        Таймеры
      </Link>
      <div className="countdown__wrap">
        <Timer minutes={min} seconds={sec} id="timerFromAdd" />
      </div>
    </section>
  );
}

export default Countdown;
