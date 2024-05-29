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
  footerQuery,
  headerQuery,
  homePageQuery,
} from "@/services/services";

export default function Layout({ children }) {
  const {
    selectedKeys,
    setSelectedKeys,
    setContactsData,
    setAboutData,
    setServicesData,
    setPostsData,
    setOnePostData,
    setHomePageData,
    headerData,
    setHeaderData,
    setFooterData,
  } = useContext(SelectedKeysContext);

  useEffect(() => {
    setSelectedKeys(selectedKeys);
  }, [selectedKeys]);

  useEffect(() => {
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

        setFooterData(footerResponse?.data);
        setHeaderData(headerResponse?.data);
        setHomePageData(homePageResponse?.data?.homepage);
        setPostsData(allPostsResponse?.data?.allPortfolioposts);
        setServicesData(allServicesResponse?.data?.allServices[0]);
        setAboutData(allAboutResponse?.data?.allAbouts[0]);
        setContactsData(allContactsResponse?.data?.allContacts[0]);
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
            setOnePostData(data.portfoliopost);
          } else {
            console.error("Post not found");
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }

      fetchData();
    }
  }, [selectedKeys, postId]);

  return (
    <section>
      <div className="block">
        <Navbar headerData={headerData} />
      </div>

      {children}
    </section>
  );
}
