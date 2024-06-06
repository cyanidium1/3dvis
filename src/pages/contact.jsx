import { useContext, useEffect, useRef, useState } from "react";
import Container from "@/components/container";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import Loader from "@/components/loader";
import SocialMediaLinks from "@/components/SocialMediaLinks";
import { SelectedKeysContext } from "./_app";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaInstagram, FaBehance, FaFacebookSquare, FaTiktok } from "react-icons/fa";
import ContactForm from "@/components/contactForm";

export default function Services() {
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
  const { contactsData } = useContext(SelectedKeysContext);
  const targetRef = useRef(null);
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const opacitySection = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.1, 0.7], [1, 0.7]);
  const opacityBorder = useTransform(
    scrollYProgress,
    [0.7, 0.71, 0.72],
    [1, 1, 0]
  );

  const [pageContent, setPageContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (contactsData) {
      setPageContent(contactsData);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, [contactsData]);

  return (
    <Layout>
      {isLoading ? (
        <div className="loader-wrapper">
          <Loader />
        </div>
      ) : (
        <div
          className="bg-[#f9f1ec] justify-center items-center px-2 dark:bg-black"
          ref={container}
        >
          <Container>
            <div className="py-[96px] justify-between items-center h-[100%] w-[100%]">
              <div className="flex flex-col lg:flex-row justify-between w-full">
                <div className="flex flex-col">
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
                      <span> &mdash;</span> {pageContent?.header}
                    </motion.p>
                  </motion.section>

                  <div className="text-[#957f72] dark:text-[#f1ccae] font-light text-[18px] max-w-[512px] mt-[20px] playFairFont ">
                    <p>
                      {pageContent?.label}
                    </p>
                    <p className="pt-2 font-semibold text-xl hover:text-light-brown transition-colors duration-300">
                      <a href="mailto:graph3dpro@gmail.com">graph3dpro@gmail.com</a>
                    </p>
                    <p className="pt-2 font-semibold text-xl hover:text-light-brown transition-colors duration-300">
                      <a href="tel:+48660966375">+48 (66) 096 6375</a>
                    </p>
                  </div>
                </div>
                <div className="justify-end flex flex-col gap-[8px]">
                  <div className="mt-5 md:mt-0">
                    <p className="text-[#957f72] dark:text-[#f1ccae] text-[16px]">
                      {pageContent?.socialText}

                    </p>
                    <SocialMediaLinks data={socialMediaLinks} />
                  </div>
                </div>
              </div>
            </div>

            <ContactForm pageContent={pageContent} />

          </Container>
        </div>
      )}
      <Footer />
    </Layout>
  );
}
