"use client";
import "../styles/global.css";

// additional
import "../components/Carousel/carousel.css";
import "../components/loader.css";
import "../components/Slider/slider.css";
import "../components/3DCloud/3DCloud.css";
import "../components/3DGalery/3DGalery.css";

import { NextUIProvider } from "@nextui-org/react";
import { createContext, useEffect, useState } from "react";
import Head from "next/head";

export const SelectedKeysContext = createContext({
  selectedKeys: "en",
  selectedKeys1: "en",

  setSelectedKeys: () => { },
  contactsData: null,
  setContactsData: () => { },
  aboutData: null,
  setAboutData: () => { },
  servicesData: null,
  setServicesData: () => { },

  services1Data: null,
  setServices1Data: () => { },
  services2Data: null,
  setServices2Data: () => { },

  postsData: null,
  setPostsDataData: () => { },
  onePostData: null,
  setOnePostDataData: () => { },
  homePageData: null,
  setHomePageData: () => { },
  headerData: null,
  setHeaderData: () => { },
  footerData: null,
  setFooterData: () => { },
  sliderData: null,
  setSliderData: () => { },
});

export default function App({ Component, pageProps }) {
  const [selectedKeys, setSelectedKeys] = useState(null);
  const [contactsData, setContactsData] = useState(null);
  const [servicesData, setServicesData] = useState(null);

  const [services1Data, setServices1Data] = useState(null);
  const [services2Data, setServices2Data] = useState(null);

  const [postsData, setPostsData] = useState(null);
  const [onePostData, setOnePostDataData] = useState(null);
  const [homePageData, setHomePageData] = useState(null);
  const [headerData, setHeaderData] = useState(null);
  const [footerData, setFooterData] = useState(null);
  const [aboutData, setAboutData] = useState(null);
  const [sliderData, setSliderData] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedLocale = localStorage.getItem("locale");
      if (storedLocale) {
        setSelectedKeys(new Set(JSON.parse(storedLocale)));
      } else {
        setSelectedKeys(new Set(["en"]));
      }
    }
  }, []);

  return (
    <NextUIProvider>

      <SelectedKeysContext.Provider
        value={{
          selectedKeys,
          setSelectedKeys,
          contactsData,
          setContactsData,
          aboutData,
          setAboutData,
          servicesData,
          setServicesData,

          services1Data,
          setServices1Data,
          services2Data,
          setServices2Data,

          postsData,
          setPostsData,
          onePostData,
          setOnePostDataData,
          homePageData,
          setHomePageData,
          headerData,
          setHeaderData,
          footerData,
          setFooterData,
          sliderData,
          setSliderData,
        }}
      >
        <Component {...pageProps} />
      </SelectedKeysContext.Provider>
    </NextUIProvider>
  );
}
