// cms
import { performRequest } from "../lib/datocms";
import { useRouter } from "next/router";
// next & react components
import Layout from "@/components/layout";
import Head from "next/head";
import Image from "next/image";

// icons
import { FaCube } from "react-icons/fa";
import { SiApache } from "react-icons/si";
import { FaFileCode } from "react-icons/fa";

//custom components
import DGalery from "@/components/3DGalery/3DGalery";
import Container from "@/components/container";
import Footer from "@/components/footer";
import InfiniteScroll from "@/components/infiniteScroll";

// lib components
import ReactImageGallery from "react-image-gallery";
import Link from "next/link";

// cms
const PAGE_CONTENT_QUERY = `
  query Home {
    homepage {
      title
      description {
        value
      }
    }
  }`;

import Modal from "react-modal";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { useContext, useEffect, useState } from "react";
import { SelectedKeysContext } from "./_app";
import Loader from "@/components/loader";
import Marquee from "@/components/Marquee ";
Modal.setAppElement("#__next");

export default function Home() {
  const router = useRouter();
  const { homePageData } = useContext(SelectedKeysContext);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [pageContent, setPageContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState("dark");

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  useEffect(() => {
    if (homePageData) {
      setPageContent(homePageData);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, [homePageData]);

  const services = [
    {
      title: pageContent?.titleServices,
      description: pageContent?.descServices,
      image: pageContent?.imgServices?.url,
      link: "/3d-visualization",
    },
    {
      title: pageContent?.titleServices2,
      description: pageContent?.descServices2,
      image: pageContent?.imgServices2?.url,
      link: "/furniture-planning",
    },
    {
      title: pageContent?.titleServices3,
      description: pageContent?.descServices3,
      image: pageContent?.imgServices3?.url,
      link: "/interior-design",
    },
  ];

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  return (
    <Layout>
      {isLoading ? (
        <div className="loader-wrapper">
          <Loader />
        </div>
      ) : (
        <>
          <Head>
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/apple-touch-icon.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/favicon-32x32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/favicon-16x16.png"
            />
            <link rel="manifest" href="/site.webmanifest" />
            <title>3DGrapher</title>
          </Head>
          <main className="md:dark:bg-black md:dark:bg-transparent">
            {/* 360 gallery */}
            <div className="-z-10 absolute -top-24 block md:hidden pt-[100px] ">
              {/* <Marquee /> */}
              <InfiniteScroll />
            </div>
            <div className="hidden md:block bg-[#f9f1ec] dark:bg-black">
              <DGalery />
            </div>
            <section className="z-10 mt-96 md:mt-0 md:hidden md:bg-[#f9f1ec] md:dark:bg-black flex justify-center pt-6 md:pb-0 items-end md:items-center relative ">
              <Container>
                <div className="w-full ">
                  <div className="mx-auto md:mx-0 w-fit  bg-dark-brown bg-opacity-50 p-4 md:p-6">
                    <h2 className="playFairFont text-5xl md:text-8xl my-1 md:my-0 text-white">
                      {pageContent?.header}
                    </h2>
                    <p className="font-extralight text-xs md:text-2xl uppercase tracking-widest flex items-center text-white my-4 max-w-[250px] ">
                      {pageContent?.description}
                    </p>
                    <Link href="/portfolio" passHref>
                      <button className="btn justify-center bg-red-500 text-white text-center uppercase px-6 py-4 w-full">
                        {pageContent?.btnPortfolio}
                      </button>
                    </Link>
                    <Link href="/contact" passHref>
                      <button className="btn justify-center bg-brown text-white text-center uppercase px-6 py-4 w-full">
                        {pageContent?.btonContacts}
                      </button>
                    </Link>
                  </div>
                </div>
              </Container>
            </section>

            <section className="hidden h-screen md:flex justify-center pb-8 md:pb-0 items-end md:items-center relative ">
              <Container>
                <div className="w-full">
                  <div className="mx-auto md:mx-0 w-fit  bg-dark-brown bg-opacity-50 p-4 md:p-6">
                    <h2 className="playFairFont text-5xl md:text-8xl my-1 md:my-0 text-white">
                      {pageContent?.header}
                    </h2>
                    <p className="font-extralight text-xs md:text-2xl uppercase tracking-widest flex items-center text-white my-4 max-w-[250px]">
                      {pageContent?.description}
                    </p>
                    <div className="md:flex md:space-x-2 space-y-2 md:space-y-0">
                      <Link href="/portfolio" passHref>
                        <button className="btn justify-center bg-brown text-white text-center uppercase px-6 py-4 w-full">
                          {pageContent?.btnPortfolio}
                        </button>
                      </Link>
                      <Link href="/contact" passHref>
                        <button className="btn justify-center bg-brown text-white text-center uppercase px-6 py-4 w-full">
                          {pageContent?.btonContacts}
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Container>
            </section>

            <section className=" pt-[20px] bg-gradient-to-b from-transparent via-[#f9f1ec] via-20% to-[#f9f1ec]  dark:via-black dark:to-black text-[#4c4037] dark:text-[#f1ccae]">
              <Container>
                <div className="md:flex md:space-x-10 px-[24px]">
                  <div className="h-full flex flex-col justify-between">
                    <p className="mt-20 font-extralight text-lg uppercase tracking-widest flex items-center">
                      <SiApache className="mr-2" />
                      {pageContent?.titleWhoI}
                    </p>
                    <h3 className="playFairFont text-4xl md:text-6xl my-4">
                      {pageContent?.subtitleWhiI}
                    </h3>
                    <p className="font-extralight my-3">
                      {pageContent?.descWhoI}
                    </p>
                    <div className="space-x-4 mt-4 md:mb-0 hidden md:block ">
                      <button
                        className="btn justify-center bg-brown text-white text-center uppercase px-6 py-4 "
                        onClick={() => {
                          router.push("/contact");
                        }}
                      >
                        {pageContent?.btn1WhoI}
                      </button>
                      <button
                        onClick={() => {
                          router.push("/about");
                        }}
                        className="justify-center hover:text-light-brown hover:shadow-lg duration-300 text-brown text-center uppercase px-6 py-4"
                        style={{
                          boxShadow: "inset -1px -1px rgba(76, 64, 55, .25)",
                        }}
                      >
                        {pageContent?.btn2Who1}
                      </button>
                    </div>
                  </div>
                  <img
                    src={pageContent?.avatar?.url}
                    alt="Gallery item"
                    className="rounded-full mx-auto w-[250px] md:w-[400px] h-[250px] md:h-[400px] mt-[20px] "
                  />
                </div>
              </Container>
            </section>

            <section className="bg-[#f9f1ec] dark:bg-black px-[24px] text-[#4c4037] dark:text-[#f1ccae]">
              <Container>
                <div className="">
                  <p className="mt-20 font-extralight text-lg uppercase tracking-widest flex items-center">
                    <FaFileCode className="mr-2" />
                    {pageContent?.headerServices}
                  </p>
                  <h3 className="playFairFont text-4xl md:text-6xl mt-4 mb-6">
                    {pageContent?.subtitleServices}
                  </h3>
                </div>

                <div className="md:flex justify-between space-y-8 md:space-y-0">
                  {services.map((data, index) => (
                    <div className="w-fit md:mx-2" key={index}>
                      <img
                        alt={`Image ${index + 1}`}
                        src={data.image}
                        className="cursor-pointer object-cover w-full max-w-[370px] max-h-[500px]"
                      />
                      <div className="flex items-start justify-between my-2 ">
                        <p className="my-3 font-extralight text-lg uppercase tracking-widest flex items-center">
                          0{index + 1}.
                        </p>
                        <h3 className="playFairFont text-4xl mb-3 md:my-0">
                          {data.title}
                        </h3>
                      </div>
                      <p className="font-extralight max-w-[370px]">
                        {data.description}
                      </p>
                      <div className="mt-4 flex justify-center">
                        <button
                          className="btn justify-center bg-brown text-white text-center uppercase px-6 py-4 "
                          onClick={() => {
                            router.push(data.link);
                          }}
                        >
                          {pageContent?.btnServices}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </Container>
            </section>

            <section className="bg-[#f9f1ec] dark:bg-black px-[24px] text-[#4c4037] dark:text-[#f1ccae]">
              <Container>
                <div className="md:flex md:space-x-4">
                  <div className=" md:w-2/5">
                    <p className=" font-extralight text-lg uppercase tracking-widest flex items-center ">
                      <FaCube className="mr-2" /> {pageContent?.headerPortfolio}
                    </p>
                    <h3 className="playFairFont text-4xl md:text-6xl mt-4 mb-6">
                      {pageContent?.subtitlePortfolio}
                    </h3>
                    <p className="font-extralight mb-6">
                      {pageContent?.descPortfolio}
                    </p>
                    <div className="hidden md:block">
                      <Link
                        className=" hover:text-white duration-300 btn justify-center bg-brown text-white text-center uppercase px-6 py-4 mt-4"
                        href="/portfolio"
                      >
                        <p>{pageContent?.btnSectionPortfolio}</p>
                      </Link>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 my-8">
                    {pageContent?.galleryPortfolio?.map((image, index) => (
                      <img
                        key={image.src + index}
                        src={image.url}
                        alt="Gallery item"
                        onClick={() => handleImageClick(image, index)}
                        className="cursor-pointer object-cover w-full"
                        style={{ maxWidth: "200px", height: "100%" }}
                      />
                    ))}
                  </div>

                  <Link
                    className="block md:hidden  hover:text-white duration-300 btn justify-center bg-brown text-white text-center uppercase px-6 py-4 mt-4"
                    href="/portfolio"
                  >
                    <p>{pageContent?.btnSectionPortfolio}</p>
                  </Link>
                </div>
              </Container>
            </section>
          </main>
          <Footer theme={theme} />
          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="Image Modal"
            style={{
              content: {
                maxWidth: "30px",
                margin: "500px",
                padding: "10px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              },
              overlay: {
                backgroundColor: "rgba(0, 0, 0, 0.75)",
                zIndex: 1000,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            }}
          >
            {isLightboxOpen && (
              <Lightbox
                mainSrc={pageContent?.galleryPortfolio[currentImageIndex].url}
                nextSrc={
                  pageContent?.galleryPortfolio[
                    (currentImageIndex + 1) %
                      pageContent?.galleryPortfolio.length
                  ].url
                }
                prevSrc={
                  pageContent?.galleryPortfolio[
                    (currentImageIndex +
                      pageContent?.galleryPortfolio.length -
                      1) %
                      pageContent?.galleryPortfolio.length
                  ].url
                }
                onCloseRequest={() => {
                  setIsModalOpen(false);
                  setIsLightboxOpen(false);
                }}
                onMovePrevRequest={() =>
                  setCurrentImageIndex(
                    (currentImageIndex +
                      pageContent?.galleryPortfolio.length -
                      1) %
                      pageContent?.galleryPortfolio.length
                  )
                }
                onMoveNextRequest={() =>
                  setCurrentImageIndex(
                    (currentImageIndex + 1) %
                      pageContent?.galleryPortfolio.length
                  )
                }
              />
            )}
          </Modal>
        </>
      )}
    </Layout>
  );
}
