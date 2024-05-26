import "../styles/global.css";

// additional
import "../components/Carousel/carousel.css";
import "../components/loader.css";
import "../components/Slider/slider.css";
import "../components/3DCloud/3DCloud.css";
import "../components/3DGalery/3DGalery.css";

import { NextUIProvider } from "@nextui-org/react";
import { createContext, useState } from "react";

export const SelectedKeysContext = createContext({
  selectedKeys: "en",
  setSelectedKeys: () => {},
  contactsData: null,
  setContactsData: () => {},
});

export default function App({ Component, pageProps }) {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["ru"]));
  const [contactsData, setContactsData] = useState(null);
  return (
    <NextUIProvider>
      <SelectedKeysContext.Provider
        value={{ selectedKeys, setSelectedKeys, contactsData, setContactsData }}
      >
        <Component {...pageProps} />
      </SelectedKeysContext.Provider>
    </NextUIProvider>
  );
}
