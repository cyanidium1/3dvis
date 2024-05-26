import { useContext, useEffect, useState } from "react";
import Footer from "./footer";
import styles from "./layout.module.css";
import Loader from "./loader";
import Navbar from "./navbar";

import { createContext } from "react";
import { performRequest } from "@/lib/datocms";
import { SelectedKeysContext } from "@/pages/_app";

export default function Layout({ children }) {
  const { selectedKeys, setSelectedKeys, contactsData, setContactsData } =
    useContext(SelectedKeysContext);

  useEffect(() => {
    setSelectedKeys(selectedKeys);
  }, [selectedKeys]);

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
          console.log(response?.data?.allContacts[0], "+++++++++++++++");
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
