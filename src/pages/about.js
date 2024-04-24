import Layout from "@/components/layout";
import Head from "next/head";

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Main page</title>
            </Head>
            <main>
                <p className="playFairFont text-5xl">
                    About
                </p>
            </main>
        </Layout>
    );
}