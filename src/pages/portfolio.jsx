import React, { useEffect, useState } from 'react';
import Carousel from "@/components/Carousel/carousel";
import Loader from "@/components/loader";
import Navbar from "@/components/navbar";
import Head from "next/head";
import { performRequest } from '../lib/datocms';

const PAGE_CONTENT_QUERY = `
  query {
    allPortfolioposts {
        id
        title
        description
        gallery {
          url
          id
        }
        coverImage {url}
        slug
        
      }
  }
`;

export default function Home() {
    const [loading, setLoading] = useState(true);
    const [portfolioPosts, setPortfolioPosts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await performRequest({ query: PAGE_CONTENT_QUERY });
                setPortfolioPosts(data.allPortfolioposts);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    return (
        <>
            <Head>
                <title>Portfolio</title>
            </Head>

            <Loader />

            <Navbar />
            <Carousel portfolioPosts={portfolioPosts} />
        </>
    );
}
