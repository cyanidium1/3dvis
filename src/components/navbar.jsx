import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import React from "react";
import { useRouter } from "next/router";

import { FaCube } from "react-icons/fa";
import { Navbar, NavbarBrand, NavbarContent, NavbarMenuToggle, NavbarMenu, Link, Button } from "@nextui-org/react";

export default function Navigation() {

    const router = useRouter()
    const isActive = (href) => router.pathname == href

    console.log(router.pathname)

    const [selectedKeys, setSelectedKeys] = React.useState(new Set(["EN"]));
    const selectedValue = React.useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <Navbar className="flex justify-between items-center max-w-[1280px] mx-auto absolute" onMenuOpenChange={setIsMenuOpen}>

            <NavbarContent className="">
                <NavbarBrand className="flex items-center space-x-2">
                    <Link href="/">
                        <FaCube size={27} />
                        <p className="text-inherit text-3xl ml-2">3DGrapher.PRO</p>
                    </Link>
                </NavbarBrand>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />

            </NavbarContent>

            <NavbarMenu className="flex flex-col items-center">
                <Link href="/">
                    <p className={isActive('/') ? 'underlined text-5xl mt-4' : 'draw-underline duration-200 text-5xl mt-4'}>Home</p>
                </Link>

                <Link href='/portfolio'>
                    <p className={isActive('/portfolio') ? 'underlined text-5xl mt-4' : 'draw-underline duration-200 text-5xl mt-4'}>Portfolio</p>
                </Link>

                <Link href='/services'>
                    <p className={isActive('/services') ? 'underlined text-5xl mt-4' : 'draw-underline duration-200 text-5xl mt-4'}>Services</p>
                </Link>

                <Link href='/about'>
                    <p className={isActive('/about') ? 'underlined text-5xl mt-4' : 'draw-underline duration-200 text-5xl mt-4'}>About</p>
                </Link>

                <Link href='/contact'>
                    <p className={isActive('/contact') ? 'underlined text-5xl mt-4' : 'draw-underline duration-200 text-5xl mt-4'}>Contact</p>
                </Link>

                <Dropdown>
                    <DropdownTrigger>
                        <Button
                            className="capitalize text-3xl mt-4 w-fit"
                        >
                            {selectedValue}
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                        className="bg-white opacity-65"
                        aria-label="Single selection example"
                        variant="flat"
                        disallowEmptySelection
                        selectionMode="single"
                        selectedKeys={selectedKeys}
                        onSelectionChange={setSelectedKeys}
                    >
                        <DropdownItem className="text-2xl" key="EN">English</DropdownItem>
                        <DropdownItem className="text-2xl" key="PL">Polska</DropdownItem>
                        <DropdownItem className="text-2xl" key="РУ">Русский</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarMenu>

            <NavbarContent className="hidden sm:flex gap-10">

                <Link href="/">
                    <p className={isActive('/') ? 'underlined text-2xl ' : 'draw-underline duration-200 text-2xl'}>Home</p>
                </Link>

                <Link href='/portfolio'>
                    <p className={isActive('/portfolio') ? 'underlined text-2xl' : 'draw-underline duration-200 text-2xl'}>Portfolio</p>
                </Link>

                <Link href='/services'>
                    <p className={isActive('/services') ? 'underlined text-2xl' : 'draw-underline duration-200 text-2xl'}>Services</p>
                </Link>

                <Link href='/about'>
                    <p className={isActive('/about') ? 'underlined text-2xl' : 'draw-underline duration-200 text-2xl'}>About</p>
                </Link>

                <Link href='/contact'>
                    <p className={isActive('/contact') ? 'underlined text-2xl' : 'draw-underline duration-200 text-2xl'}>Contact</p>
                </Link>

                <Dropdown>
                    <DropdownTrigger>
                        <Button
                            className="capitalize text-2xl"
                        >
                            {selectedValue}
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                        aria-label="Single selection example"
                        variant="flat"
                        disallowEmptySelection
                        selectionMode="single"
                        selectedKeys={selectedKeys}
                        onSelectionChange={setSelectedKeys}
                    >
                        <DropdownItem key="EN">English</DropdownItem>
                        <DropdownItem key="PL">Polska</DropdownItem>
                        <DropdownItem key="РУ">Русский</DropdownItem>
                    </DropdownMenu>
                </Dropdown>

            </NavbarContent>

        </Navbar>
    );
}
