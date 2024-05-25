import Container from "@/components/container";
import Layout from "@/components/layout";

import Footer from "@/components/footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import CustomFurniture from "../../public/images/1.jpg";
import CustomFurniture_2 from "../../public/images/2.jpg";
import CustomFurniture_3 from "../../public/images/3.jpg";
import { performRequest } from "@/lib/datocms";

export default function Home() {
  const [pageContent, setPageContent] = useState(null);
  const targetRef = useRef(null);
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  // ---------------------------------------------------

  useEffect(() => {
    async function fetchData() {
      try {
        const query = `
                      query {
                        allServices(fallbackLocales: en, locale: en) {
                          _allBtn2Locales(fallbackLocales: en) {
                            locale
                            value
                          }
                          _allBtnLocales(fallbackLocales: en) {
                            locale
                            value
                          }
                          _allBtn3Locales(fallbackLocales: en) {
                            locale
                            value
                          }
                          _allDesc2Locales(fallbackLocales: en, markdown: false) {
                            locale
                            value
                          }
                          _allDesc3Locales(fallbackLocales: en) {
                            locale
                            value
                          }
                          _allDescLocales(fallbackLocales: en) {
                            locale
                            value
                          }
                          _allDescriptionLocales(fallbackLocales: en) {
                            locale
                            value
                          }
                          _allHeaderLocales(fallbackLocales: en) {
                            locale
                            value
                          }
                          _allHorizontalTitle3Locales(fallbackLocales: en) {
                            locale
                            value
                          }
                          _allHorizontalTitle2Locales(fallbackLocales: en) {
                            locale
                            value
                          }
                          _allHorizontalTitleLocales(fallbackLocales: en) {
                            locale
                            value
                          }
                          _allTitle2Locales(fallbackLocales: en) {
                            locale
                            value
                          }
                          _allTitle3Locales(fallbackLocales: en) {
                            locale
                            value
                          }
                          _allTitleLocales(fallbackLocales: en) {
                            locale
                            value
                          }
                          btn(fallbackLocales: en, locale: en)
                          btn2(locale: en, fallbackLocales: en)
                          btn3(fallbackLocales: en, locale: en)
                          desc(fallbackLocales: en, locale: en)
                          desc2(locale: en, fallbackLocales: en)
                          desc3(fallbackLocales: en, locale: en)
                          description(fallbackLocales: en, locale: en)
                          header(fallbackLocales: en, locale: en)
                          horizontalTitle2(fallbackLocales: en, locale: en)
                          horizontalTitle(fallbackLocales: en, locale: en)
                          horizontalTitle3(fallbackLocales: en, locale: en)
                          img {
                            alt(locale: en, fallbackLocales: en)
                            url
                            title
                            size
                          }
                          img2 {
                            alt(fallbackLocales: en, locale: en)
                            size
                            url
                            title
                          }
                          img3 {
                            alt(fallbackLocales: en, locale: en)
                            url
                            title
                          }
                          title(fallbackLocales: en, locale: en)
                          title2(fallbackLocales: en, locale: en)
                          title3(fallbackLocales: en, locale: en)
                        }
                      }
                  `;
        const { data } = await performRequest({ query: query });

        if (data.allServices) {
          setPageContent(data?.allServices[0]);
        } else {
          console.error("Post not found");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
      }
    }

    fetchData();
    // }
  }, []);
  console.log(pageContent);
  // -------------------------------------------------------
  return (
    <Layout>
      <div className="bg-[#f9f1ec] flex justify-center items-center">
        <Container>
          <div className="flex flex-col py-[80px] lg:py-[128px]">
            <motion.section
              ref={targetRef}
              className="flex gap-[8px] items-center"
            >
              <motion.p
                className="text-mobile-lg sm:text-7xl lg:text-9xl text-[#4c4037]"
                initial={{ x: -500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                  damping: 20,
                  duration: 3,
                }}
              >
                &mdash;
              </motion.p>
              <motion.p
                className="text-mobile-lg sm:text-9xl lg:text-xxl text-[#4c4037]"
                initial={{ x: -500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                  damping: 20,
                  duration: 3,
                }}
              >
                {pageContent?.header}
              </motion.p>
            </motion.section>
            <p className="text-[18px] text-[#957f72] font-light max-w-[512px] mt-[24px]">
              {pageContent?.description}
            </p>
          </div>
          <div className="bg-[#f9f1ec] justify-center items-center">
            <Container>
              <div className="container mx-auto p-4 lg:mb-[128px]">
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
                      className="font-normal tracking-wider self-center text-[32px] sm:text-[46px] font-playfair text-[#4c4037] transform -rotate-90 whitespace-nowrap"
                    >
                      {pageContent?.horizontalTitle}
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
                      {pageContent?.title}
                    </p>
                    <p
                      className="font-playfair text-[18px] text-[#4c4037]"
                      style={{ fontFamily: "Manrope", maxWidth: "384px" }}
                    >
                      {pageContent?.desc}
                    </p>
                    <p
                      className="font-playfair text-[10px] text-[#4c4037] border-b border-solid border-black py-[16px] mt-6 cursor-pointer"
                      style={{
                        fontFamily: "Manrope",
                        maxWidth: "105px",
                        letterSpacing: "3px",
                      }}
                    >
                      {pageContent?.btn}
                    </p>
                  </div>
                </div>
              </div>
              <div className="container mx-auto p-4 lg:mb-[128px]">
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
                      className="font-normal tracking-wider self-center text-[32px] sm:text-[46px] font-playfair text-[#4c4037] transform -rotate-90 whitespace-nowrap"
                    >
                      {pageContent?.horizontalTitle2}
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
                      {pageContent?.title2}
                    </p>
                    <p
                      className="font-playfair text-[18px] text-[#4c4037]"
                      style={{ fontFamily: "Manrope", maxWidth: "384px" }}
                    >
                      {pageContent?.desc2}
                    </p>
                    <p
                      className="font-playfair text-[10px] text-[#4c4037] border-b border-solid border-black py-[16px] mt-6 cursor-pointer"
                      style={{
                        fontFamily: "Manrope",
                        maxWidth: "105px",
                        letterSpacing: "3px",
                      }}
                    >
                      {pageContent?.btn2}
                    </p>
                  </div>
                </div>
              </div>
              <div className="container mx-auto p-4 lg:mb-[128px]">
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
                      className="font-normal tracking-wider self-center text-[32px] sm:text-[46px] font-playfair text-[#4c4037] transform -rotate-90 whitespace-nowrap"
                    >
                      {pageContent?.horizontalTitle3}
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
                      {pageContent?.title3}
                    </p>
                    <p
                      className="font-playfair text-[18px] text-[#4c4037]"
                      style={{ fontFamily: "Manrope", maxWidth: "384px" }}
                    >
                      {pageContent?.desc3}
                    </p>
                    <p
                      className="font-playfair text-[10px] text-[#4c4037] border-b border-solid border-black py-[16px] mt-6 cursor-pointer"
                      style={{
                        fontFamily: "Manrope",
                        maxWidth: "105px",
                        letterSpacing: "3px",
                      }}
                    >
                      {pageContent?.btn3}
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
