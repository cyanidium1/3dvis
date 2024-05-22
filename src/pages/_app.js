import "../styles/global.css";

// additional
import "../components/Carousel/carousel.css";
import "../components/loader.css";
import "../components/Slider/slider.css";
import "../components/3DCloud/3DCloud.css";
import "../components/3DGalery/3DGalery.css";

import { NextUIProvider } from "@nextui-org/react";
import { ChakraBaseProvider, theme } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      {" "}
      <ChakraBaseProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraBaseProvider>
    </NextUIProvider>
  );
}
