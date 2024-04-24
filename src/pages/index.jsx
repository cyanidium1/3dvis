import Layout from "@/components/layout";
import Head from "next/head";
import Image from "next/image";
import { CiMapPin } from "react-icons/ci";

export default function Home() {

    return (
        <Layout>
            <Head>
                <title>Main page</title>
            </Head>
            <main>
                <section className="flex flex-col md:flex-row justify-between w-full">
                    <div className="flex flex-col justify-between max-h-full">
                        <p className="font-extralight text-lg uppercase tracking-widest flex items-center">
                            <CiMapPin className="mr-2" /> Warsaw, pl
                        </p>
                        <h1 className="playFairFont text-3xl md:text-8xl my-4 md:my-0">
                            3D Grapher: <br className="hidden md:block" /> Your Interior <br className="hidden md:block" /> Design Wizard
                        </h1>
                        <div className="space-x-4 mb-4 md:mb-0">
                            <button className="btn justify-center bg-brown text-white text-center uppercase px-6 py-4 text-xs ">
                                get in touch
                            </button>
                            <button className="justify-center hover:text-light-brown hover:shadow-lg duration-300 text-brown text-center uppercase px-6 py-4 text-xs" style={{ boxShadow: "inset -1px -1px rgba(76, 64, 55, .25)" }}>
                                about me
                            </button>
                        </div>
                    </div>
                    <div className="relative w-full md:w-fit ">
                        <Image
                            className="z-20 mx-auto sm:mx-0"
                            src="/home/28ba57189853693.65b16f6bbb561.jpg" // Route of the image file
                            height={400} // Desired size with correct aspect ratio
                            width={400} // Desired size with correct aspect ratio
                            alt="1st image"
                        />
                        <Image
                            className="absolute rounded-t-full left-[-100px] top-1/2 transform -translate-y-1/2 z-30"
                            src="/home/f4c599189852661.65b16d5d8668b.jpg" // Route of the image file
                            height={200} // Desired size with correct aspect ratio
                            width={200} // Desired size with correct aspect ratio
                            alt="2st image"
                        />


                    </div>
                </section>
            </main>

        </Layout>
    );
}