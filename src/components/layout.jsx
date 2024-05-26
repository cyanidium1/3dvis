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
  } = useContext(SelectedKeysContext);

  useEffect(() => {
    setSelectedKeys(selectedKeys);
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
