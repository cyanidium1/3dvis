import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { performRequest } from "../../lib/datocms";
import Head from "next/head";
import { Navbar } from "@nextui-org/react";
import Loader from "@/components/loader";
import Layout from "@/components/layout";
import Container from "@/components/container";
import Link from "next/link";
import ReactImageGallery from "react-image-gallery";
import PhotoAlbum from "react-photo-album";
import { Gallery } from "react-grid-gallery";
import Modal from "react-modal";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Image from "next/image";
import Footer from "@/components/footer";
Modal.setAppElement("#__next");

const Post = () => {
  const router = useRouter();
  const { postId } = router.query;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setIsLightboxOpen(true);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  useEffect(() => {
    if (postId !== undefined) {
      setLoading(true);
      async function fetchData() {
        try {
          const query = `
                        query {
                            portfoliopost(filter: { slug: { eq: "${postId}" } }) {
                                id
                                title
                                description
                                slug
                                gallery {url}
                                coverImage {url}
                            }
                        }
                    `;
          const { data } = await performRequest({ query: query });
          if (data.portfoliopost) {
            setPost(data.portfoliopost);
            console.log(data.portfoliopost);
          } else {
            console.error("Post not found");
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false);
        }
      }

      fetchData();
    }
  }, [postId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  const transformedGallery = post.gallery.map((item) => ({
    src: item.url,

    // thumbnail: item.url
  }));
  const theme = "dark";
  return (
    <Layout>
      <div className="bg-black">
        {/* <Container> */}
        <div className="block md:hidden">
          <img
            key={post.coverImage.url}
            src={post.coverImage.url}
            alt="Gallery item"
            className="cursor-pointer object-cover w-full"
            style={{ maxWidth: "auto", height: "auto" }}
          />
        </div>

        <div className="flex w-full">
          <div
            style={{ backgroundImage: `url(${post.coverImage.url})` }}
            className="h-[100vh] flex-[30%] bg-cover relative hidden md:flex"
          >
            <div className="absolute top-[270px] left-[-165px]">
              <h1 className="transform -rotate-90 bg-dark-brown bg-opacity-50 w-full px-10 py-2 text-xl md:text-5xl">
                {post.title}
              </h1>
            </div>
          </div>
          <Container>
            <div className="flex-[70%] flex items-center  lg:mx-[66px]">
              <div>
                <button
                  onClick={() => {
                    router.push("/portfolio");
                  }}
                  className="btn justify-center bg-brown text-white text-center uppercase px-6 py-4 mt-12 md:mt-12 lg:my-6"
                >
                  Back
                </button>
                <p
                  className="font-playfair text-[18px] my-16"
                  style={{ fontFamily: "Manrope" }}
                >
                  {post.description}
                </p>

                {/* <Gallery images={transformedGallery} /> */}
                <div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 my-8">
                    {transformedGallery.map((image, index) => (
                      <img
                        key={image.src}
                        src={image.src}
                        alt="Gallery item"
                        onClick={() => handleImageClick({ image, index })}
                        className="cursor-pointer object-cover w-full"
                        style={{ maxWidth: "200px", height: "auto" }}
                      />
                    ))}
                  </div>

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
                        mainSrc={transformedGallery[currentImageIndex].src}
                        nextSrc={
                          transformedGallery[
                            (currentImageIndex + 1) % transformedGallery.length
                          ].src
                        }
                        prevSrc={
                          transformedGallery[
                            (currentImageIndex +
                              transformedGallery.length -
                              1) %
                              transformedGallery.length
                          ].src
                        }
                        onCloseRequest={() => {
                          setIsModalOpen(false);
                          setIsLightboxOpen(false);
                        }}
                        onMovePrevRequest={() =>
                          setCurrentImageIndex(
                            (currentImageIndex +
                              transformedGallery.length -
                              1) %
                              transformedGallery.length
                          )
                        }
                        onMoveNextRequest={() =>
                          setCurrentImageIndex(
                            (currentImageIndex + 1) % transformedGallery.length
                          )
                        }
                      />
                    )}
                  </Modal>
                </div>
              </div>
            </div>
          </Container>
        </div>
        {/* </Container> */}
      </div>
      <Footer theme={theme} />
    </Layout>
  );
};

export default Post;
