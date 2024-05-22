// import Link from "next/link";
import Container from "./container";
import { FaCube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

import { NavbarBrand, Link, Image } from "@nextui-org/react";
import CustomFurniture from "../../public/images/1.jpg";
import CustomFurniture_2 from "../../public/images/2.jpg";
import CustomFurniture_3 from "../../public/images/3.jpg";

function Footer({ theme }) {
  const footerLinks = ["home", "about", "portfolio", "services", "contact"];

  return (
    <footer
      className={`${
        theme === "dark" ? "bg-black" : "bg-[#f9f1ec]"
      } py-6 center px-6`}
    >
      <Container>
        <div className="flex gap-[30px] w-[100%] justify-between">
          <div className="flex flex-col gap-4">
            <Link href="/">
              <FaCube size={27} />
              <p className="text-inherit text-3xl ml-2">3DGrapher.PRO</p>
            </Link>

            <p
              className="text-[16px]"
              style={{ fontFamily: "Manrope", maxWidth: "384px" }}
            >
              The Inner template features a clean, minimal and elegant design.
              Suitable for any interior design agency, architecture studios,
              real estate agency or furniture design website, perfect for
              showcasing your work with a delightful experience for your
              clients.
            </p>
            <div className="flex space-x-4 my-4 items-center">
              <a
                href="https://www.facebook.com/grafinia3dpl"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white duration-300"
              >
                <FaFacebookSquare />
              </a>
              <a
                href="https://www.behance.net/helenakaraliok"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white duration-300"
              >
                <FaBehance size={20} />
              </a>
              <a
                href="https://www.instagram.com/grafinia.3d"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white duration-300"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@grafinia3d"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white duration-300"
              >
                <FaTiktok />
              </a>
            </div>
          </div>
          <div>
            <p
              className="mb-[30px] text-[20px] font-semibold"
              style={{ fontFamily: "Manrope" }}
            >
              Pages
            </p>
            <div className="flex flex-col gap-[20px]">
              <Link className="hover:text-white duration-300" href="/">
                <p>Home</p>
              </Link>

              <Link className="hover:text-white duration-300" href="/portfolio">
                <p>Portfolio</p>
              </Link>

              <Link className="hover:text-white duration-300" href="/services">
                <p>Services</p>
              </Link>

              <Link className="hover:text-white duration-300" href="/about">
                <p>About</p>
              </Link>

              <Link className="hover:text-white duration-300" href="/contact">
                <p>Contact</p>
              </Link>
            </div>
          </div>
          <div>
            <p
              className="mb-[30px] text-[20px] font-semibold"
              style={{ fontFamily: "Manrope" }}
            >
              Follow us on Instagram
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src={CustomFurniture.src}
                alt=""
                className="w-[192px] max-h-[192px] object-cover"
              />
              <Image
                src={CustomFurniture_2.src}
                alt=""
                className="w-[192px] max-h-[192px]  object-cover"
              />
              <Image
                src={CustomFurniture_3.src}
                alt=""
                className="w-[192px] max-h-[192px] object-cover"
              />
              <Image
                src={CustomFurniture_3.src}
                alt=""
                className="w-[192px] max-h-[192px]  object-cover"
              />
            </div>
          </div>
        </div>

        <p className="text-xs">© 2024 3DGrapher Inc. All rights reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;
