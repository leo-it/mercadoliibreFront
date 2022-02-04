import React, { useState } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { incrementState, decrementState } from "../../redux/slices/Car";

const Card = ({ key, producto }) => {
  const [isShown, setIsShown] = useState(false);
  const [like, setLike] = useState(false)
  const dispatch = useDispatch();
  function handleSubmit() {
    setLike(!like)
    like?
    dispatch(decrementState())
    :
    dispatch(incrementState());

  }
  return (
    <div
      className={`rounded ${isShown?"min-h-[340px] shadow-xl": "h-[320px]"} divide-y w-[224px] bg-white `}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <div className="h-[204px] w-[165px] py-3 mx-auto ">
      {isShown && (
        <div className="absolute h-[8%] w-[10%] right-8 ">
        <button onClick={handleSubmit} >
        {
          like?
          <Image
            src="/../public/assets/logos/corazonRelleno.jpeg"
            alt="logo"
            layout="fill"
            objectFit="cover"
          />
          :
          <Image
            src="/../public/assets/logos/corazon.png"
            alt="logo"
            layout="fill"
            objectFit="cover"
          />
        }
          
        </button>
        </div>
      )}
      
        <div className="relative h-[100%]  ">
          <Image
            src={producto.imagen}
            alt="logo"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="h-[120px] pt-3 ml-3">
      
        <p className="mb-2 text-[23px] font-medium">$ {producto.precio}</p>
        {producto?.envioGratis && (
          <p className="mb-2 text-[13px] text-[#00c08b] font-bold">
            Envìo gratis
          </p>
        )}
        {isShown && (
        <p className="text-[12px] text-gray-700">
          {producto.marca}
        </p>
      )}
      </div>
    </div>
  );
};

export default Card;
