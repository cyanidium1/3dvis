import Container from "@/components/container";
import Layout from "@/components/layout";

import Footer from "@/components/footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import { SelectedKeysContext } from "./_app";
import { useRouter } from "next/navigation";
import Loader from "@/components/loader";
import ContactForm from "@/components/contactForm";

export default function Home() {

    // new
    const [pageContent1, setPageContent1] = useState(null);

    const { contactsData } = useContext(SelectedKeysContext);

    useEffect(() => {
        if (contactsData) {
            setPageContent1(contactsData);
            setTimeout(() => {
                setIsLoading(false);
            }, 1000);
        }
    }, [contactsData]);

    // 

    const router = useRouter();
    const { services1Data } = useContext(SelectedKeysContext);
    const [pageContent, setPageContent] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const targetRef = useRef(null);
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);
    // ---------------------------------------------------
    useEffect(() => {
        if (services1Data) {
            setPageContent(services1Data);
            console.log(services1Data)
            setTimeout(() => {
                setIsLoading(false);
            }, 1000);
        }
    }, [services1Data]);

    // -------------------------------------------------------
    return (
        <Layout>
            {isLoading ? (
                <div className="loader-wrapper">
                    <Loader />
                </div>
            ) : (
                <div className="bg-[#f9f1ec] dark:bg-black text-[#4c4037] dark:text-[#f1ccae] flex justify-center items-center">
                    <Container>
                        <div className="flex flex-col py-[80px] lg:py-[128px]">
                            <motion.section
                                ref={targetRef}
                                className="flex gap-[8px] items-center"
                            >
                                <motion.p
                                    className="text-left text-[40px] md:text-[112px] text-[#4c4037] dark:text-[#f1ccae] playFairFont "
                                    initial={{ x: -500, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 50,
                                        damping: 20,
                                        duration: 3,
                                    }}
                                >
                                    <span> &mdash;</span> {pageContent?.header}
                                </motion.p>
                            </motion.section>
                            <p className="text-[18px] text-[#957f72] font-light max-w-[512px] mt-[24px] dark:text-[#f1ccae]">
                                {pageContent?.description}
                            </p>
                        </div>
                        <div className="bg-[#f9f1ec] justify-center items-center dark:bg-black ">
                            {/* <Container> */}
                            <div className="container mx-auto  lg:mb-[128px] ">
                                <div className="grid grid-cols-[2fr_30px_2fr] md:grid-cols-[2fr_85px_2fr] items-stretch">
                                    <div className="col-span-1 " data-aos="fade-up">
                                        <img
                                            alt="author"
                                            src={pageContent?.img?.url}
                                            className="mx-auto xl:mx-0 object-cover w-[100%] min-w-[239px] max-h-[502px] max-w-[502px]"
                                            style={{ minWidth: "239px" }}
                                            data-aos="slide-up"
                                        />
                                    </div>

                                    <div className="col-span-1 flex flex-col justify-center ml-8 md:ml-0 ">
                                        <span
                                            style={{ fontFamily: "Playfair Display" }}
                                            className="dark:text-[#f1ccae] font-normal tracking-wider self-center text-[32px] sm:text-[46px] font-playfair text-[#4c4037] transform -rotate-90 whitespace-nowrap"
                                        >
                                            {pageContent?.horizontalTitle}
                                        </span>
                                    </div>

                                    <div className="col-start-1 col-end-4 md:col-auto self-center lg:ml-20 mt-6 lg:mt-0">
                                        <p
                                            className="text-[10px] text-[#4c4037] dark:text-[#f1ccae]"
                                            style={{ fontFamily: "Manrope" }}
                                        >
                                            01
                                        </p>
                                        <p
                                            className="font-playfair text-[40px] text-[#4c4037] dark:text-[#f1ccae]"
                                            style={{ fontFamily: "Playfair Display" }}
                                        >
                                            {pageContent?.title}
                                        </p>
                                        <p
                                            className="font-playfair text-[18px] text-[#4c4037] dark:text-[#f1ccae]"
                                            style={{ fontFamily: "Manrope", maxWidth: "384px" }}
                                        >
                                            {pageContent?.desc}
                                        </p>
                                        <p className="mt-4 text-xl">
                                            {pageContent?.price1}
                                        </p>
                                        <p
                                            className="hover-border dark:text-[#f1ccae] font-playfair text-[10px] text-[#4c4037] py-[16px] mt-3 cursor-pointer"
                                            style={{
                                                fontFamily: "Manrope",
                                                letterSpacing: "3px",
                                                display: "inline-block",
                                                maxWidth: "105px",
                                                borderBottom: "none",
                                            }}
                                            onClick={() => {
                                                router.push("/contact");
                                            }}
                                        >
                                            {pageContent?.btn}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="container mx-auto pt-4 lg:mb-[128px]">
                                <div className="grid grid-cols-[2fr_30px_2fr] md:grid-cols-[2fr_85px_2fr] items-stretch">
                                    <div className="col-span-1 " data-aos="fade-up">
                                        <img
                                            alt="author"
                                            src={pageContent?.img2?.url}
                                            className="mx-auto xl:mx-0 object-cover w-[100%] min-w-[239px] max-h-[502px] max-w-[502px]"
                                            style={{ minWidth: "239px" }}
                                            data-aos="slide-up"
                                        />
                                    </div>

                                    <div className="col-span-1 flex flex-col justify-center ml-8 md:ml-0 ">
                                        <span
                                            style={{ fontFamily: "Playfair Display" }}
                                            className="dark:text-[#f1ccae] font-normal tracking-wider self-center text-[32px] sm:text-[46px] font-playfair text-[#4c4037] transform -rotate-90 whitespace-nowrap"
                                        >
                                            {pageContent?.horizontalTitle2}
                                        </span>
                                    </div>

                                    <div className="col-start-1 col-end-4 md:col-auto self-center lg:ml-20 mt-6 lg:mt-0">
                                        <p
                                            className="dark:text-[#f1ccae] text-[10px] text-[#4c4037]"
                                            style={{ fontFamily: "Manrope" }}
                                        >
                                            02
                                        </p>
                                        <p
                                            className="dark:text-[#f1ccae] font-playfair text-[40px] text-[#4c4037]"
                                            style={{ fontFamily: "Playfair Display" }}
                                        >
                                            {pageContent?.title2}
                                        </p>
                                        <p
                                            className="dark:text-[#f1ccae] font-playfair text-[18px] text-[#4c4037]"
                                            style={{ fontFamily: "Manrope", maxWidth: "384px" }}
                                        >
                                            {pageContent?.desc2}
                                        </p>
                                        <p className="mt-4 text-xl">
                                            {pageContent?.price2}
                                        </p>
                                        <p
                                            className="hover-border dark:text-[#f1ccae] font-playfair text-[10px] text-[#4c4037] py-[16px] mt-3 cursor-pointer"
                                            style={{
                                                fontFamily: "Manrope",
                                                letterSpacing: "3px",
                                                display: "inline-block",
                                                maxWidth: "105px",
                                                borderBottom: "none",
                                            }}
                                            onClick={() => {
                                                router.push("/contact");
                                            }}
                                        >
                                            {pageContent?.btn2}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="container mx-auto pt-4 lg:mb-[128px]">
                                <div className="grid grid-cols-[2fr_30px_2fr] md:grid-cols-[2fr_85px_2fr] items-stretch">
                                    <div className="col-span-1 " data-aos="fade-up">
                                        <img
                                            alt="author"
                                            src={pageContent?.img3?.url}
                                            className="mx-auto xl:mx-0 object-cover w-[100%] min-w-[239px] max-h-[502px] max-w-[502px]"
                                            style={{ minWidth: "239px" }}
                                            data-aos="slide-up"
                                        />
                                    </div>

                                    <div className="col-span-1 flex flex-col justify-center ml-8 md:ml-0 ">
                                        <span
                                            style={{ fontFamily: "Playfair Display" }}
                                            className="dark:text-[#f1ccae] font-normal tracking-wider self-center text-[32px] sm:text-[46px] font-playfair text-[#4c4037] transform -rotate-90 whitespace-nowrap"
                                        >
                                            {pageContent?.horizontalTitle3}
                                        </span>
                                    </div>

                                    <div className="col-start-1 col-end-4 md:col-auto self-center lg:ml-20 mt-6 lg:mt-0">
                                        <p
                                            className="dark:text-[#f1ccae] text-[10px] text-[#4c4037] tracking-widest uppercase"
                                            style={{ fontFamily: "Manrope" }}
                                        >
                                            03
                                        </p>
                                        <p
                                            className="dark:text-[#f1ccae] font-playfair text-[40px] text-[#4c4037]"
                                            style={{ fontFamily: "Playfair Display" }}
                                        >
                                            {pageContent?.title3}
                                        </p>
                                        <p
                                            className="dark:text-[#f1ccae] font-playfair text-[18px] text-[#4c4037]"
                                            style={{ fontFamily: "Manrope", maxWidth: "384px" }}
                                        >
                                            {pageContent?.desc3}
                                        </p>
                                        <p className="mt-4 text-xl">
                                            {pageContent?.price3}
                                        </p>
                                        <p
                                            className="hover-border dark:text-[#f1ccae] font-playfair text-[10px] text-[#4c4037] py-[16px] mt-3 cursor-pointer"
                                            style={{
                                                fontFamily: "Manrope",
                                                letterSpacing: "3px",
                                                display: "inline-block",
                                                maxWidth: "105px",
                                                borderBottom: "none",
                                            }}
                                            onClick={() => {
                                                router.push("/contact");
                                            }}
                                        >
                                            {pageContent?.btn3}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1 flex flex-col justify-center ml-8 md:ml-0 ">
                                <span
                                    style={{ fontFamily: "Playfair Display" }}
                                    className="dark:text-[#f1ccae] font-normal tracking-wider self-center text-[32px] sm:text-[46px] font-playfair text-[#4c4037] whitespace-nowrap mb-6"
                                >
                                    {pageContent?.formaction}
                                </span>
                            </div>
                            <ContactForm pageContent={pageContent1} type="проект. меб." />
                        </div>
                    </Container>
                </div>
            )}
            <Footer />
        </Layout>
    );
}
