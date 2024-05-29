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

export const SelectedKeysContext = createContext({
  selectedKeys: "en",
  setSelectedKeys: () => {},
  contactsData: null,
  setContactsData: () => {},
  aboutData: null,
  setAboutData: () => {},
  servicesData: null,
  setServicesData: () => {},
  postsData: null,
  setPostsDataData: () => {},
  onePostData: null,
  setOnePostDataData: () => {},
  homePageData: null,
  setHomePageData: () => {},
  headerData: null,
  setHeaderData: () => {},
  footerData: null,
  setFooterData: () => {},
});

export default function App({ Component, pageProps }) {
  const [selectedKeys, setSelectedKeys] = useState(null);
  const [contactsData, setContactsData] = useState(null);
  const [servicesData, setServicesData] = useState(null);
  const [postsData, setPostsData] = useState(null);
  const [onePostData, setOnePostData] = useState(null);
  const [homePageData, setHomePageData] = useState(null);
  const [headerData, setHeaderData] = useState(null);
  const [footerData, setFooterData] = useState(null);
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("locale")) {
        setSelectedKeys(new Set([localStorage.getItem("locale")]));
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
          postsData,
          setPostsData,
          onePostData,
          setOnePostData,
          homePageData,
          setHomePageData,
          headerData,
          setHeaderData,
          footerData,
          setFooterData,
        }}
      >
        <Component {...pageProps} />
      </SelectedKeysContext.Provider>
    </NextUIProvider>
  );
}
