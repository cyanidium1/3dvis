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
  const { selectedKeys1, setSelectedKeys1 } = useContext(SelectedKeysContext);
  const router = useRouter();
  const isActive = (href) => router.pathname == href;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // немного внезапных костылей


  useEffect(() => {
    if (headerData) {
      setPageContent(headerData?.header);
    }
  }, [headerData]);

  useEffect(() => {
    const storedLocale = JSON.parse(localStorage.getItem("locale"));

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

  return (
    <Navbar
      className="flex justify-between items-center max-w-[1280px] mx-auto absolute"
      maxWidth="xl"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="">
        <NavbarBrand className="flex items-center space-x-2 text-gray-950 dark:text-gray-100">
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
        <Link href="/">
          <p
            className={
              isActive("/")
                ? "underlined text-3xl mt-4"
                : "draw-underline duration-200 text-3xl mt-4"
            }
          >
            {pageContent?.link5}
          </p>
        </Link>

        <Link href="/portfolio">
          <p
            className={
              isActive("/portfolio")
                ? "underlined text-3xl mt-4"
                : "draw-underline duration-200 text-3xl mt-4"
            }
          >
            {pageContent?.link1}
          </p>
        </Link>

        <Link href="/3d-visualization">
          <p
            className={
              isActive("/3d-visualization")
                ? "underlined text-3xl pt-3"
                : "draw-underline duration-200 text-3xl pt-3 text-nowrap"
            }
          >
            {pageContent?.link6}
          </p>
        </Link>

        <Link href="/furniture-planning">
          <p
            className={
              isActive("/furniture-planning")
                ? "underlined text-3xl pt-3"
                : "draw-underline duration-200 text-3xl pt-3 text-nowrap"
            }
          >
            {pageContent?.link7}
          </p>
        </Link>

        <Link href="/interior-design">
          <p
            className={
              isActive("/interior-design")
                ? "underlined text-3xl pt-3"
                : "draw-underline duration-200 text-3xl pt-3 text-nowrap"
            }
          >
            {pageContent?.link8}
          </p>
        </Link>

        {/* <Dropdown>
          <DropdownTrigger>
            <Button flat>
              {pageContent?.link2}
            </Button>

          </DropdownTrigger>
          <DropdownMenu
            aria-label="Service selection"
            variant="flat"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={selectedKeys1}
            onSelectionChange={setSelectedKeys1}
            className="bg-[white] bg-opacity-50"
          >
            <DropdownItem className="text-[#f1ccae]" key="3v">

            </DropdownItem>
            <DropdownItem className="text-[#f1ccae]" key="FP">

            </DropdownItem>
            <DropdownItem className="text-[#f1ccae]" key="ID">

            </DropdownItem>
          </DropdownMenu>
        </Dropdown> */}

        {/* <Link href="/services">
          <p
            className={
              isActive("/services")
                ? "underlined text-3xl mt-4"
                : "draw-underline duration-200 text-3xl mt-4"
            }
          >
            {pageContent?.link2}
          </p>
        </Link> */}

        <Link href="/about">
          <p
            className={
              isActive("/about")
                ? "underlined text-3xl mt-4"
                : "draw-underline duration-200 text-3xl mt-4"
            }
          >
            {pageContent?.link3}
          </p>
        </Link>

        <Link href="/contact">
          <p
            className={
              isActive("/contact")
                ? "underlined text-3xl mt-4"
                : "draw-underline duration-200 text-3xl mt-4"
            }
          >
            {pageContent?.link4}
          </p>
        </Link>
        <div className="flex gap-[20px] items-center mt-[20px]">
          {selectedKeys ? (
            <Dropdown>
              <DropdownTrigger>
                <Button className="capitalize text-2xl text-[#f1ccae] p-0">
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
                <DropdownItem className="text-[#f1ccae] " key="en">
                  English
                </DropdownItem>
                <DropdownItem className="text-[#f1ccae]" key="pl">
                  Polska
                </DropdownItem>
                <DropdownItem className="text-[#f1ccae]" key="ru">
                  Русский
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : null}{" "}
          <div className=" block lg:hidden">
            <ThemeToggle />
          </div>
        </div>
      </NavbarMenu>

      <NavbarContent className="hidden lg:flex gap-[20px] text-nowrap">
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

        <Dropdown>
          <DropdownTrigger>
            <Button >
              <p className="draw-underline duration-200 text-2xl text-nowrap">
                {pageContent?.link2}
              </p>
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Service selection"
            variant="flat"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={selectedKeys1}
            onSelectionChange={setSelectedKeys1}
            className="bg-[white] bg-opacity-50"
          >
            <DropdownItem className="text-[#f1ccae]" key="3v">
              <Link href="/3d-visualization">
                <p
                  className={
                    isActive("/3d-visualization")
                      ? "underlined text-xl"
                      : "draw-underline duration-200 text-xl text-nowrap"
                  }
                >
                  {pageContent?.link6}
                </p>
              </Link>
            </DropdownItem>
            <DropdownItem className="text-[#f1ccae]" key="FP">
              <Link href="/furniture-planning">
                <p
                  className={
                    isActive("/furniture-planning")
                      ? "underlined text-xl"
                      : "draw-underline duration-200 text-xl text-nowrap"
                  }
                >
                  {pageContent?.link7}
                </p>
              </Link>
            </DropdownItem>
            <DropdownItem className="text-[#f1ccae]" key="ID">
              <Link href="/interior-design">
                <p
                  className={
                    isActive("/interior-design")
                      ? "underlined text-xl"
                      : "draw-underline duration-200 text-xl text-nowrap"
                  }
                >
                  {pageContent?.link8}
                </p>
              </Link>
            </DropdownItem>

          </DropdownMenu>
        </Dropdown>


        {/* <Link href="/services">
          <p
            className={
              isActive("/services")
                ? "underlined text-2xl"
                : "draw-underline duration-200 text-2xl text-nowrap"
            }
          >
            {pageContent?.link2}
          </p>
        </Link> */}

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
