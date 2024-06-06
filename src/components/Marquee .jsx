import React from "react";
import Image from "next/image";
import img1 from "../../public/images/3dCar/1.jpg";
import img2 from "../../public/images/3dCar/6.jpg";
import img3 from "../../public/images/3dCar/11.jpg";
import img4 from "../../public/images/3dCar/17.jpg";
import img5 from "../../public/images/3dCar/22.jpg";

const images = [
  img1,
  img2,
  img3,
  img1,
  img4,
  img5,
  img1,
  img2,
  img3,
  img1,
  img2,
  img3,
];

const Marquee = () => {
  return (
    <div className="marquee">
      <div className="marquee-content">
        {images.map((image, index) => (
          <div key={index} className="image-container">
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              width={270}
              height={270}
              objectFit="cover"
              priority
            />
          </div>
        ))}
        {images.map((image, index) => (
          <div key={`clone-${index}`} className="image-container">
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              width={270}
              height={270}
              objectFit="cover"
              priority
            />
          </div>
        ))}

      </div>

    </div>
  );
};

export default Marquee;
