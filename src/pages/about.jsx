import Cloud from "@/components/3DCloud/3DCloud";
import Container from "@/components/container";
import Layout from "@/components/layout";
import Slider from "@/components/Slider/slider";

import Head from "next/head";
import Designer from "../../public/images/about/hero.jpg";
import { FaInstagram } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { LuPlus } from "react-icons/lu";
import { Accordion, AccordionItem, Image } from "@nextui-org/react";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { performRequest } from "@/lib/datocms";
import Footer from "@/components/footer";
import { SelectedKeysContext } from "./_app";

const socialMediaLinks = [
  {
    href: "https://www.facebook.com/grafinia3dpl",
    icon: <FaFacebookSquare />,
  },
  {
    href: "https://www.behance.net/helenakaraliok",
    icon: <FaBehance size={20} />,
  },
  {
    href: "https://www.instagram.com/grafinia.3d",
    icon: <FaInstagram size={20} />,
  },
  {
    href: "https://www.tiktok.com/@grafinia3d",
    icon: <FaTiktok size={20} />,
  },
];
export default function Home() {
  const { aboutData } = useContext(SelectedKeysContext);
  const [pageContent, setPageContent] = useState(null);
  // -------------------------------
  useEffect(() => {
    console.log(aboutData, "aboutData");
    if (aboutData) {
      setPageContent(aboutData);
    }
  }, [aboutData]);

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
  ];
  return (
    <Layout>
      <div className="bg-[#f9f1ec]">
        <div className="w-full mx-auto md:px-0 py-4 sm:py-16">
          <Slider />
          <div className="w-full max-w-[1280px] mx-auto px-4 md:px-2 "></div>
        </div>

        <div className="mx-auto max-w-[1280px] px-4 md:px-0 py-4 sm:py-16">
          <div className="flex flex-col pb-[80px] lg:pb-[128px]">
            <div
              className="flex items-center gap-[8px] justify-center md:justify-start"
              style={{ fontFamily: "Playfair Display" }}
            >
              <p className="text-mobile-lg sm:text-7xl lg:text-9xl text-[#4c4037]">
                &mdash;
              </p>
              <p className="text-mobile-lg sm:text-9xl lg:text-xxl text-[#4c4037]">
                {pageContent?.label}
              </p>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row gap-20 p-2 ">
            <Image
              alt="author"
              src={Designer.src}
              className="mx-auto xl:mx-0 object-contain w-[100%] lg:w-[608px]"
              style={{ maxWidth: "608px" }}
            />
            <div className="flex flex-col gap-[20px] p-[20px]">
              <p
                className="font-playfair font-bold text-[#4c4037] whitespace-normal 
             lg:whitespace-nowrap text-[32px] sm:text-[46px] md:text-[56px] lg:text-[64px]"
                style={{ fontFamily: "Playfair Display" }}
              >
                {pageContent?.header}
              </p>

              <p className="italic text-[#957f72] text-[20px]">
                {pageContent?.subtitle}
              </p>
              <p
                className="text-[16px text-[#957f72] leading-[32px]"
                style={{ fontFamily: "Manrope" }}
              >
                {pageContent?.description}
              </p>
              <div className="text-[#957f72]">
                <ul>
                  <li className="text-lg font-manrope leading-8mt-2">
                    {pageContent?.descriptionCopy1}
                  </li>
                  <li className="text-lg font-manrope leading-8 mt-2">
                    {pageContent?.descriptionCopy2}
                  </li>
                  <li className="text-lg font-manrope leading-8 mt-2">
                    {pageContent?.descriptionCopy3}
                  </li>
                </ul>
              </div>

              <div className="flex space-x-4 my-4 items-center">
                {socialMediaLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    style={{ border: "1px solid #f1ccae", borderRadius: "50%" }}
                    className="hover-effect-about w-[36px] h-[36px] flex justify-center items-center hover:text-[#4c4037] duration-300"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between py-[80px] lg:py-[128px]">
            <div className="w-full flex flex-col xl:flex-row gap-20 justify-between">
              <div className="flex flex-col w-1/2 max-w-[512px]">
                <h2 className="text-[46px] sm:text-[64px] font-playfair font-bold text-[#4c4037]">
                  {pageContent?.headerResults}
                </h2>
                <p className="text-[16px] font-manrope text-[#957f72] leading-[32px]">
                  {pageContent?.descriptionResults}
                </p>
              </div>

              <div className="flex flex-wrap gap-[60px] max-w-[387px]">
                <div className="flex flex-col w-[calc(50%-35px)]">
                  <span className="text-[48px] text-[#4c4037]">150+</span>
                  <span className="text-[18px] font-manrope text-[#957f72] leading-[32px] whitespace-nowrap">
                    {pageContent?.labelResult1}
                  </span>
                </div>

                <div className="flex flex-col w-[calc(50%-35px)]">
                  <span className="text-[48px] text-[#4c4037]">20+</span>
                  <span className="text-[18px] font-manrope text-[#957f72] leading-[32px] whitespace-nowrap">
                    {pageContent?.labelResult1Copy1}
                  </span>
                </div>

                <div className="flex flex-col w-[calc(50%-35px)]">
                  <span className="text-[48px] text-[#4c4037]">99%</span>
                  <span className="text-[18px] font-manrope text-[#957f72] leading-[32px] whitespace-nowrap">
                    {pageContent?.labelResult1Copy2}
                  </span>
                </div>

                <div className="flex flex-col w-[calc(50%-35px)]">
                  <span className="text-[48px] text-[#4c4037]">15+</span>
                  <span className="text-[18px] font-manrope text-[#957f72] leading-[32px] whitespace-nowrap">
                    {pageContent?.labelResult1Copy3}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-[32px] sm:text-[46px] md:text-[56px] lg:text-[64px] font-playfair font-bold text-[#4c4037]">
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
                      <IoClose size="36px" color="#957f72" />
                    ) : (
                      <LuPlus size="36px" color="#957f72" />
                    )
                  }
                  style={{ borderBottom: "1px solid #957f72" }}
                  className="text-[16px] sm:text-[18px] lg:text-[20px] py-[60px] lg:py-[80px] px-[8px] lg:px-[16px] text-left align-text-top text-[#4c4037] justify-start w-full font-manrope font-semibold"
                >
                  <div className="max-w-[768px] text-[1rem] text-[#957f72] pt-[32px] pb-[40px] px-[40px]">
                    {faq.desc}
                  </div>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
