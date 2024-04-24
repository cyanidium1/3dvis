import Carousel from "@/components/carousel";
import Header from "@/components/header";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>Services</title>
            </Head>

            <Header isPortfolio={true} />

            <Carousel />
        </>
    );
}