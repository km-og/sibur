import { useEffect } from "react";
import "./Scroll.css";
import { register } from "swiper/element/bundle";

register();

function Scroll({ unit, onChange }) {
  useEffect(() => {
    function changeSlide(e) {
      const [swiper] = e.detail;
      onChange({ isActive: swiper.realIndex, unit: e.target.id });
    }

    document.addEventListener("swiperslidechange", changeSlide);
    return () => document.removeEventListener("swiperslidechange", changeSlide);
  }, []);

  function renderTime() {
    let arr = [];
    for (let i = 0; i < 59; i++) {
      arr.push(
        <swiper-slide class="scroll__item" key={unit + i}>
          {i}
        </swiper-slide>
      );
    }
    return arr;
  }

  return (
    <swiper-container
      class="scroll"
      slides-per-view="3"
      direction="vertical"
      centeredSlides="true"
      centeredSlidesBounds="true"
      spaceBetween="15"
      id={unit}
    >
      {renderTime()}
    </swiper-container>
  );
}

export default Scroll;
