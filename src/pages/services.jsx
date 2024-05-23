import Carousel from "@/components/Carousel/carousel";
import Container from "@/components/container";
import Layout from "@/components/layout";
import Loader from "@/components/loader";
import Navbar from "@/components/navbar";

import Head from "next/head";
import CustomFurniture from "../../public/images/1.jpg";
import CustomFurniture_2 from "../../public/images/2.jpg";
import CustomFurniture_3 from "../../public/images/3.jpg";
import Footer from "@/components/footer";
import { Image } from "@nextui-org/react";

export default function Home() {
  return (
    <Layout>
      <div className="bg-[#f9f1ec] flex justify-center items-center">
        <Container>
          <div className="flex flex-col py-[80px] lg:py-[128px]">
            <div className="flex items-center gap-[8px] justify-center md:justify-start">
              <p className="text-mobile-lg sm:text-7xl lg:text-9xl text-[#4c4037]">
                &mdash;
              </p>
              <p className="text-mobile-lg sm:text-9xl lg:text-xxl text-[#4c4037]">
                Services
              </p>
            </div>

            <p className="text-[18px] text-[#957f72] font-light max-w-[512px] mt-[24px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
          </div>
          <div className="bg-[#f9f1ec] justify-center items-center">
            <Container>
              <div className="container mx-auto p-4 lg:mb-[128px]">
                <div className="grid grid-cols-[2fr_30px_2fr] md:grid-cols-[2fr_85px_2fr] items-stretch">
                  <div className="col-span-1 ">
                    <Image
                      alt="author"
                      src={CustomFurniture.src}
                      maxW={"502px"}
                      maxH={"502px"}
                      minW={"239px"}
                      w={"100%"}
                      objectFit={"cover"}
                      className="mx-auto xl:mx-0"
                    />
                  </div>

                  <div className="col-span-1 flex flex-col justify-center ml-8 md:ml-0 ">
                    <span
                      style={{ fontFamily: "Playfair Display" }}
                      className="font-normal tracking-wider self-center text-[32px] sm:text-[46px] font-playfair text-[#4c4037] transform -rotate-90 whitespace-nowrap"
                    >
                      Custom Furniture
                    </span>
                  </div>

                  <div className="col-start-1 col-end-4 md:col-auto self-center lg:ml-20 mt-6 lg:mt-0">
                    <p
                      className="text-[10px] text-[#4c4037]"
                      style={{ fontFamily: "Manrope" }}
                    >
                      01
                    </p>
                    <p
                      className="font-playfair text-[40px] text-[#4c4037]"
                      style={{ fontFamily: "Playfair Display" }}
                    >
                      Details
                    </p>
                    <p
                      className="font-playfair text-[18px] text-[#4c4037]"
                      style={{ fontFamily: "Manrope", maxWidth: "384px" }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero.
                    </p>
                    <p
                      className="font-playfair text-[10px] text-[#4c4037] border-b border-solid border-black py-[16px] mt-6 cursor-pointer"
                      style={{
                        fontFamily: "Manrope",
                        maxWidth: "105px",
                        letterSpacing: "3px",
                      }}
                    >
                      GET IN TOUCH
                    </p>
                  </div>
                </div>
              </div>
              <div className="container mx-auto p-4 lg:mb-[128px]">
                <div className="grid grid-cols-[2fr_30px_2fr] md:grid-cols-[2fr_85px_2fr] items-stretch">
                  <div className="col-span-1 ">
                    <Image
                      alt="author"
                      src={CustomFurniture_2.src}
                      maxW={"502px"}
                      maxH={"502px"}
                      minW={"239px"}
                      w={"100%"}
                      objectFit={"cover"}
                      className="mx-auto xl:mx-0"
                    />
                  </div>

                  <div className="col-span-1 flex flex-col justify-center ml-8 md:ml-0 ">
                    <span
                      style={{ fontFamily: "Playfair Display" }}
                      className="font-normal tracking-wider self-center text-[32px] sm:text-[46px] font-playfair text-[#4c4037] transform -rotate-90 whitespace-nowrap"
                    >
                      Furniture Layouts
                    </span>
                  </div>

                  <div className="col-start-1 col-end-4 md:col-auto self-center lg:ml-20 mt-6 lg:mt-0">
                    <p
                      className="text-[10px] text-[#4c4037]"
                      style={{ fontFamily: "Manrope" }}
                    >
                      02
                    </p>
                    <p
                      className="font-playfair text-[40px] text-[#4c4037]"
                      style={{ fontFamily: "Playfair Display" }}
                    >
                      Details
                    </p>
                    <p
                      className="font-playfair text-[18px] text-[#4c4037]"
                      style={{ fontFamily: "Manrope", maxWidth: "384px" }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero.
                    </p>
                    <p
                      className="font-playfair text-[10px] text-[#4c4037] border-b border-solid border-black py-[16px] mt-6 cursor-pointer"
                      style={{
                        fontFamily: "Manrope",
                        maxWidth: "105px",
                        letterSpacing: "3px",
                      }}
                    >
                      GET IN TOUCH
                    </p>
                  </div>
                </div>
              </div>
              <div className="container mx-auto p-4 lg:mb-[128px]">
                <div className="grid grid-cols-[2fr_30px_2fr] md:grid-cols-[2fr_85px_2fr] items-stretch">
                  <div className="col-span-1 ">
                    <Image
                      alt="author"
                      src={CustomFurniture_3.src}
                      maxW={"502px"}
                      maxH={"502px"}
                      minW={"239px"}
                      w={"100%"}
                      objectFit={"cover"}
                      className="mx-auto xl:mx-0"
                    />
                  </div>

                  <div className="col-span-1 flex flex-col justify-center ml-8 md:ml-0 ">
                    <span
                      style={{ fontFamily: "Playfair Display" }}
                      className="font-normal tracking-wider self-center text-[32px] sm:text-[46px] font-playfair text-[#4c4037] transform -rotate-90 whitespace-nowrap"
                    >
                      Space Planning
                    </span>
                  </div>

                  <div className="col-start-1 col-end-4 md:col-auto self-center lg:ml-20 mt-6 lg:mt-0">
                    <p
                      className="text-[10px] text-[#4c4037] tracking-widest uppercase"
                      style={{ fontFamily: "Manrope" }}
                    >
                      03
                    </p>
                    <p
                      className="font-playfair text-[40px] text-[#4c4037]"
                      style={{ fontFamily: "Playfair Display" }}
                    >
                      Details
                    </p>
                    <p
                      className="font-playfair text-[18px] text-[#4c4037]"
                      style={{ fontFamily: "Manrope", maxWidth: "384px" }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero.
                    </p>
                    <p
                      className="font-playfair text-[10px] text-[#4c4037] border-b border-solid border-black py-[16px] mt-6 cursor-pointer"
                      style={{
                        fontFamily: "Manrope",
                        maxWidth: "105px",
                        letterSpacing: "3px",
                      }}
                    >
                      GET IN TOUCH
                    </p>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </Container>
      </div>{" "}
      <Footer />
    </Layout>
  );
}
