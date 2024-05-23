import Container from "@/components/container";
import Footer from "@/components/footer";
import Layout from "@/components/layout";

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
    cursor: "pointer",
    _hover: {
      color: "#4c4037",
      border: "1px solid #4c4037",
    },
  };

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
                    Get in touch
                  </p>
                </div>

                <p className="text-[#957f72] font-light text-[18px] max-w-[512px] mt-[20px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare.
                </p>
              </div>
              <div className="justify-end flex flex-col gap-[8px]">
                <div className="mt-5  md:mt-0 ">
                  <p className="text-[#957f72] text-[16px]">Follow us:</p>
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
              placeholder="Full Name"
              name="fullName"
              onChange={handleInputChange}
            />
            <input
              className="px-8 py-4 w-full placeholder-gray-400 text-18px text-[#b6a497] border border-solid border-[#e6e6e6] hover:border-[#b6a497] focus:border-[#b6a497]"
              type="email"
              placeholder="Email Address"
              name="emailAddress"
              onChange={handleInputChange}
            />
            <input
              className="px-8 py-4 w-full placeholder-gray-400 text-18px text-[#b6a497] border border-solid border-[#e6e6e6] hover:border-[#b6a497] focus:border-[#b6a497] required"
              type="tel"
              placeholder="Phone Number"
              name="phoneNumber"
              onChange={handleInputChange}
              value={formData.phoneNumber}
            />
            <textarea
              className="px-8 py-4 w-full placeholder-gray-400 text-18px text-[#b6a497] border border-solid border-[#e6e6e6] hover:border-[#b6a497] focus:border-[#b6a497] min-h-[176px]"
              placeholder="Message..."
              name="message"
              onChange={handleInputChange}
            ></textarea>
            <div className="ml-auto">
              <button
                type="submit"
                className="btn justify-center bg-brown text-white text-center uppercase px-6 py-4 my-12 lg:my-6"
              >
                Send
              </button>
            </div>
          </form>
        </Container>
      </div>
      <Footer />
    </Layout>
  );
}
