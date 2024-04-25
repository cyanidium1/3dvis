import Carousel from "@/components/carousel";
import Loader from "@/components/loader";
import Navbar from "@/components/navbar";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>Portfolio</title>
            </Head>
            <Loader />
            <Navbar />

            <Carousel />
        </>
    );
}