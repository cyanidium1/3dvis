import Container from "@/components/container";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import { Box, Button, Flex, Input, Text, Textarea } from "@chakra-ui/react";
import { useState } from "react";

import {
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

export default function Services() {
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    const newValue = name === "phoneNumber" ? value.replace(/\D/g, "") : value;

    setFormData({ ...formData, [name]: newValue });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

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
      <Flex bgColor={"#f9f1ec"} justify={"center"} alignItems={"center"}>
        <Container>
          <Flex
            py={"96px"}
            justifyContent={"center"}
            alignItems={"center"}
            h={"100%"}
            w={"100%"}
          >
            <div className="flex flex-col md:flex-row  ">
              <Flex flexDir={"column"}>
                <Flex gap={"8px"} alignItems={"center"}>
                  <Text className="text-mobile-lg sm:text-7xl lg:text-9xl text-[#4c4037]">
                    &mdash;
                  </Text>
                  <Text className="text-mobile-lg sm:text-9xl lg:text-xxl text-[#4c4037]">
                    Get in touch
                  </Text>
                </Flex>

                <Text
                  fontSize={"18px"}
                  color="#957f72"
                  fontWeight={300}
                  maxW={"512px"}
                  mt={"20px"}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare.
                </Text>
              </Flex>
              <Flex justifyContent={"flex-end"} flexDir={"column"} gap={"8px"}>
                <div className="mt-5  md:mt-0 ">
                  <Text
                    alignSelf={"flex-start"}
                    color={"#957f72"}
                    fontSize={"16px"}
                  >
                    Follow us:
                  </Text>
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
            </div>
          </Flex>

          <Flex
            as={"form"}
            p={"80px 96px"}
            w={"100%"}
            h={"auto"}
            bgColor={"white"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            border={"1px solid #e6e6e6"}
            gap={"50px"}
            onSubmit={handleSubmit}
          >
            <Input
              p={"16px 32px"}
              border={"1px solid #e6e6e6"}
              w={"100%"}
              placeholder="Full Name"
              _placeholder={{ fontSize: "18px" }}
              fontSize={"18px"}
              color={" #b6a497"}
              _hover={{ border: "1px solid #b6a497" }}
              _focus={{ border: "1px solid #b6a497" }}
              name="fullName"
              onChange={handleInputChange}
              required
            />
            <Input
              p={"16px 32px"}
              border={"1px solid #e6e6e6"}
              w={"100%"}
              placeholder="Email Address"
              _placeholder={{ fontSize: "18px" }}
              fontSize={"18px"}
              color={" #b6a497"}
              _hover={{ border: "1px solid #b6a497" }}
              _focus={{ border: "1px solid #b6a497" }}
              name="emailAddress"
              onChange={handleInputChange}
            />
            <Input
              p={"16px 32px"}
              required
              border={"1px solid #e6e6e6"}
              w={"100%"}
              placeholder="Phone Number"
              _placeholder={{ fontSize: "18px" }}
              fontSize={"18px"}
              color={" #b6a497"}
              _hover={{ border: "1px solid #b6a497" }}
              _focus={{ border: "1px solid #b6a497" }}
              name="phoneNumber"
              onChange={handleInputChange}
              value={formData.phoneNumber}
            />
            <Textarea
              placeholder="Message..."
              minH="176px"
              p={"16px 32px"}
              border={"1px solid #e6e6e6"}
              w={"100%"}
              _placeholder={{ fontSize: "18px" }}
              fontSize={"18px"}
              color={" #b6a497"}
              _hover={{ border: "1px solid #b6a497" }}
              _focus={{ border: "1px solid #b6a497" }}
              name="message"
              onChange={handleInputChange}
            />
            <Flex mr="auto" color={"white"}>
              <Button
                maxW={"90px"}
                h={"48px"}
                bgColor={"#4c4037"}
                p="16px 24px"
                type="submit"
              >
                Send
              </Button>
            </Flex>
          </Flex>
        </Container>
      </Flex>
      <Footer />
    </Layout>
  );
}
