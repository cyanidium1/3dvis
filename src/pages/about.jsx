import Cloud from "@/components/3DCloud/3DCloud";
import Layout from "@/components/layout";
import Slider from "@/components/slider";
import { Accordion, AccordionItem } from "@nextui-org/react";
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

                <Accordion variant="light">
                    <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
                        information
                    </AccordionItem>
                    <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
                        information
                    </AccordionItem>
                    <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
                        information
                    </AccordionItem>
                </Accordion>

                <Slider />

                <div className="flex justify-center overflow-hidden">
                    <Cloud />
                </div>

            </main>
        </Layout>
    );
}