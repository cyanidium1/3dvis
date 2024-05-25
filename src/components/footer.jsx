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
import { useRef } from "react";
import stylesWithCssVar from "@/utils/motion";

function Footer({ theme }) {
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
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer
      className={`${
        theme === "dark" ? "bg-black " : "bg-[#f9f1ec]  text-[#4c4037]"
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
              The Inner template features a clean, minimal and elegant design.
              Suitable for any interior design agency, architecture studios,
              real estate agency or furniture design website, perfect for
              showcasing your work with a delightful experience for your
              clients.
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
              Pages
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
              Follow us on Instagram
            </p>
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={CustomFurniture.src}
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
                  src={CustomFurniture_2.src}
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
                  src={CustomFurniture_3.src}
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
                  src={CustomFurniture_3.src}
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
  );
}

export default Footer;
