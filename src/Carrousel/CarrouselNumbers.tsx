import { useState } from "react";

import img_1 from "../assets/1.png";
import img_2 from "../assets/2.png";
import img_3 from "../assets/3.png";
import img_4 from "../assets/4.png";
import img_5 from "../assets/5.png";

const imgArray = [img_1, img_2, img_3, img_4, img_5];

const CarrouselNumbers = () => {
  const [number, setNumber] = useState(1);

  const handleNext = () => {
    if (number >= 5) {
      setNumber(1);
    } else setNumber(number + 1);
  };

  const handlePrevious = () => {
    if (number <= 1) {
      setNumber(5);
    } else setNumber(number - 1);
  };
  return (
    <div>
      <img
        src={imgArray[number - 1]}
        alt={`${number}`}
        width={200}
        height={200}
      />

      {number + 1 >= 6 ? (
        <img
          src={imgArray[number - 5]}
          alt={`${number}`}
          width={200}
          height={200}
        />
      ) : (
        <img
          src={imgArray[number]}
          alt={`${number}`}
          width={200}
          height={200}
        />
      )}

      {number + 2 >= 6 ? (
        <img
          src={imgArray[number - 4]}
          alt={`${number}`}
          width={200}
          height={200}
        />
      ) : (
        <img
          src={imgArray[number + 1]}
          alt={`${number}`}
          width={200}
          height={200}
        />
      )}
      <button onClick={handlePrevious} style={{ width: "100%", height: 50 }}>
        Previous
      </button>
      <button onClick={handleNext} style={{ width: "100%", height: 50 }}>
        Next
      </button>
    </div>
  );
};

export default CarrouselNumbers;
