import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import React from "react";
import { useRouter } from "next/router";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";

export default function Navigation(props) {

    const router = useRouter()
    const isActive = (href) => router.pathname == href

    console.log(router.pathname)

    const [selectedKeys, setSelectedKeys] = React.useState(new Set(["EN"]));
    const selectedValue = React.useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}>


            <NavbarContent justify="end">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
            </NavbarContent>

            <NavbarMenu className="flex flex-col items-center">
                <Link href="/">
                    <p className={isActive('/') ? 'draw-underline text-5xl mt-4' : 'hover:text-light-brown duration-200 text-5xl mt-4'}>Home</p>
                </Link>

                <Link href='/portfolio'>
                    <p className={isActive('/portfolio') ? 'draw-underline  text-5xl mt-4' : 'hover:text-light-brown duration-200 text-5xl mt-4'}>Portfolio</p>
                </Link>

                <Link href='/services'>
                    <p className={isActive('/services') ? 'draw-underline  text-5xl mt-4' : 'hover:text-light-brown duration-200 text-5xl mt-4'}>Services</p>
                </Link>

                <Link href='/about'>
                    <p className={isActive('/about') ? 'draw-underline  text-5xl mt-4' : 'hover:text-light-brown duration-200 text-5xl mt-4'}>About</p>
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
                        className="bg-white"
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
                    <p className={isActive('/') ? 'draw-underline text-2xl' : 'hover:text-light-brown duration-200 text-2xl'}>Home</p>
                </Link>

                <Link href='/portfolio'>
                    <p className={isActive('/portfolio') ? 'draw-underline text-2xl' : 'hover:text-light-brown duration-200 text-2xl'}>Portfolio</p>
                </Link>

                <Link href='/services'>
                    <p className={isActive('/services') ? 'draw-underline text-2xl' : 'hover:text-light-brown duration-200 text-2xl'}>Services</p>
                </Link>

                <Link href='/about'>
                    <p className={isActive('/about') ? 'draw-underline text-2xl' : 'hover:text-light-brown duration-200 text-2xl'}>About</p>
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
