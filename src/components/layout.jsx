import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import Navbar from "./navbar";

import { performRequest } from "@/lib/datocms";
import { SelectedKeysContext } from "@/pages/_app";
import {
  allAboutsQuery,
  allContactsQuery,
  allPortfolioPostsQuery,
  allServicesQuery,
  allSlidesQuery,
  footerQuery,
  headerQuery,
  homePageQuery,
  threeDVisualizationQuery,
  interiorDesignQuery,
  furniturePlanningQuery,
} from "@/services/services";
import Head from "next/head";

export default function Layout({ children, slider }) {
  const {
    selectedKeys,
    setSelectedKeys,
    setContactsData,
    setAboutData,
    setServicesData,
    setServices1Data,
    setServices2Data,

    setPostsData,
    setOnePostDataData,
    setHomePageData,
    headerData,
    setHeaderData,
    setFooterData,
    onePostData,
    sliderData,
    setSliderData,
  } = useContext(SelectedKeysContext);

  useEffect(() => {
    setSelectedKeys(selectedKeys);
  }, [selectedKeys]);

  useEffect(() => {
    if (!selectedKeys || !selectedKeys.size) return;
    async function fetchData() {
      try {
        const selectedLocale = Array.from(selectedKeys)[0];
        const variables = {
          locale: selectedLocale,
          fallbackLocales: ["en"],
        };

        const footerResponse = await performRequest({
          query: footerQuery,
          variables,
        });

        const headerResponse = await performRequest({
          query: headerQuery,
          variables,
        });
        const homePageResponse = await performRequest({
          query: homePageQuery,
          variables,
        });
        const allPostsResponse = await performRequest({
          query: allPortfolioPostsQuery,
          variables,
        });
        const allServicesResponse = await performRequest({
          query: allServicesQuery,
          variables,
        });
        const allAboutResponse = await performRequest({
          query: allAboutsQuery,
          variables,
        });
        const allContactsResponse = await performRequest({
          query: allContactsQuery,
          variables,
        });
        const allSliderResponse = await performRequest({
          query: allSlidesQuery,
          variables,
        });

        setFooterData(footerResponse?.data);
        setHeaderData(headerResponse?.data);
        setHomePageData(homePageResponse?.data?.homepage);
        setPostsData(allPostsResponse?.data?.allPortfolioposts);

        console.log(allServicesResponse?.data);

        const servicesData = allServicesResponse?.data?.allServices;

        if (servicesData) {
          servicesData.forEach((service) => {
            const header = service.header;

            if (header.startsWith("3") || header.startsWith("Wiz")) {
              setServicesData(service);
            } else if (
              header.startsWith("F") ||
              header.startsWith("П") ||
              header.startsWith("Meble")
            ) {
              setServices1Data(service);
            } else if (
              header.startsWith("I") ||
              header.startsWith("И") ||
              header.startsWith("Projektowanie wnętrz")
            ) {
              setServices2Data(service);
            }
          });
        }

        setAboutData(allAboutResponse?.data?.allAbouts[0]);
        setContactsData(allContactsResponse?.data?.allContacts[0]);
        setSliderData(allSliderResponse?.data?.slider?.slider);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [selectedKeys, setFooterData, setHeaderData]);

  // ----------------------post id
  const router = useRouter();
  const { postId } = router.query;

  useEffect(() => {
    if (postId !== undefined) {
      async function fetchData() {
        try {
          const query = `
            query portfoliopost($slug: String!, $locale: SiteLocale!, $fallbackLocales: [SiteLocale!]!) {
              portfoliopost(filter: { slug: { eq: $slug } }, locale: $locale, fallbackLocales: $fallbackLocales) {
                id
                title
                description
                slug
                gallery { url }
                coverImage { url }
              }
            }
          `;
          const selectedLocale = Array.from(selectedKeys)[0] || "en";

          const variables = {
            slug: postId,
            locale: selectedLocale,
            fallbackLocales: ["en"],
          };

          const { data } = await performRequest({ query, variables });

          if (data.portfoliopost) {
            setOnePostDataData(data.portfoliopost);
          } else {
            console.error("Post not found");
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }

        // new

        let serviceResponse;
        if (pathname === "/3d-visualization") {
          serviceResponse = await performRequest({
            query: threeDVisualizationQuery,
            variables,
          });
        } else if (pathname === "/interior-design") {
          serviceResponse = await performRequest({
            query: interiorDesignQuery,
            variables,
          });
        } else if (pathname === "/furniture-planning") {
          serviceResponse = await performRequest({
            query: furniturePlanningQuery,
            variables,
          });
        }

        if (serviceResponse) {
          setServicesData(serviceResponse.data);
        }

        // finished new
      }

      fetchData();
    }
  }, [selectedKeys, postId]);

  return (
    <>
      <Head>
        <title>Graph3D</title>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Graph3D" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <section>
        <div className="block">
          {!slider && <Navbar headerData={headerData} />}
        </div>
        {children}
      </section>
    </>
  );
}
