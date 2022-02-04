import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Card from "../Card";
const Carrousel = ({ productos, titulo, subtitulo }) => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 5,
      spacing: 10,
    },
  });

  return (
    <div className="w-[70%] mx-auto my-10">
      <p className="mb-6 text-[26px] text-[#666666e1]">{titulo} <span className="ml-3 text-[16px] text-[#1259c3ce]">{subtitulo}</span></p>
      <div className="  flex items-center justify-center ">
      <div ref={sliderRef} className="keen-slider">
        {productos.map((producto, key) => (
          <div className="keen-slider__slide number-slide1">
            <Card producto={producto} key={key} />
          </div>
        ))}
      </div>
    </div>
    </div>
    
  );
};

export default Carrousel;
