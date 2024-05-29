"use client";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";

import { SelectedKeysContext } from "@/pages/_app";
import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { FaCube } from "react-icons/fa";
import ThemeToggle from "./themeToggle";

export default function Navigation({ headerData }) {
  const [pageContent, setPageContent] = useState(null);
  const { selectedKeys, setSelectedKeys } = useContext(SelectedKeysContext);
  const router = useRouter();
  const isActive = (href) => router.pathname == href;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (headerData) {
      setPageContent(headerData?.header);
    }
  }, [headerData]);

  useEffect(() => {
    const storedLocale = JSON.parse(localStorage.getItem("locale"));
    console.log(storedLocale, "storedLocale");
    if (storedLocale) {
      setSelectedKeys(storedLocale);
    }
  }, [selectedKeys]);

  useEffect(() => {
    if (selectedKeys) {
      const selectedLocale = Array.from(selectedKeys)[0];
      localStorage.setItem("locale", JSON.stringify(Array.from(selectedKeys)));
    }
  }, [selectedKeys]);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const handleMenuItemClick = (locale) => {
    setSelectedKeys(new Set([locale]));
    setIsMenuOpen(false);
  };
  return (
    <Navbar
      className="flex justify-between items-center max-w-[1280px] mx-auto absolute "
      maxWidth="xl"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="">
        <NavbarBrand className="flex items-center space-x-2">
          <Link href="/">
            <FaCube size={27} />
            <p className="text-inherit text-3xl ml-2">3DGrapher.PRO</p>
          </Link>
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden"
        />
      </NavbarContent>

      <NavbarMenu className="flex flex-col items-center ">
        <div className=" block lg:hidden">
          <ThemeToggle />
        </div>
        <Link href="/">
          <p
            className={
              isActive("/")
                ? "underlined text-5xl mt-4"
                : "draw-underline duration-200 text-5xl mt-4"
            }
          >
            {pageContent?.link5}
          </p>
        </Link>

        <Link href="/portfolio">
          <p
            className={
              isActive("/portfolio")
                ? "underlined text-5xl mt-4"
                : "draw-underline duration-200 text-5xl mt-4"
            }
          >
            {pageContent?.link1}
          </p>
        </Link>

        <Link href="/services">
          <p
            className={
              isActive("/services")
                ? "underlined text-5xl mt-4"
                : "draw-underline duration-200 text-5xl mt-4"
            }
          >
            {pageContent?.link2}
          </p>
        </Link>

        <Link href="/about">
          <p
            className={
              isActive("/about")
                ? "underlined text-5xl mt-4"
                : "draw-underline duration-200 text-5xl mt-4"
            }
          >
            {pageContent?.link3}
          </p>
        </Link>

        <Link href="/contact">
          <p
            className={
              isActive("/contact")
                ? "underlined text-5xl mt-4"
                : "draw-underline duration-200 text-5xl mt-4"
            }
          >
            {pageContent?.link4}
          </p>
        </Link>

        {selectedKeys ? (
          <Dropdown>
            <DropdownTrigger>
              <Button className="capitalize text-2xl  p-0">
                {Array.from(selectedKeys)[0]}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Single selection example"
              variant="flat"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={selectedKeys}
              onSelectionChange={setSelectedKeys}
              className="bg-[white] bg-opacity-50"
            >
              <DropdownItem className="text-[#4c4037]" key="en">
                English
              </DropdownItem>
              <DropdownItem className="text-[#4c4037]" key="pl">
                Polska
              </DropdownItem>
              <DropdownItem className="text-[#4c4037]" key="ru">
                Русский
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : null}
      </NavbarMenu>

      <NavbarContent className="hidden lg:flex gap-[15px]">
        <Link href="/">
          <p
            className={
              isActive("/")
                ? "underlined text-2xl "
                : "draw-underline duration-200 text-2xl"
            }
          >
            {pageContent?.link5}
          </p>
        </Link>

        <Link href="/portfolio">
          <p
            className={
              isActive("/portfolio")
                ? "underlined text-2xl"
                : "draw-underline duration-200 text-2xl text-nowrap"
            }
          >
            {pageContent?.link1}
          </p>
        </Link>

        <Link href="/services">
          <p
            className={
              isActive("/services")
                ? "underlined text-2xl"
                : "draw-underline duration-200 text-2xl text-nowrap"
            }
          >
            {pageContent?.link2}
          </p>
        </Link>

        <Link href="/about">
          <p
            className={
              isActive("/about")
                ? "underlined text-2xl"
                : "draw-underline duration-200 text-2xl text-nowrap"
            }
          >
            {pageContent?.link3}
          </p>
        </Link>

        <Link href="/contact">
          <p
            className={
              isActive("/contact")
                ? "underlined text-2xl"
                : "draw-underline duration-200 text-2xl text-nowrap"
            }
          >
            {pageContent?.link4}
          </p>
        </Link>

        {selectedKeys ? (
          <Dropdown>
            <DropdownTrigger>
              <Button className="capitalize text-2xl  p-0">
                {Array.from(selectedKeys)[0]}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Single selection example"
              variant="flat"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={selectedKeys}
              onSelectionChange={setSelectedKeys}
              className="bg-[white] bg-opacity-50"
            >
              <DropdownItem className="text-[#4c4037]" key="en">
                English
              </DropdownItem>
              <DropdownItem className="text-[#4c4037]" key="pl">
                Polska
              </DropdownItem>
              <DropdownItem className="text-[#4c4037]" key="ru">
                Русский
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : null}
      </NavbarContent>
      <div className="hidden lg:block">
        <ThemeToggle />
      </div>
    </Navbar>
  );
}
