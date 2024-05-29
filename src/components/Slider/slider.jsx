import { SelectedKeysContext } from "@/pages/_app";
import { useContext } from "react";
import Layout from "@/components/layout";
import img1 from "../../../public/images/slider/1.jpg";
import img2 from "../../../public/images/slider/2.jpg";
import img3 from "../../../public/images/slider/3.jpg";
import img4 from "../../../public/images/slider/4.png";
import img5 from "../../../public/images/slider/5.png";
import img6 from "../../../public/images/slider/6.png";
import img7 from "../../../public/images/slider/7.png";
import img8 from "../../../public/images/slider/8.png";
import img9 from "../../../public/images/slider/9.png";
import img10 from "../../../public/images/slider/10.png";
import img11 from "../../../public/images/slider/11.jpg";
import img12 from "../../../public/images/slider/12.png";
import img13 from "../../../public/images/slider/13.png";
import img14 from "../../../public/images/slider/14.jpg";
import img15 from "../../../public/images/slider/15.png";
import img16 from "../../../public/images/slider/16.png";

const images = [
  { url: img1.src },
  { url: img2.src },
  { url: img3.src },
  { url: img4.src },
  { url: img5.src },
  { url: img6.src },
  { url: img7.src },
  { url: img8.src },
  { url: img9.src },
  { url: img10.src },
  { url: img11.src },
  { url: img12.src },
  { url: img13.src },
  { url: img14.src },
  { url: img15.src },
  { url: img16.src },
  { url: img1.src },
  { url: img2.src },
  { url: img3.src },
  { url: img4.src },
];

export default function Slider() {
  const { sliderData } = useContext(SelectedKeysContext);
  const slider = true;
  return (
    <Layout slider={slider}>
      <div className="slides">
        {images?.map((slide, index) => {
          console.log(slide, "slide");
          return (
            <div key={index} className={`slide slide-${index + 1}`}>
              <img src={slide?.url} alt={`Slide ${index + 1}`} />
            </div>
          );
        })}
      </div>
    </Layout>
  );
}
