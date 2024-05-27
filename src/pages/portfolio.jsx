import React, { useContext, useEffect, useState } from "react";
import Carousel from "@/components/Carousel/carousel";
import Loader from "@/components/loader";
import Navbar from "@/components/navbar";
import Head from "next/head";
import { performRequest } from "../lib/datocms";
import Layout from "@/components/layout";
import { SelectedKeysContext } from "./_app";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [portfolioPosts, setPortfolioPosts] = useState([]);
  const { postsData, headerData, setHeaderData } =
    useContext(SelectedKeysContext);

  useEffect(() => {
    if (postsData) {
      setPortfolioPosts(postsData);
    }
  }, [postsData]);

  return (
    <>
      <Layout>
        <Head>
          <title>Portfolio</title>
        </Head>

        <Loader />

        <Navbar headerData={headerData} />
        <Carousel portfolioPosts={portfolioPosts} />
      </Layout>
    </>
  );
}
