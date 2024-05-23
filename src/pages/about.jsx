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
import { useState } from "react";

const dataFAQ = [
  {
    key: "1",
    title: "How many years of experience do your firm has?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.",
  },
  {
    key: "2",
    title: "How big is your team of architects?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.",
  },
  {
    key: "3",
    title: "Does your firm have a project minimum?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.",
  },
  {
    key: "4",
    title: "Can I cancel my project at any time?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.",
  },
];
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
  const [expanded, setExpanded] = useState();
  const stylingSocials = {
    w: "36px",
    h: "36px",
    borderRadius: "50%",
    color: "#957f72",
    border: "1px solid #957f72",
    justifyContent: "center",
    alignItems: "center",
    _hover: {
      color: "#4c4037",
      border: "1px solid #4c4037",
    },
  };

  return (
    <Layout>
      <div pos={"relative"} bg={"#f9f1ec"}>
        <div className="w-full mx-auto px-4 md:px-0 py-4 sm:py-16">
          <Slider />
          <div className="w-full max-w-[1280px] mx-auto px-4 md:px-2 ">
            <div className="absolute top-[100px] left-2 md:left-[80px] xl:left-[130px] bg-[rgba(249,241,236,0.7)] p-[16px_24px]">
              <p
                className="text-[32px] sm:text-[46px] md:text-[56px] lg:text-[64px] text-[#4c4037]"
                style={{ fontFamily: "Playfair Display" }}
              >
                About Us
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-[1280px] px-4 md:px-0 py-4 sm:py-16">
          <div className="flex flex-col xl:flex-row gap-20 p-2 ">
            <Image
              alt="author"
              src={Designer.src}
              className="mx-auto xl:mx-0 object-contain w-[375px] lg:w-[608px]"
              style={{ maxWidth: "608px" }}
            />
            <div className="flex flex-col gap-[20px] p-[20px]">
              <p
                className="font-playfair font-bold text-[#4c4037] whitespace-normal 
             lg:whitespace-nowrap text-[32px] sm:text-[46px] md:text-[56px] lg:text-[64px]"
                style={{ fontFamily: "Playfair Display" }}
              >
                Helena Karaliok
              </p>

              <p className="italic text-[#957f72] text-[20px]">
                Interior Designer
              </p>
              <p
                className="text-[16px text-[#957f72] leading-[32px]"
                style={{ fontFamily: "Manrope" }}
              >
                With every new project, I strive not only to create a beautiful
                and cozy interior, but also to reflect the individuality of the
                client to the fullest, materializing their notions of comfort
                and functionality. It's important to me that the design is not
                only visually appealing but also practical for everyday life.
              </p>
              <div className="text-[#957f72]">
                <ul>
                  <li className="text-lg font-manrope leading-8">
                    Client Understanding: Direct communication with the client
                    informs a design that meets their unique desires and
                    lifestyle.
                  </li>
                  <li className="text-lg font-manrope leading-8">
                    Creative Exploration: I explore creativity without limits,
                    experimenting with a mix of materials, textures, and colors.
                  </li>
                  <li className="text-lg font-manrope leading-8">
                    Tech-Forward Design: Leveraging 3D modeling and virtual
                    reality, I offer clients a preview of their future spaces in
                    advance.
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
                    className="w-[36px] h-[36px] flex justify-center items-center hover:text-[#4c4037] duration-300"
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
                  We have impactful results
                </h2>
                <p className="text-[16px] font-manrope text-[#957f72] leading-[32px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam
                </p>
              </div>

              <div className="flex flex-wrap gap-[60px] max-w-[387px]">
                <div className="flex flex-col w-[calc(50%-35px)]">
                  <span className="text-[48px] text-[#4c4037]">150+</span>
                  <span className="text-[18px] font-manrope text-[#957f72] leading-[32px] whitespace-nowrap">
                    Successful Projects
                  </span>
                </div>

                <div className="flex flex-col w-[calc(50%-35px)]">
                  <span className="text-[48px] text-[#4c4037]">20+</span>
                  <span className="text-[18px] font-manrope text-[#957f72] leading-[32px] whitespace-nowrap">
                    Award Winnings
                  </span>
                </div>

                <div className="flex flex-col w-[calc(50%-35px)]">
                  <span className="text-[48px] text-[#4c4037]">99%</span>
                  <span className="text-[18px] font-manrope text-[#957f72] leading-[32px] whitespace-nowrap">
                    Satisfaction rate
                  </span>
                </div>

                <div className="flex flex-col w-[calc(50%-35px)]">
                  <span className="text-[48px] text-[#4c4037]">15+</span>
                  <span className="text-[18px] font-manrope text-[#957f72] leading-[32px] whitespace-nowrap">
                    Years Of Experience
                  </span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-[32px] sm:text-[46px] md:text-[56px] lg:text-[64px] font-playfair font-bold text-[#4c4037]">
            Have any questions?
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
    </Layout>
  );
}
