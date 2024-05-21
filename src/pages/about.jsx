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
  };

  return (
    <Layout>
      <Box pos={"relative"} bgColor={"#f9f1ec"}>
        <div className="w-full mx-auto px-4 md:px-0 py-4 sm:py-16">
          <Slider />
          <div className="w-full max-w-[1280px] mx-auto px-4 md:px-2 ">
            <Box className="absolute top-[100px] left-2 md:left-[80px] xl:left-[200px] bg-[rgba(249,241,236,0.7)] p-[16px_24px]">
              <Text
                color={"#4c4037"}
                fontSize={"36px"}
                fontFamily={"Playfair Display"}
              >
                About Us
              </Text>
            </Box>
          </div>
        </div>
        <div className="mx-auto max-w-[1280px] px-4 md:px-0 py-4 sm:py-16">
          <div className="flex flex-col xl:flex-row gap-20 p-2 ">
            <Img
              alt="author"
              src={Designer.src}
              maxW={"608px"}
              w={"100%"}
              objectFit={"contain"}
              className="mx-auto xl:mx-0"
            />
            <Flex flexDir={"column"} gap={"20px"} p={"20px"}>
              <Text
                className="font-playfair font-bold text-[#4c4037] whitespace-normal 
             lg:whitespace-nowrap text-[32px] sm:text-[46px] md:text-[56px] lg:text-[64px]"
              >
                Helena Karaliok
              </Text>

              <Text as="cite" color="#957f72" fontSize={"20px"}>
                Interior Designer
              </Text>
              <Text
                fontSize="16px"
                fontFamily="Manrope"
                color="#957f72"
                lineHeight="32px"
              >
                With every new project, I strive not only to create a beautiful
                and cozy interior, but also to reflect the individuality of the
                client to the fullest, materializing their notions of comfort
                and functionality. It's important to me that the design is not
                only visually appealing but also practical for everyday life.
              </Text>
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
                    <Flex {...stylingSocials}>
                      <FaFacebookF />
                    </Flex>
                    <Flex {...stylingSocials}>
                      <FaTwitter />
                    </Flex>
                    <Flex {...stylingSocials}>
                      <FaYoutube />
                    </Flex>
                    <Flex {...stylingSocials}>
                      <FaLinkedinIn />
                    </Flex>
                    <Flex {...stylingSocials}>
                      <FaInstagram />
                    </Flex>
                  </Flex>
                </div>
              </Flex>
            </Flex>
          </div>

          <Flex className="flex flex-col justify-center items-center py-[80px] lg:py-[128px]">
            <div className="w-full flex flex-col xl:flex-row gap-20 items-center justify-center">
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
          <Accordion allowMultiple w={"100%"} p={"0px"} maxW={"1024px"}>
            {dataFAQ.map((faq, index) => (
              <AccordionItem key={index}>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton w={"100%"}>
                        <Flex
                          fontFamily={"Manrope"}
                          fontSize={["16px", "18px", "20px"]}
                          className="text-[16px] sm:text-[18px]8lg:text-[20px] py-[60px] lg:py-[80px]px-[8px] lg:px-[16px]"
                          textAlign={"start"}
                          lineHeight={1.4}
                          color="#4c4037"
                          borderBottom={"2px solid #e5d9cf"}
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
      </Box>
    </Layout>
  );
}
