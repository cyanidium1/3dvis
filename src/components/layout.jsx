import { useContext, useEffect, useState } from "react";
import Footer from "./footer";
import styles from "./layout.module.css";
import Loader from "./loader";
import Navbar from "./navbar";

import { createContext } from "react";
import { performRequest } from "@/lib/datocms";
import { SelectedKeysContext } from "@/pages/_app";

export default function Layout({ children }) {
  const {
    selectedKeys,
    setSelectedKeys,
    contactsData,
    setContactsData,
    aboutData,
    setAboutData,
    servicesData,
    setServicesData,
  } = useContext(SelectedKeysContext);

  useEffect(() => {
    setSelectedKeys(selectedKeys);
  }, [selectedKeys]);
  // ------------------------------------ services
  useEffect(() => {
    async function fetchData() {
      try {
        const query = `
        query allServices($locale: SiteLocale!, $fallbackLocales: [SiteLocale!]!) {
          allServices {                   
                          btn(fallbackLocales: $fallbackLocales, locale: $locale)
                          btn2(fallbackLocales: $fallbackLocales, locale: $locale)
                          btn3(fallbackLocales: $fallbackLocales, locale: $locale)
                          desc(fallbackLocales: $fallbackLocales, locale: $locale)
                          desc2(fallbackLocales: $fallbackLocales, locale: $locale)
                          desc3(fallbackLocales: $fallbackLocales, locale: $locale)
                          description(fallbackLocales: $fallbackLocales, locale: $locale)
                          header(fallbackLocales: $fallbackLocales, locale: $locale)
                          horizontalTitle2(fallbackLocales: $fallbackLocales, locale: $locale)
                          horizontalTitle(fallbackLocales: $fallbackLocales, locale: $locale)
                          horizontalTitle3(fallbackLocales: $fallbackLocales, locale: $locale)
                          img {
                            alt(fallbackLocales: $fallbackLocales, locale: $locale)
                            url
                            title(fallbackLocales: $fallbackLocales, locale: $locale)
                            size
                          }
                          img2 {
                            alt(fallbackLocales: en, locale: en)
                            size
                            url
                            title(fallbackLocales: $fallbackLocales, locale: $locale)
                          }
                          img3 {
                            alt(fallbackLocales: $fallbackLocales, locale: $locale)
                            url
                            title(fallbackLocales: $fallbackLocales, locale: $locale)
                          }
                          title(fallbackLocales: $fallbackLocales, locale: $locale)
                          title2(fallbackLocales: $fallbackLocales, locale: $locale)
                          title3(fallbackLocales: $fallbackLocales, locale: $locale)
                        }
                      }
                  `;
        const selectedLocale = Array.from(selectedKeys)[0];

        const variables = {
          locale: selectedLocale,
          fallbackLocales: ["en"],
        };
        await performRequest({ query, variables }).then((response) => {
          setServicesData(response?.data?.allServices[0]);
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [selectedKeys]);

  // -----------------------------about us
  useEffect(() => {
    async function fetchData() {
      try {
        const query = `
        query  AllAbouts($locale: SiteLocale!, $fallbackLocales: [SiteLocale!]!) {
          allAbouts{
                    answerFaq1(locale: $locale)
                          answerFaq1Copy2(locale: $locale)
                          answerFaq1Copy3(locale: $locale)
                          answerFaq1Copy4(locale: $locale)
                          description(locale: $locale)
                          avatar {
                            _createdAt
                            alt(fallbackLocales: en, locale: en)
                            author
                            filename
                            url
                          }
                          header(fallbackLocales: $fallbackLocales, locale: $locale)
                          headerFaq(fallbackLocales: $fallbackLocales, locale: $locale)
                          headerResults(fallbackLocales: $fallbackLocales, locale: $locale)
                          label(fallbackLocales: $fallbackLocales, locale: $locale)
                          labelResult1(fallbackLocales: $fallbackLocales, locale: $locale)
                          labelResult1Copy1(fallbackLocales: $fallbackLocales, locale: $locale)
                          labelResult1Copy2(fallbackLocales: $fallbackLocales, locale: $locale)
                          labelResult1Copy3(fallbackLocales: $fallbackLocales, locale: $locale)
                          questionFaq1(fallbackLocales: $fallbackLocales, locale: $locale)
                          questionFaq1Copy1(fallbackLocales: $fallbackLocales, locale: $locale)
                          questionFaq1Copy2(fallbackLocales: $fallbackLocales, locale: $locale)
                          questionFaq1Copy3(fallbackLocales: $fallbackLocales, locale: $locale)
                          subtitle(fallbackLocales: $fallbackLocales, locale: $locale)
                          descriptionResults(fallbackLocales: $fallbackLocales, locale: $locale)
                          descriptionCopy1(fallbackLocales: $fallbackLocales, locale: $locale)
                          descriptionCopy2(fallbackLocales: $fallbackLocales, locale: $locale)
                          descriptionCopy3(fallbackLocales: $fallbackLocales, locale: $locale)
                        }
                      }
                  `;
        const selectedLocale = Array.from(selectedKeys)[0];

        const variables = {
          locale: selectedLocale,
          fallbackLocales: ["en"],
        };
        await performRequest({ query, variables }).then((response) => {
          setContactsData(response?.data);
          setAboutData(response?.data?.allAbouts[0]);
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [selectedKeys]);

  // ------------------------contacts
  useEffect(() => {
    async function fetchData() {
      try {
        const query = `
          query AllContacts($locale: SiteLocale!, $fallbackLocales: [SiteLocale!]!) {
            allContacts {
              label(locale: $locale)
              placeholderEmail(locale: $locale)
              message
              placeholderName(locale: $locale)
              placeholderPhone(fallbackLocales: $fallbackLocales, locale: $locale)
              socialText(fallbackLocales: $fallbackLocales, locale: $locale)
              btn(fallbackLocales: $fallbackLocales, locale: $locale)
              _locales
              header(locale: $locale)
            }
          }
        `;

        const selectedLocale = Array.from(selectedKeys)[0];

        const variables = {
          locale: selectedLocale,
          fallbackLocales: ["en"],
        };

        await performRequest({ query, variables }).then((response) => {
          setContactsData(response?.data);
          // console.log(response?.data?.allContacts[0], "+++++++++++++++");
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [selectedKeys]);

  return (
    <div>
      <div className="block">
        <Navbar />
      </div>

      {children}
    </div>
  );
}
