// import Link from "next/link";
import Container from "./container";
import { FaCube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import { NavbarBrand, Link, Image } from "@nextui-org/react";
import CustomFurniture from "../../public/images/1.jpg";
import CustomFurniture_2 from "../../public/images/2.jpg";
import CustomFurniture_3 from "../../public/images/3.jpg";
import { useContext, useEffect, useRef, useState } from "react";
import stylesWithCssVar from "@/utils/motion";
import Layout from "./layout";
import { SelectedKeysContext } from "@/pages/_app";
import SocialMediaLinks from "./SocialMediaLinks";

import { FaPhoneAlt } from "react-icons/fa";

function Footer({ theme }) {
  const { footerData } = useContext(SelectedKeysContext);
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });
  const [pageContent, setPageContent] = useState(null);
  const opacitySection = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.1, 0.7], [1, 0.7]);

  const opacityBorder = useTransform(
    scrollYProgress,
    [0.7, 0.71, 0.72],
    [1, 1, 0]
  );

  const socialMediaLinks = [
    {
      href: "https://www.facebook.com/graph3d.pro",
      icon: <FaFacebookSquare />,
    },
    {
      href: "https://www.behance.net/helenakaraliok",
      icon: <FaBehance size={20} />,
    },
    {
      href: "https://www.Instagram.com/graph3d.pro",
      icon: <FaInstagram size={20} />,
    },
    {
      href: "https://www.tiktok.com/@graph3d.pro",
      icon: <FaTiktok size={20} />,
    },
  ];
  const navigationLinks = [
    { name: pageContent?.link1, href: "/" },
    { name: pageContent?.link2, href: "/portfolio" },
    { name: pageContent?.link3, href: "/services" },
    { name: pageContent?.link4, href: "/about" },
    { name: pageContent?.link5, href: "/contact" },
  ];
  useEffect(() => {
    if (footerData) {
      setPageContent(footerData?.footer);
    }
  }, [footerData]);

  return (
    <Layout>
      <footer
        className={`${
          theme === "dark"
            ? "bg-black "
            : "bg-[#f9f1ec] dark:bg-black text-[#4c4037] dark:text-[#f1ccae]"
        } py-6 center ]`}
      >
        <Container>
          <div className="flex-col md:flex-row flex gap-[30px] w-[100%] justify-between ">
            <div className="flex flex-col ">
              <div className="mb-[30px]">
                <Link href="/">
                  <FaCube size={27} />
                  <p className="text-inherit text-3xl ml-2 ">Graph3D.PRO</p>
                </Link>
              </div>

              <p
                className="text-[16px] "
                style={{ fontFamily: "Manrope", maxWidth: "384px" }}
              >
                {pageContent?.description}
              </p>
              <SocialMediaLinks data={socialMediaLinks} />

              <p className="mt-4 text-xl hover:text-light-brown transition-colors duration-300">
                <a href="tel:+48660966375">
                  <FaPhoneAlt size={20} className="inline mb-1" /> +48 66 096
                  6375
                </a>
              </p>
            </div>
            <div>
              <p
                className="mb-[36px] md:mb-[30px] text-[20px] font-semibold"
                style={{ fontFamily: "Manrope" }}
              >
                {pageContent?.title}
              </p>
              <motion.section
                style={stylesWithCssVar({
                  opacity: opacitySection,
                  "--scale": scale,
                  "--opacity-border": opacityBorder,
                })}
                ref={targetRef}
                className="flex flex-row flex-wrap md:flex-col gap-[10px] md:gap-[20px]"
              >
                {navigationLinks.map((link, index) => (
                  <motion.div key={index} className="">
                    <Link href={link.href}>
                      <div className="draw-underline duration-200 ">
                        {link.name}
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.section>
            </div>
            <div>
              <p
                className="mb-[36px] md:mb-[30px] text-[20px] font-semibold"
                style={{ fontFamily: "Manrope" }}
              >
                {pageContent?.title2}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://www.Instagram.com/graph3d.pro"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={pageContent?.img1?.url}
                    alt="Description of CustomFurniture"
                    className="w-[192px] max-h-[192px] object-cover"
                  />
                </a>
                <a
                  href="https://www.Instagram.com/graph3d.pro"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={pageContent?.img2?.url}
                    alt="Description of CustomFurniture_2"
                    className="w-[192px] max-h-[192px] object-cover"
                  />
                </a>
                <a
                  href="https://www.Instagram.com/graph3d.pro"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={pageContent?.img3?.url}
                    alt="Description of CustomFurniture_3"
                    className="w-[192px] max-h-[192px] object-cover"
                  />
                </a>
                <a
                  href="https://www.Instagram.com/graph3d.pro"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={pageContent?.img4?.url}
                    alt="Description of CustomFurniture_4"
                    className="w-[192px] max-h-[192px] object-cover"
                  />
                </a>
              </div>
            </div>
          </div>

          <p className="mt-[30px] text-xs">
            © 2024 Graph3D Inc. All rights reserved.
          </p>
        </Container>
      </footer>
    </Layout>
  );
}

export default Footer;
