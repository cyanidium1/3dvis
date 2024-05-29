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
  const [selectedKeys, setSelectedKeys] = useState(new Set(["en"]));
  const [contactsData, setContactsData] = useState(null);
  const [servicesData, setServicesData] = useState(null);
  const [postsData, setPostsData] = useState(null);
  const [onePostsData, setOnePostData] = useState(null);
  const [homePageData, setHomePageData] = useState(null);
  const [headerData, setHeaderData] = useState(null);
  const [footerData, setFooterData] = useState(null);

  const [aboutData, setAboutData] = useState(null);

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
          onePostsData,
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
