import Cloud from "@/components/3DCloud/3DCloud";
import Container from "@/components/container";
import Layout from "@/components/layout";
import Slider from "@/components/Slider/slider";
import {
  Box,
  Flex,
  Img,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Head from "next/head";
import Designer from "../../public/images/about/hero.jpg";
import {
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

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
          <div className="w-full max-w-[1280px] mx-auto px-4 md:px-0 ">
            <Box
              bgColor={"rgba(249, 241, 236, 0.7)"}
              p="16px 24px"
              pos={"absolute"}
              top={"100px"}
              left={"340px"}
            >
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
          <Flex flexWrap={"nowrap"} gap={"40px"} justifyContent={"center"}>
            <Img alt="author" src={Designer.src} maxW={"608px"} />
            <Flex flexDir={"column"} gap={"20px"}>
              <Text
                fontFamily={"Playfair Display"}
                fontSize={"86px"}
                color={"#4c4037"}
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
                  fontSize="16px"
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
          </Flex>
        </div>
      </Box>

      {/* <Head>
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

               
                <div className="flex justify-center overflow-hidden">
                    <Cloud />
                </div>

            </main> */}
    </Layout>
  );
}
