import Layout from "@/components/layout";
import Slider from "@/components/Slider/slider";

import { motion } from "framer-motion";
import Designer from "../../public/images/about/hero.jpg";
import { FaInstagram } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { LuPlus } from "react-icons/lu";
import { Accordion, AccordionItem, Image } from "@nextui-org/react";
import { useContext, useRef, useState } from "react";
import { useEffect } from "react";
import Footer from "@/components/footer";
import { SelectedKeysContext } from "./_app";
import Loader from "@/components/loader";
import SocialMediaLinks from "@/components/SocialMediaLinks";

const socialMediaLinks = [
  {
    href: "https://www.facebook.com/graph3d.pro",
    icon: <FaFacebookSquare />,
  },
  {
    href: "https://www.behance.net/helenakaraliok",
    icon: <FaBehance size={20} />,
  },
  {
    href: "https://www.Instagram.com/graph3d.pro",
    icon: <FaInstagram size={20} />,
  },
  {
    href: "www.tiktok.com/@graph3d.pro",
    icon: <FaTiktok size={20} />,
  },
];
export default function Home() {
  const { aboutData } = useContext(SelectedKeysContext);
  const [pageContent, setPageContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // -------------------------------
  useEffect(() => {
    if (aboutData) {
      setPageContent(aboutData);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, [aboutData]);

  console.log("kek", pageContent);

  const dataFAQ = [
    {
      key: "1",
      title: pageContent?.questionFaq1,
      desc: pageContent?.answerFaq1,
    },
    {
      key: "2",
      title: pageContent?.questionFaq1Copy1,
      desc: pageContent?.answerFaq1Copy2,
    },
    {
      key: "3",
      title: pageContent?.questionFaq1Copy2,
      desc: pageContent?.answerFaq1Copy3,
    },
    {
      key: "4",
      title: pageContent?.questionFaq1Copy3,
      desc: pageContent?.answerFaq1Copy4,
    },
    {
      key: "5",
      title: pageContent?.questionFaq1Copy4,
      desc: pageContent?.answerFaq1Copy5,
    },
    {
      key: "6",
      title: pageContent?.questionFaq1Copy5,
      desc: pageContent?.answerFaq1Copy6,
    },
    {
      key: "7",
      title: pageContent?.questionFaq1Copy6,
      desc: pageContent?.answerFaq1Copy7,
    },
    {
      key: "8",
      title: pageContent?.questionFaq1Copy7,
      desc: pageContent?.answerFaq1Copy8,
    },
    {
      key: "9",
      title: pageContent?.questionFaq1Copy8,
      desc: pageContent?.answerFaq1Copy9,
    },
    {
      key: "10",
      title: pageContent?.questionFaq1Copy9,
      desc: pageContent?.answerFaq1Copy10,
    },
  ];

  const targetRef = useRef(null);
  return (
    <Layout>
      {isLoading ? (
        <div className="loader-wrapper">
          <Loader />
        </div>
      ) : (
        <div className="bg-[#f9f1ec] dark:bg-black dark:text-[#f1ccae] ">
          <div className="w-full mx-auto md:px-0 py-4 sm:py-16">
            <Slider />
            <div className="w-full max-w-[1280px] mx-auto px-4 md:px-2 "></div>
          </div>

          <div className="mx-auto max-w-[1280px] px-4  py-4 sm:py-4">
            <div className="flex flex-col pb-[60px] ">
              <motion.section
                ref={targetRef}
                className="flex gap-[8px] items-center"
              >
                <motion.p
                  className="text-left text-[56px] md:text-[112px] text-[#4c4037] dark:text-[#f1ccae] playFairFont "
                  initial={{ x: -500, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 50,
                    damping: 20,
                    duration: 3,
                  }}
                >
                  <span> &mdash;</span> {pageContent?.label}
                </motion.p>
              </motion.section>
            </div>
            <div className="flex flex-col xl:flex-row gap-20 ">
              <Image
                alt="author"
                src={pageContent?.avatar?.url}
                className="mx-auto xl:mx-0 object-contain w-[100%] lg:w-[608px] "
                style={{ maxWidth: "608px" }}
              />
              <div className="flex flex-col gap-[20px] ">
                <p
                  className="font-bold text-[#4c4037] whitespace-normal  lg:whitespace-nowrap text-[32px] sm:text-[46px] md:text-[56px] lg:text-[64px] dark:text-[#f1ccae] playFairFont "
                  style={{ fontFamily: "Playfair Display" }}
                >
                  {pageContent?.header}
                </p>

                <p className="italic text-[#957f72] text-[20px] dark:text-[#f1ccae] ">
                  {pageContent?.subtitle}
                </p>
                <p
                  className="text-[16px text-[#957f72] leading-[32px] dark:text-[#f1ccae]"
                  style={{ fontFamily: "Manrope" }}
                >
                  {pageContent?.description}
                </p>
                <div className="text-[#957f72]">
                  <ul>
                    <li className="text-lg font-manrope leading-8mt-2 dark:text-[#f1ccae]">
                      {pageContent?.descriptionCopy1}
                    </li>
                    <li className="text-lg font-manrope leading-8 mt-2 dark:text-[#f1ccae]">
                      {pageContent?.descriptionCopy2}
                    </li>
                    <li className="text-lg font-manrope leading-8 mt-2 dark:text-[#f1ccae]">
                      {pageContent?.descriptionCopy3}
                    </li>
                  </ul>
                </div>
                <SocialMediaLinks data={socialMediaLinks} />
              </div>
            </div>

            <div className="flex flex-col justify-between py-[80px] lg:py-[128px]">
              <div className="w-full flex flex-col xl:flex-row gap-20 justify-between">
                <div className="flex flex-col w-full md:w-1/2 xl:max-w-[512px]">
                  <h2 className="text-[32px] sm:text-[46px] md:text-[56px] text-[#4c4037] dark:text-[#f1ccae] playFairFont ">
                    {pageContent?.headerResults}
                  </h2>
                  <p className="text-[16px] font-manrope text-[#957f72]  dark:text-[#f1ccae] leading-6 pt-4">
                    {pageContent?.descriptionResults}
                  </p>
                </div>

                <div className="flex flex-wrap gap-[60px] max-w-[387px]">
                  <div className="flex flex-col w-[calc(50%-35px)]">
                    <span className="text-[48px] text-[#4c4037]">150+</span>
                    <span className="text-[18px] font-manrope text-[#957f72] leading-[32px] dark:text-[#f1ccae]">
                      {pageContent?.labelResult1}
                    </span>
                  </div>

                  <div className="flex flex-col w-[calc(50%-35px)]">
                    <span className="text-[48px] text-[#4c4037]">20+</span>
                    <span className="text-[18px] font-manrope text-[#957f72] leading-[32px] dark:text-[#f1ccae]">
                      {pageContent?.labelResult1Copy1}
                    </span>
                  </div>

                  <div className="flex flex-col w-[calc(50%-35px)]">
                    <span className="text-[48px] text-[#4c4037]">99%</span>
                    <span className="text-[18px] font-manrope text-[#957f72] leading-[32px]  dark:text-[#f1ccae]">
                      {pageContent?.labelResult1Copy2}
                    </span>
                  </div>

                  <div className="flex flex-col w-[calc(50%-35px)]">
                    <span className="text-[48px] text-[#4c4037]">15+</span>
                    <span className="text-[18px] font-manrope text-[#957f72] leading-[32px]  dark:text-[#f1ccae]">
                      {pageContent?.labelResult1Copy3}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-[32px] sm:text-[46px] md:text-[56px] lg:text-[64px] font-playfair font-bold text-[#4c4037] dark:text-[#f1ccae] playFairFont ">
              {pageContent?.headerFaq}
            </p>
            <Accordion>
              {dataFAQ.map((faq) => {
                return (
                  <AccordionItem
                    key={faq.key}
                    aria-label={faq.title}
                    title={faq.title}
                    indicator={({ isOpen }) =>
                      isOpen ? (
                        <IoClose
                          size="36px"
                          className="border-faq"
                          color="#957f72"
                        />
                      ) : (
                        <LuPlus
                          size="36px"
                          className="border-faq"
                          color="#957f72"
                        />
                      )
                    }
                    style={{ borderBottom: "1px solid #957f72" }}
                    className="text-[16px] sm:text-[18px] dark:text-[#f1ccae] lg:text-[20px] py-[60px] px-[8px] lg:px-[16px] text-left align-text-top text-[#4c4037] justify-start w-full font-manrope font-semibold"
                  >
                    <div className="max-w-[768px] text-[1rem] text-[#957f72] pt-[32px] pb-[40px] px-[40px] dark:text-[#f1ccae]">
                      {faq.desc}
                    </div>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      )}
      <Footer />
    </Layout>
  );
}
