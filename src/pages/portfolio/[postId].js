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

  return (
    <Layout>
      <div className="flex w-full bg-black">
        <div
          className="h-[100vh] w-1/3 bg-cover flex items-center justify-start"
          style={{ backgroundImage: `url(${post.coverImage.url})` }}
        >
          <h1 className="transform -rotate-90 bg-dark-brown bg-opacity-50 w-full px-10 py-2 text-xl md:text-5xl">
            {post.title}
          </h1>
        </div>
        <div className="w-2/3 flex items-center  p-4">
          <div>
            <Link href="/portfolio">Back</Link>

            <p
              className="font-playfair text-[18px] "
              style={{ fontFamily: "Manrope" }}
            >
              {post.description}
            </p>

            {/* <div className='w-1/2'> */}
            {/* <Gallery images={transformedGallery} /> */}
            <div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
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
                    maxWidth: "400px",
                    margin: "auto",
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
                {console.log(isLightboxOpen, "isLightboxOpen")}
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
                        (currentImageIndex + transformedGallery.length - 1) %
                          transformedGallery.length
                      ].src
                    }
                    onCloseRequest={() => {
                      setIsModalOpen(false);
                      setIsLightboxOpen(false);
                    }}
                    onMovePrevRequest={() =>
                      setCurrentImageIndex(
                        (currentImageIndex + transformedGallery.length - 1) %
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
                {/* {selectedImage && (
                  <div>
                    <img
                      src={selectedImage.src}
                      alt="Selected"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                    <button onClick={closeModal}>Close</button>
                  </div>
                )} */}
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Post;
