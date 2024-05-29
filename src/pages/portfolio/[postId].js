import Container from "@/components/container";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Modal from "react-modal";
import { SelectedKeysContext } from "../_app";
Modal.setAppElement("#__next");

const Post = () => {
  const router = useRouter();
  const [post, setPost] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { onePostsData } = useContext(SelectedKeysContext);
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
    if (onePostsData) {
      setPost(onePostsData);
    }
  }, [onePostsData]);

  const transformedGallery = post?.gallery?.map((item) => ({
    src: item.url,
  }));

  const theme = "dark";

  return (
    <Layout>
      <div className="bg-[#f9f1ec] dark:bg-black dark:text-[#f1ccae]">
        {/* <Container> */}
        <div className="block md:hidden relative">
          <img
            key={post?.coverImage?.url}
            src={post?.coverImage?.url}
            alt="Gallery item"
            className="cursor-pointer object-cover w-full"
            style={{ maxWidth: "auto", height: "auto" }}
          />
        </div>

        <div className="flex w-full">
          <div
            style={{ backgroundImage: `url(${post?.coverImage?.url})` }}
            className="h-[100vh] flex-[30%] bg-cover relative hidden md:flex"
          ></div>
          <Container>
            <div className="flex-[70%] flex items-center  lg:mx-[66px]">
              {/* <div className="absolute top-[160px] left-[0px]"> */}

              {/* </div> */}
              <div>
                <button
                  onClick={() => {
                    router.push("/portfolio");
                  }}
                  className="btn justify-center bg-brown text-white text-center uppercase px-6 py-4 mt-12 md:mt-12 lg:my-6"
                >
                  Back
                </button>

                <h1 className="text-[#4c4037] dark:text-[#f1ccae]  bg-opacity-50 w-full  pt-4 text-xl md:text-5xl">
                  {post?.title}
                </h1>

                <p
                  className="font-playfair text-[#4c4037] dark:text-[#f1ccae] text-[18px] my-8 md:my-16"
                  style={{ fontFamily: "Manrope" }}
                >
                  {post?.description}
                </p>

                {/* <Gallery images={transformedGallery} /> */}
                <div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3  my-8">
                    {transformedGallery?.map((image, index) => (
                      <img
                        key={image?.src}
                        src={image?.src}
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
