import Cloud from "@/components/3DCloud/3DCloud";
import Container from "@/components/container";
import Layout from "@/components/layout";
import Slider from "@/components/Slider/slider";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Grid,
  Img,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

import Head from "next/head";
import Designer from "../../public/images/about/hero.jpg";
import {
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaPlus,
} from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { LuPlus } from "react-icons/lu";
import { Image } from "@nextui-org/react";

const dataFAQ = [
  {
    title: "How many years of experience do your firm has?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.",
  },
  {
    title: "How big is your team of architects?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.",
  },
  {
    title: "Does your firm have a project minimum?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.",
  },
  {
    title: "Can I cancel my project at any time?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.",
  },
];

export default function Home() {
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
      <div pos={"relative"} bgColor={"#f9f1ec"}>
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
              <UnorderedList color="#957f72">
                My approach to work:
                <ListItem
                  fontSize="16px"
                  fontFamily="Manrope"
                  color="#957f72"
                  lineHeight="32px"
                >
                  Client Understanding: Direct communication with the client
                  informs a design that meets their unique desires and
                  lifestyle.
                </ListItem>
                <ListItem
                  fontSize="16px"
                  fontFamily="Manrope"
                  color="#957f72"
                  lineHeight="32px"
                >
                  Creative Exploration: I explore creativity without limits,
                  experimenting with a mix of materials, textures, and colors.
                </ListItem>
                <ListItem
                  fontSize={"16px"}
                  fontFamily="Manrope"
                  color="#957f72"
                  lineHeight="32px"
                >
                  Tech-Forward Design: Leveraging 3D modeling and virtual
                  reality, I offer clients a preview of their future spaces in
                  advance.
                </ListItem>
              </UnorderedList>

              <Flex justifyContent={"flex-end"} flexDir={"column"} gap={"8px"}>
                <div className="mt-9  md:mt-0 ">
                  <Flex gap={"10px"}>
                    <Flex
                      {...stylingSocials}
                      as="a"
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebookF />
                    </Flex>
                    <Flex
                      {...stylingSocials}
                      as="a"
                      href="https://www.twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter />
                    </Flex>
                    <Flex
                      {...stylingSocials}
                      as="a"
                      href="https://www.youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaYoutube />
                    </Flex>
                    <Flex
                      {...stylingSocials}
                      as="a"
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedinIn />
                    </Flex>
                    <Flex
                      {...stylingSocials}
                      as="a"
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram />
                    </Flex>
                  </Flex>
                </div>
              </Flex>
            </div>
          </div>

          <Flex className="flex flex-col justify-between py-[80px] lg:py-[128px]">
            <div className="w-full flex flex-col xl:flex-row gap-20 justify-between">
              <Flex flex={"50%"} flexDir={"column"} maxW={"512px"}>
                <Text className="text-[46px] sm:text-[64px] font-playfair font-bold text-[#4c4037]">
                  We have impactful results
                </Text>
                <Text
                  fontSize={"16px"}
                  fontFamily="Manrope"
                  color="#957f72"
                  lineHeight="32px"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam
                </Text>
              </Flex>
              <Flex wrap="wrap" gap="60px" maxW={"387px"}>
                <Flex flexDir="column" w="calc(50% - 35px)">
                  <Text fontSize="48px" color={"#4c4037"}>
                    150+
                  </Text>
                  <Text
                    fontSize="18px"
                    fontFamily="Manrope"
                    color="#957f72"
                    lineHeight="32px"
                    whiteSpace={"nowrap"}
                  >
                    Successful Projects
                  </Text>
                </Flex>

                <Flex flexDir="column" w="calc(50% - 35px)">
                  <Text fontSize="48px" color={"#4c4037"}>
                    20+
                  </Text>
                  <Text
                    fontSize="18px"
                    fontFamily="Manrope"
                    color="#957f72"
                    lineHeight="32px"
                    whiteSpace={"nowrap"}
                  >
                    Award Winnings
                  </Text>
                </Flex>

                <Flex flexDir="column" w="calc(50% - 35px)">
                  <Text fontSize="48px" color={"#4c4037"}>
                    99%
                  </Text>
                  <Text
                    fontSize="18px"
                    fontFamily="Manrope"
                    color="#957f72"
                    lineHeight="32px"
                    whiteSpace={"nowrap"}
                  >
                    Satisfaction rate
                  </Text>
                </Flex>

                <Flex flexDir="column" w="calc(50% - 35px)">
                  <Text fontSize="48px" color={"#4c4037"}>
                    15+
                  </Text>
                  <Text
                    fontSize="18px"
                    fontFamily="Manrope"
                    color="#957f72"
                    lineHeight="32px"
                    whiteSpace={"nowrap"}
                  >
                    Years Of Experience
                  </Text>
                </Flex>
              </Flex>
            </div>
          </Flex>
          <Text className="text-[32px] sm:text-[46px] md:text-[56px] lg:text-[64px] font-playfair font-bold text-[#4c4037]">
            Have any questions?
          </Text>
          <Accordion allowMultiple w={"100%"} p={"0px"}>
            {dataFAQ.map((faq, index) => (
              <AccordionItem key={index}>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton
                        w={"100%"}
                        borderBottom={"2px solid #e5d9cf"}
                      >
                        <Flex
                          fontFamily={"Manrope"}
                          fontSize={["16px", "18px", "20px"]}
                          className="text-[16px] sm:text-[18px]8lg:text-[20px] py-[60px] lg:py-[80px]px-[8px] lg:px-[16px]"
                          textAlign={"start"}
                          lineHeight={1.4}
                          color="#4c4037"
                          justifyContent={"flex-start"}
                          w={"100%"}
                          fontWeight={600}
                        >
                          {faq.title}
                        </Flex>
                        <Flex
                          alignItems={"center"}
                          justifyContent={"center"}
                          className="w-[56px] lg:w-[72px] h-[56px] lg:h-[72px]"
                          border="1px solid #e5d9cf"
                        >
                          {isExpanded ? (
                            <IoClose size="36px" color="#957f72" />
                          ) : (
                            <LuPlus size="36px" color="#957f72" />
                          )}
                        </Flex>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      maxW={"768px"}
                      fontFamily={"Manrope"}
                      fontSize={"1rem"}
                      color="#957f72"
                      p={"32px 40px 40px"}
                    >
                      {faq.desc}
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Layout>
  );
}
