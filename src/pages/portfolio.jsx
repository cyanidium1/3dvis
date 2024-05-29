import React, { useContext, useEffect, useState } from "react";
import Carousel from "@/components/Carousel/carousel";
import Loader from "@/components/loader";
import Navbar from "@/components/navbar";
import Head from "next/head";
import { performRequest } from "../lib/datocms";
import Layout from "@/components/layout";
import { SelectedKeysContext } from "./_app";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [portfolioPosts, setPortfolioPosts] = useState([]);
  const { postsData, headerData, setHeaderData } =
    useContext(SelectedKeysContext);

  useEffect(() => {
    if (postsData) {
      setPortfolioPosts(postsData);
      setIsLoading(false);
    }
  }, [postsData]);

  return (
    <>
      <Layout>
        {isLoading ? (
          <div className="loader-wrapper">
            <Loader />
          </div>
        ) : (
          <>
            <Head>
              <title>Portfolio</title>
            </Head>
            <Navbar headerData={headerData} />
            <Carousel portfolioPosts={portfolioPosts} />
          </>
        )}
      </Layout>
    </>
  );
}
