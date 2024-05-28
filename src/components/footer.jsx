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
        } py-6 center px-2]`}
      >
        <Container>
          <div className="flex-col md:flex-row flex gap-[30px] w-[100%] justify-between">
            <div className="flex flex-col ">
              <div className="mb-[30px]">
                <Link href="/">
                  <FaCube size={27} />
                  <p className="text-inherit text-3xl ml-2 ">3DGrapher.PRO</p>
                </Link>
              </div>

              <p
                className="text-[16px] "
                style={{ fontFamily: "Manrope", maxWidth: "384px" }}
              >
                {pageContent?.description}
              </p>
              <div className="flex space-x-4 my-4 items-center">
                {socialMediaLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover-effect w-[36px] h-[36px] flex justify-center items-center hover:text-[#f1ccae] duration-300"
                    style={{ border: "1px solid #4c4037", borderRadius: "50%" }}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p
                className="mb-[46px] md:mb-[30px] text-[20px] font-semibold"
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
                {navigationLinks.map((link) => (
                  <motion.div
                    key={link.id}
                    whileHover={{ scale: 1.1 }}
                    className="link-container duration-300"
                  >
                    <Link href={link.href} passHref>
                      <div>{link.name}</div>
                    </Link>
                  </motion.div>
                ))}
              </motion.section>
            </div>
            <div>
              <p
                className="mb-[46px] md:mb-[30px] text-[20px] font-semibold"
                style={{ fontFamily: "Manrope" }}
              >
                {pageContent?.title2}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://instagram.com"
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
                  href="https://instagram.com"
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
                  href="https://instagram.com"
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
                  href="https://instagram.com"
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
            © 2024 3DGrapher Inc. All rights reserved.
          </p>
        </Container>
      </footer>
    </Layout>
  );
}

export default Footer;
