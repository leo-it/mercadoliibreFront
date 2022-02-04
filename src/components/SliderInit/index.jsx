import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

const SliderInit = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
  });

  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1 flex justify-center">
        <div className="relative h-[400px] w-[100%]">
          <Image
            src="/../public/assets/slider/slider1.webp"
            alt="logo"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="keen-slider__slide number-slide2 flex justify-center">
        <div className="relative h-[400px] w-[100%]">
          <Image
            src="/../public/assets/slider/slider2.webp"
            alt="logo"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="keen-slider__slide number-slide3 flex justify-center">
        <div className="relative h-[400px] w-[100%]">
          <Image
            src="/../public/assets/slider/slider3.webp"
            alt="logo"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SliderInit;
