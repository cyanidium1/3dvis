import { SelectedKeysContext } from "@/pages/_app";
import { useContext } from "react";
import Layout from "@/components/layout";

export default function Slider() {
  const { sliderData } = useContext(SelectedKeysContext);
  const slider = true;
  return (
    <Layout slider={slider}>
      <div className="slides">
        {sliderData?.map((slide, index) => {
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
