import Link from "next/link";
import Container from "./container";
import { FaCube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-black py-6">
            <Container>
                <div className="flex flex-col items-center">
                    <Link className=" text-white duration-300 flex space-x-2 items-center text-2xl" href="/">
                        <FaCube className="mr-2" /> 3DGrapher
                    </Link>
                    <div className="flex space-x-2 items-center text-white text-2xl">

                    </div>
                    <div className="flex space-x-2 mt-4">
                        <Link className="hover:text-white duration-300" href="/">
                            <p>Home</p>
                        </Link>

                        <Link className="hover:text-white duration-300" href='/portfolio'>
                            <p>Portfolio</p>
                        </Link>

                        <Link className="hover:text-white duration-300" href='/services'>
                            <p>Services</p>
                        </Link>

                        <Link className="hover:text-white duration-300" href='/about'>
                            <p>About</p>
                        </Link>

                        <Link className="hover:text-white duration-300" href='/contact'>
                            <p>Contact</p>
                        </Link>
                    </div>
                    <div className="flex space-x-4 my-4 items-center">
                        <a href="https://www.facebook.com/grafinia3dpl" target="_blank" rel="noreferrer" className="hover:text-white duration-300">
                            <FaFacebookSquare />
                        </a>
                        <a href="https://www.behance.net/helenakaraliok" target="_blank" rel="noreferrer" className="hover:text-white duration-300">
                            <FaBehance size={20} />
                        </a>
                        <a href="https://www.instagram.com/grafinia.3d" target="_blank" rel="noreferrer" className="hover:text-white duration-300">
                            <FaInstagram size={20} />
                        </a>
                        <a href="https://www.tiktok.com/@grafinia3d" target="_blank" rel="noreferrer" className="hover:text-white duration-300">
                            <FaTiktok />
                        </a>
                    </div>


                    <p className="text-xs">
                        © 2024 3DGrapher Inc. All rights reserved.
                    </p>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;