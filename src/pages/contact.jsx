import Container from "@/components/container";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import stylesWithCssVar from "@/utils/motion";
import { motion, useScroll, useTransform } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { SelectedKeysContext } from "./_app";

export default function Services() {
  const { contactsData } = useContext(SelectedKeysContext);
  const targetRef = useRef(null);
  const container = useRef(null);
  const ref = useRef(null);
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
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    message: "",
  });

  useEffect(() => {
    if (contactsData) {
      setPageContent(contactsData);
    }
  }, [contactsData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newValue = name === "phoneNumber" ? value.replace(/\D/g, "") : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Layout>
      <div
        className="bg-[#f9f1ec] justify-center items-center px-2 dark:bg-black"
        ref={container}
      >
        <Container>
          <div className="py-[96px] justify-between items-center h-[100%] w-[100%]">
            <div className="flex flex-col lg:flex-row justify-between w-full">
              <div className="flex flex-col">
                <motion.section
                  style={stylesWithCssVar({
                    opacity: opacitySection,
                    "--scale": scale,
                    "--opacity-border": opacityBorder,
                  })}
                  ref={targetRef}
                  className="flex gap-[8px] items-center"
                >
                  <motion.p
                    className="text-mobile-lg sm:text-7xl lg:text-9xl text-[#4c4037] dark:text-[#f1ccae] playFairFont "
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
                    className="text-mobile-lg sm:text-9xl lg:text-xxl text-[#4c4037] dark:text-[#f1ccae] playFairFont "
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

                <p className="text-[#957f72] dark:text-[#f1ccae] font-light text-[18px] max-w-[512px] mt-[20px] playFairFont ">
                  {pageContent?.label}
                </p>
              </div>
              <div className="justify-end flex flex-col gap-[8px]">
                <div className="mt-5 md:mt-0">
                  <p className="text-[#957f72] dark:text-[#f1ccae] text-[16px]">
                    {pageContent?.socialText}
                  </p>
                  <div className="flex gap-[8px] mt-[18px]">
                    <a
                      style={{
                        border: "1px solid #957f72",
                        borderRadius: "50%",
                      }}
                      className="hover-effect-contacts w-9 h-9 rounded-full text-[#957f72] dark:text-gray-300 flex justify-center items-center cursor-pointer hover:text-[#4c4037]"
                      href="https://www.facebook.com/grafinia3dpl"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      style={{
                        border: "1px solid #957f72",
                        borderRadius: "50%",
                      }}
                      className="hover-effect-contacts w-9 h-9 rounded-full text-[#957f72] dark:text-gray-300 flex justify-center items-center cursor-pointer hover:text-[#4c4037]"
                      href="https://www.twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      style={{
                        border: "1px solid #957f72",
                        borderRadius: "50%",
                      }}
                      className="hover-effect-contacts w-9 h-9 rounded-full text-[#957f72] dark:text-gray-300 flex justify-center items-center cursor-pointer hover:text-[#4c4037]"
                      href="https://www.youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaYoutube />
                    </a>
                    <a
                      style={{
                        border: "1px solid #957f72",
                        borderRadius: "50%",
                      }}
                      className="hover-effect-contacts w-9 h-9 rounded-full text-[#957f72] dark:text-gray-300 flex justify-center items-center cursor-pointer hover:text-[#4c4037]"
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedinIn />
                    </a>
                    <a
                      style={{
                        border: "1px solid #957f72",
                        borderRadius: "50%",
                      }}
                      className="hover-effect-contacts w-9 h-9 rounded-full text-[#957f72] dark:text-gray-300 flex justify-center items-center cursor-pointer hover:text-[#4c4037]"
                      href="https://www.instagram.com/grafinia.3d"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="p-5 sm:p-20 md:p-24 w-full h-auto bg-[#FFFFFF] dark:bg-[#261b11] flex flex-col justify-center items-center border border-gray-300 dark:border-gray-700 gap-12">
              <input
                className="dark:bg-[#b6a497] px-8 py-4 w-full placeholder-gray-400 dark:placeholder-[#261b11] text-18px text-[#b6a497] dark:text-[#261b11] border border-solid border-[#e6e6e6] dark:border-linen hover:border-[#b6a497] dark:hover:border-gray-400 focus:border-[#b6a497] dark:focus:border-gray-300"
                type="text"
                placeholder={pageContent?.placeholderName}
                name="fullName"
                onChange={handleInputChange}
              />
              <input
                className="dark:bg-[#b6a497] px-8 py-4 w-full placeholder-gray-400 dark:placeholder-[#261b11] text-18px text-[#b6a497] dark:text-gray-600 border border-solid border-[#e6e6e6] dark:border-linen hover:border-[#b6a497] dark:hover:border-gray-400 focus:border-[#b6a497] dark:focus:border-gray-300"
                type="email"
                placeholder={pageContent?.placeholderEmail}
                name="emailAddress"
                onChange={handleInputChange}
              />
              <input
                className="dark:bg-[#b6a497] px-8 py-4 w-full placeholder-gray-400 dark:placeholder-[#261b11] text-18px text-[#b6a497] dark:text-gray-600 border border-solid border-[#e6e6e6] dark:border-linen hover:border-[#b6a497] dark:hover:border-gray-400 focus:border-[#b6a497] dark:focus:border-gray-300 required"
                type="tel"
                placeholder={pageContent?.placeholderPhone}
                name="phoneNumber"
                onChange={handleInputChange}
                value={formData.phoneNumber}
              />
              <textarea
                className="dark:bg-[#b6a497] px-8 py-4 w-full placeholder-gray-400 dark:placeholder-[#261b11] text-18px text-[#b6a497] dark:text-gray-600 border border-solid border-[#e6e6e6] dark:border-linen hover:border-[#b6a497] dark:hover:border-gray-400 focus:border-[#b6a497] dark:focus:border-gray-300 min-h-[176px]"
                placeholder={pageContent?.message}
                name="message"
                onChange={handleInputChange}
              ></textarea>
              <div className="ml-auto">
                <button
                  type="submit"
                  className="btn justify-center bg-brown dark:bg-dark-brown text-white text-center uppercase px-6 py-4 my-12 lg:my-6 dark:bg-[#b6a497]"
                >
                  {pageContent?.btn}
                </button>
              </div>
            </div>
          </form>
        </Container>
      </div>
      <Footer />
    </Layout>
  );
}
