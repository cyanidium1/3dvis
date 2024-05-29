// components/SocialMediaLinks.js
import React from "react";
import {
  FaFacebookSquare,
  FaBehance,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

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

const SocialMediaLinks = ({ data }) => {
  return (
    <div className="flex space-x-4 my-4 items-center">
      {data.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          style={{
            border: "1px solid #4c4037",
            borderRadius: "50%",
          }}
          className="hover-effect-about w-[36px] h-[36px] flex justify-center items-center hover:text-[#f1ccae] duration-300 text-[#4c4037]"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
