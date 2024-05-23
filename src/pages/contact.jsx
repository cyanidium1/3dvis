import Container from "@/components/container";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import { performRequest } from "@/lib/datocms";
import { useEffect } from "react";

import { useState } from "react";

import {
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

export default function Services() {
  const [pageContent, setPageContent] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    message: "",
  });
  // ----------------------------

  useEffect(() => {
    async function fetchData() {
      try {
        const query = `
                        query {
                          allContacts {
                            label(locale: en, fallbackLocales: en)
                            placeholderEmail(fallbackLocales: en, locale: en)
                            message
                            placeholderName(fallbackLocales: en, locale: en)
                            placeholderPhone(fallbackLocales: en, locale: en)
                            socialText(fallbackLocales: en, locale: en)
                            btn(fallbackLocales: en, locale: en)
                            _locales
                            header
                          }
                        }
                    `;
        const { data } = await performRequest({ query: query });
        if (data.allContacts) {
          // console.log(data);
          setPageContent(data?.allContacts[0]);
        } else {
          console.error("Post not found");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        // setLoading(false);
      }
    }

    fetchData();
    // }
  }, []);

  // ---------------------------------

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    const newValue = name === "phoneNumber" ? value.replace(/\D/g, "") : value;

    setFormData({ ...formData, [name]: newValue });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  // if (!pageContent) {
  //   return <div>Loading...</div>;
  // }

  return (
    <Layout>
      <div className="bg-[#f9f1ec] justify-center items-center px-[40px]">
        <Container>
          <div className="py-[96px] justify-between items-center h-[100%] w-[100%]">
            <div className="flex flex-col md:flex-row justify-between w-full">
              <div className="flex flex-col">
                <div className="flex gap-[8px] items-center">
                  <p className="text-mobile-lg sm:text-7xl lg:text-9xl text-[#4c4037]">
                    &mdash;
                  </p>
                  <p className="text-mobile-lg sm:text-9xl lg:text-xxl text-[#4c4037]">
                    {pageContent?.header}
                  </p>
                </div>

                <p className="text-[#957f72] font-light text-[18px] max-w-[512px] mt-[20px]">
                  {pageContent?.label}
                </p>
              </div>
              <div className="justify-end flex flex-col gap-[8px]">
                <div className="mt-5  md:mt-0 ">
                  <p className="text-[#957f72] text-[16px]">
                    {pageContent?.socialText}
                  </p>
                  <div className="flex gap-[8px] mt-[18px]">
                    <a
                      style={{
                        border: "1px solid #957f72",
                        borderRadius: "50%",
                      }}
                      className="w-9 h-9 rounded-full text-[#957f72] flex justify-center items-center cursor-pointer hover:text-[#4c4037]"
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
                      className="w-9 h-9 rounded-full text-[#957f72] flex justify-center items-center cursor-pointer hover:text-[#4c4037]"
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
                      className="w-9 h-9 rounded-full text-[#957f72] flex justify-center items-center cursor-pointer hover:text-[#4c4037]"
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
                      className="w-9 h-9 rounded-full text-[#957f72] flex justify-center items-center cursor-pointer hover:text-[#4c4037]"
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
                      className="w-9 h-9 rounded-full text-[#957f72] flex justify-center items-center cursor-pointer hover:text-[#4c4037]"
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

          <form
            className="p-5 sm:p-20 md:p-24 w-full h-auto bg-white flex flex-col justify-center items-center border border-gray-300 gap-12"
            onSubmit={handleSubmit}
          >
            <input
              className="px-8 py-4 w-full placeholder-gray-400 text-18px text-[#b6a497] border border-solid border-[#e6e6e6] hover:border-[#b6a497] focus:border-[#b6a497] required"
              type="text"
              placeholder={pageContent?.placeholderName}
              name="fullName"
              onChange={handleInputChange}
            />
            <input
              className="px-8 py-4 w-full placeholder-gray-400 text-18px text-[#b6a497] border border-solid border-[#e6e6e6] hover:border-[#b6a497] focus:border-[#b6a497]"
              type="email"
              placeholder={pageContent?.placeholderEmail}
              name="emailAddress"
              onChange={handleInputChange}
            />
            <input
              className="px-8 py-4 w-full placeholder-gray-400 text-18px text-[#b6a497] border border-solid border-[#e6e6e6] hover:border-[#b6a497] focus:border-[#b6a497] required"
              type="tel"
              placeholder={pageContent?.placeholderPhone}
              name="phoneNumber"
              onChange={handleInputChange}
              value={formData.phoneNumber}
            />
            <textarea
              className="px-8 py-4 w-full placeholder-gray-400 text-18px text-[#b6a497] border border-solid border-[#e6e6e6] hover:border-[#b6a497] focus:border-[#b6a497] min-h-[176px]"
              placeholder={pageContent?.message}
              name="message"
              onChange={handleInputChange}
            ></textarea>
            <div className="ml-auto">
              <button
                type="submit"
                className="btn justify-center bg-brown text-white text-center uppercase px-6 py-4 my-12 lg:my-6"
              >
                {pageContent?.btn}
              </button>
            </div>
          </form>
        </Container>
      </div>
      <Footer />
    </Layout>
  );
}
