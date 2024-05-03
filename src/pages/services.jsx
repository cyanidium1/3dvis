import Carousel from "@/components/Carousel/carousel";
import Loader from "@/components/loader";
import Navbar from "@/components/navbar";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>Services</title>
            </Head>
            <Loader />
            <Navbar />

            <Carousel />
        </>
    );
}